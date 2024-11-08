// BMI 계산기

let height = Number(prompt('키 cm로 입력하세요.', ''));
let weight = Number(prompt('몸무게 kg으로 입력', ''));

height /= 100;
console.log(`${weight / height ** 2}`);