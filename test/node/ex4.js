setInterval(() => {
  const rand = parseInt(Math.random() * 10);
  console.log(`생성된 수는 ${rand}`);
  if (rand > 5) return console.log('아싸 로또 사자!');
  throw new Error('망했어요...');
}, 2000);
