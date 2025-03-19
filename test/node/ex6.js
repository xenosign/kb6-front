async function executePromise() {
  try {
    const num = await new Promise((resolve, reject) => {
      setTimeout(() => {
        // 0 ~ 10 사이의 난수 발생
        let num = parseInt(Math.random() * 10);
        if (num >= 5) {
          reject(num);
        }
        resolve(num);
      }, 1000);
    });
    console.log('무사 통과! 생성된 숫자 :', num);
  } catch (error) {
    console.log('Error 발생! 생성된 숫자 :', error);
  }
}

executePromise();
