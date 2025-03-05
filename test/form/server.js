const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// 미들웨어 설정
app.use(bodyParser.urlencoded({ extended: true })); // URL 인코딩된 폼 데이터 파싱
app.use(bodyParser.json()); // JSON 파싱

// CORS 설정 (다른 도메인에서의 요청 허용)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  next();
});

// 집계를 위한 변수
const votes = {
  dog: 0,
  cat: 0,
};

// GET 요청 처리
app.get('/form', (req, res) => {
  console.log('\n===== GET 요청이 들어왔습니다 =====');
  console.log('- 시간:', new Date().toLocaleString());

  // 1. 요청 URL 및 메소드
  console.log('\n[기본 요청 정보]');
  console.log('- URL:', req.url);
  console.log('- Method:', req.method);

  // 4. 쿼리 파라미터
  console.log('\n[쿼리 파라미터]');
  console.log(req.query);

  // 응답 전송
  res.status(200).json({
    message: 'GET 요청을 받았습니다',
    receivedData: req.query,
  });
});

// POST 요청 처리
app.post('/form', (req, res) => {
  console.log('\n===== POST 요청이 들어왔습니다 =====');
  console.log('- 시간:', new Date().toLocaleString());

  // 1. 요청 URL 및 메소드
  console.log('\n[기본 요청 정보]');
  console.log('- URL:', req.url);
  console.log('- Method:', req.method);

  // 4. 요청 바디 (폼 데이터)
  console.log('\n[요청 바디]');
  console.log(req.body);

  // 응답 전송
  res.status(200).json({
    message: 'POST 요청을 받았습니다',
    receivedData: req.body,
  });
});

// 투표 처리
app.post('/taste', (req, res) => {
  console.log('\n===== 투표 요청이 들어왔습니다 =====');
  console.log('- 시간:', new Date().toLocaleString());
  console.log('- 투표:', req.body.animal);

  // 투표 집계
  if (req.body.animal === 'dog') {
    votes.dog += 1;
  } else if (req.body.animal === 'cat') {
    votes.cat += 1;
  }

  console.log('- 현재 집계:', votes);

  // 결과 페이지로 리다이렉트
  res.redirect('/taste');
});

// 취향 투표를 위한 HTML 폼 제공
app.get('/taste', (req, res) => {
  const html = `
  <!DOCTYPE html>
  <html>
  <head>
    <title>강아지 vs 고양이 투표</title>
    <style>
      body { font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; }
      h1 { color: #333; }
      form { margin: 20px 0; padding: 15px; border: 1px solid #ddd; border-radius: 5px; }
      label { margin-right: 15px; }
      button { background: #4CAF50; color: white; padding: 8px 16px; border: none; border-radius: 4px; cursor: pointer; }
      button:hover { background: #45a049; }
      .results { margin-top: 20px; padding: 15px; background: #f9f9f9; border-radius: 5px; }
      .bar-container { width: 100%; background-color: #f1f1f1; border-radius: 3px; margin: 10px 0; }
      .bar { height: 24px; border-radius: 3px; text-align: right; padding-right: 10px; line-height: 24px; color: white; }
      .dog-bar { background-color: #2196F3; }
      .cat-bar { background-color: #ff9800; }
    </style>
  </head>
  <body>
    <div class="results">
      <h3>현재 투표 결과</h3>
      <p><strong>강아지:</strong> ${votes.dog}표 (${calculatePercentage(
    votes.dog
  )}%)</p>
      <div class="bar-container">
        <div class="bar dog-bar" style="width: ${calculatePercentage(
          votes.dog
        )}%">${votes.dog}</div>
      </div>
      <p><strong>고양이:</strong> ${votes.cat}표 (${calculatePercentage(
    votes.cat
  )}%)</p>
      <div class="bar-container">
        <div class="bar cat-bar" style="width: ${calculatePercentage(
          votes.cat
        )}%">${votes.cat}</div>
      </div>
      <p><strong>총 투표수:</strong> ${votes.dog + votes.cat}표</p>
    </div>
  </body>
  </html>
  `;

  res.send(html);
});

// 백분율 계산 함수
function calculatePercentage(value) {
  const total = votes.dog + votes.cat;
  if (total === 0) return 0;
  return Math.round((value / total) * 100);
}

// 서버 시작
app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다`);
  console.log(`폼 제출 엔드포인트: http://localhost:${PORT}/form`);
  console.log(`강아지 고양이 투표 엔드포인트: http://localhost:${PORT}/taste`);
});
