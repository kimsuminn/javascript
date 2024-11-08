// 성적에 따른 등급 부여

let score = Number(prompt('성적을 입력해주세요',''));

switch(true) {
  case 97 <= score && score <= 100:
    alert('A+');
    break;
  case 90 <= score && score < 97: 
    alert('A');
    break;
  case 85 <= score && score < 90:
    alert('B');
    break;
  case 75 <= score && score < 85:
    alert('C');
    break;
  case 65 <= score && score < 75:
    alert('D');
    break;
  case 0 < score && score < 65:
    alert('F');
    break;
  default:
    alert('성적을 확인해주세요.');
    break;
}