const classArr = [
  { id: 1, name: '안은현' },
  { id: 2, name: '강병현' },
  { id: 3, name: '염다빈' },
  { id: 4, name: '권다연' },
  { id: 5, name: '이혜원' },
  { id: 6, name: '김은지' },
  { id: 7, name: '이준범' },
  { id: 8, name: '김지민' },
  { id: 9, name: '김연후' },
  { id: 10, name: '강수민' },
  { id: 11, name: '김보성' },
  { id: 12, name: '양서진' },
  { id: 13, name: '장현지' },
  { id: 14, name: '최재원' },
  { id: 15, name: '채수정' },
  { id: 16, name: '유예원' },
  { id: 17, name: '최예빈' },
  { id: 18, name: '전규진' },
  { id: 19, name: '강민재' },
  { id: 20, name: '김어진' },
  { id: 21, name: '김영오' },
  { id: 22, name: '서승준' },
  { id: 23, name: '이호진' },
  { id: 24, name: '김희주' },
  { id: 25, name: '곽효재' },
  { id: 26, name: '유수상' },
  { id: 27, name: '김서연' },
  { id: 28, name: '안태현' },
];

const oddIdArr = classArr.reduce(function (acc, cur, idx) {
  if (cur.id % 2 === 1) {
    acc.push(cur);
  }
  return acc;
}, []);

const allNameStr = classArr.reduce(function (acc, cur, idx) {
  return (acc += cur.name);
}, '');

console.log('🚀 ~ allNameStr ~ allNameStr:', allNameStr);

console.log('🚀 ~ oddIdArr ~ oddIdArr:', oddIdArr);

// const sumId = classArr.reduce(function (acc, cur, idx) {
//   return (acc += cur.id);
// }, 0);

// console.log('🚀 ~ sumId ~ sumId:', sumId);

// const addedClassArr = classArr.map(function (student, index) {
//   return {
//     ...student,
//     condition: 'good',
//   };
// });

// console.log('🚀 ~ addedClassArr ~ addedClassArr:', addedClassArr);

// const editedClassArr = classArr.map(function (student, index) {
//   if (student.id % 2 === 0) {
//     return {
//       ...student,
//       name: student.name + '(짝수번)',
//     };
//   } else {
//     return {
//       ...student,
//       id: student.id * 2 + 1,
//     };
//   }
// });

// console.log('🚀 ~ editedClassArr ~ editedClassArr:', editedClassArr);

// const overIdTenArr = classArr.filter(function (student, index) {
//   return student.id >= 10;
// });

// const overIdTenArr2 = classArr.filter((student, index) => student.id >= 10);

// console.log('🚀 ~ overIdTenArr ~ overIdTenArr:', overIdTenArr);

// const oddIdClassArr = classArr.filter(function (el, idx) {
//   return el.id % 2 === 1;
// });
// console.log('🚀 ~ oddIdClassArr ~ oddIdClassArr:', oddIdClassArr);

// const evenIdClassArr = classArr.filter((el, idx) => el.id % 2 === 0);

// console.log('🚀 ~ evenIdClassArr:', evenIdClassArr);

// const findedIndex = classArr.findIndex(function (student, index) {
//   return student.name === '서승준';
// });

// const findedIndex2 = classArr.findIndex(
//   (student, index) => student.name === '서승준'
// );
// console.log('🚀 ~ findedIndex2:', findedIndex2);

// console.log('🚀 ~ findedIndex ~ findedIndex:', findedIndex);
