const sayHello = () => {
  console.log(`Hello, I'm ${this}`);
};

const boy = {
  name: 'Mike',
  sayHello,
};

const girl = {
  name: 'Jane',
  sayHello,
};

boy.sayHello();
girl.sayHello();
