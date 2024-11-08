// 성적에 따른 등급 부여

let score = Number(prompt('점수', ''));  

if (97 <= score && score <= 100) {
  console.log('A+');
} else if (score >= 90) {
  console.log('A');
} else if (score >= 85) {
  console.log('B');
} else if (score >= 75) {
  console.log('C');
} else if (score >= 65) {
  console.log('D');
} else if (isNaN(score)) {
  alert('경고');
} else {
  console.log('F');
}