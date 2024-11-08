// 시간에 따라 인사말 출력

let time = new Date();
let hours = time.getHours();

switch(true) {
  case 6 <= hours && hours <= 10:
    alert('좋은 아침입니다.');
    break;
  case 12 <= hours && hours <= 16:
    alert('좋은 오후입니다.');
    break;
  case hours >= 19:
    alert('좋은 저녁입니다.');
    break;
}