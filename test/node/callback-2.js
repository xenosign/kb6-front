function generateRandomNumber(callback) {
  console.log('숫자 생성 중...');

  setTimeout(() => {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log(`생성된 숫자: ${randomNumber}`);

    const result = randomNumber >= 5 ? '통과' : '탈락';

    // 결과를 콜백 함수로 전달
    callback(randomNumber, result);
  }, 1000);
}

generateRandomNumber((number, result) => {
  console.log(`결과: ${result}`);
  console.log('결과 확인 완료!');
});
