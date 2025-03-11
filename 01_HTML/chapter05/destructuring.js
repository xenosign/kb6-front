const user = {
  id: 1,
  name: 'tetz',
  email: 'xenosign@naver.com',
};

// const { id, name, email } = user;

// console.log(id, name, email);

// const id = user.id;
// const name = user.name;
// const email = user.email;

const fruits = ['수박', '딸기', '바나나'];
const [a, b, c] = fruits;

console.log(fruits);
console.log(...fruits);

function conLog(a, b, c) {
  console.log(a, b, c);
}

conLog(fruits[0], fruits[1], fruits[2]);
conLog(...fruits);

const string = 'apple';
const strArr = string.split('');
const strArr2 = [...string];
console.log(strArr);
console.log(strArr2);

const arr = [1, 2, 3, 4];

const copyArr = arr;
const hardCopyArr = [...arr];

console.log(arr === copyArr);
console.log(arr === hardCopyArr);

const person = { name: '김은지', age: 24 };
const job = { title: '개발자', company: '구글' };

const profile = {
  ...person,
  ...job,
  location: '인천',
};

console.log(profile);

const personalInfo = {
  name: '이효석',
  age: 41,
  email: 'xenosign@naver.com',
};

const jobInfo = {
  position: '코딩 강사',
  experience: 4,
};

const profile2 = {
  ...personalInfo,
  ...jobInfo,
  addr: '서대문구',
};

const { name, age, email, position, experience, addr } = profile2;

console.log(name, age, email, position, experience, addr);

const locationOne = {
  country: 'korea',
};

const locationTwo = {
  country: 'korea',
};

console.log(locationOne === locationTwo);

const jsonLocation1 = JSON.stringify(locationOne);
console.log(jsonLocation1);

const jsonLocation2 = JSON.stringify(locationTwo);
console.log(jsonLocation2);

console.log(jsonLocation1 === jsonLocation2);
