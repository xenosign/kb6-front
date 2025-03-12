function generateRandomNumber() {
  console.log('숫자 생성 중...');

  setTimeout(() => {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log(`생성된 숫자: ${randomNumber}`);

    if (randomNumber >= 5) {
      console.log('결과: 통과');
    } else {
      console.log('결과: 탈락');
    }
  }, 1000);

  // 비동기 처리가 완료되기 전에 결과를 미리 출력
  console.log('결과 확인 완료!');
}

generateRandomNumber();
