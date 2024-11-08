// 시간에 따라 인사말 출력

let time = new Date();
let hours = time.getHours();

if (6 <= hours && hours <= 10) {
  console.log('좋은 아침입니다.');
} else if (12 <= hours && hours <= 16) {
  console.log('좋은 오후입니다.');
} else if (hours >= 19) {
  console.log('좋은 저녁입니다.');
}