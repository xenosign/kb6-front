function youKnow(cb) {
  console.log('You know ~');
  cb();
}

function sayMyName() {
  console.log('엄.... 제 이름은 이효석 입니다');
}

function sayMyDinner() {
  console.log('내가 이따 먹을 저녁 메뉴는 맥주 입니다');
}

youKnow(sayMyName);
youKnow(sayMyDinner);
youKnow(function () {
  console.log('내일 아침은 빵을 먹겠어요');
});
