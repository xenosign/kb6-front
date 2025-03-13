function shouldIBuyLotto() {
  console.log('나 로또 사도 될까!?');
  return new Promise((resolve) => {
    setTimeout(() => {
      const rand = parseInt(Math.random() * 10);
      console.log(`나온 숫자는 ${rand}`); // rand 가 5 이상이면 로또 사자!
      if (rand >= 5) {
        resolve('아싸! 로또 사자!');
      } else {
        resolve('아... 망했어요...');
      }
    }, 3000);
  });
}

// 사용 방법
shouldIBuyLotto().then((msg) => {
  console.log(msg);
});
