async function main() {
  const promise = await new Promise((resolve) => {
    setTimeout(() => {
      console.log('A');
      resolve();
    }, 1000);
  });

  console.log('B');
}
main();
