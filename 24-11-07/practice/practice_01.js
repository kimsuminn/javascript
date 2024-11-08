// cm 단위를 입력시 inch 단위로 전환

let num = Number(prompt('cm 단위로 입력해주세요.', ''));

if (isNaN(num)) {
  alert(`${num}은 숫자입니까?`)
} else {
  // 1cm = 0.393701inch
  console.log(`${num}cm는 ${(num / 2.54).toFixed(2)}inch`);
  // toFixed() > 보여질 소수점 번째를 선택
}