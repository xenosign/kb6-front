// youKnow() 함수를 작성해 주세요
function youKnow(cb) {
  console.log('You know ~');
  cb();
}

function sayMyName() {
  console.log('엄.... 제 이름은 xxx 입니다');
}

function sayMyDinner() {
  console.log('내가 이따 먹을 저녁 메뉴는 xxx 입니다');
}

youKnow(sayMyName);
youKnow(sayMyDinner);
youKnow(() => {
  console.log('내일 아침은 xxx 를 먹겠어요');
});
