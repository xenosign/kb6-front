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

// GET 요청 처리
app.get('/form', (req, res) => {
  console.log('\n===== GET 요청이 들어왔습니다 =====');
  console.log('- 시간:', new Date().toLocaleString());

  // 1. 요청 URL 및 메소드
  console.log('\n[기본 요청 정보]');
  console.log('- URL:', req.url);
  console.log('- Method:', req.method);

  // // 2. 요청 헤더
  // console.log('\n[요청 헤더]');
  // console.log(req.headers);

  // // 3. 클라이언트 정보
  // console.log('\n[클라이언트 정보]');
  // console.log('- IP:', req.ip);
  // console.log('- User-Agent:', req.get('User-Agent'));

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

  // // 2. 요청 헤더
  // console.log('\n[요청 헤더]');
  // console.log(req.headers);

  // // 3. 클라이언트 정보
  // console.log('\n[클라이언트 정보]');
  // console.log('- IP:', req.ip);
  // console.log('- User-Agent:', req.get('User-Agent'));

  // 4. 요청 바디 (폼 데이터)
  console.log('\n[요청 바디]');
  console.log(req.body);

  // 응답 전송
  res.status(200).json({
    message: 'POST 요청을 받았습니다',
    receivedData: req.body,
  });
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다`);
  console.log(`폼 제출 엔드포인트: http://localhost:${PORT}/form`);
});
