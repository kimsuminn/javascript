# 24-11-07 연습문제

## 1. cm 단위를 입력시 inch 단위로 전환

```javascript
let num = Number(prompt('cm 단위로 입력해주세요.', ''));

if (isNaN(num)) {
  alert(`${num}은 숫자입니까?`)
} else {
  // 1cm = 0.393701inch
  console.log(`${num}cm는 ${(num / 2.54).toFixed(2)}inch`);
  // toFixed() > 보여질 소수점 번째를 선택
}
```

&nbsp;

## 2. 원화 입력시 달러로 변환

```javascript
let won = Number(prompt('원화를 입력해주세요.', ''));
console.log(`${won}원은 ${(won * 0.00072).toFixed(2)}$입니다.`);
```

&nbsp;

## 3. 상수를 입력시 그 값이 홀수인지 짝수인지 구분

```javascript
let a = Number(prompt('숫자', '')); 

if (a % 2 === 0) {
  console.log('짝수');
} else {
  console.log('홀수');
}
```

&nbsp;

## 4. 성적에 따른 등급 부여
- 97 - 100점: A+
- 90 - 96점: A
- 85 - 89점: B
- 75 - 84점: C
- 65 - 74점: D
- 그 외 F

```javascript
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
```

&nbsp;

## 5. 시간에 따라 인사말 출력
- 0 - 10시: 아침인사
- 12 - 16시: 오후인사
- 19시 이후: 저녁인사

```javascript
let time = new Date();
let hours = time.getHours();

if (6 <= hours && hours <= 10) {
  console.log('좋은 아침입니다.');
} else if (12 <= hours && hours <= 16) {
  console.log('좋은 오후입니다.');
} else if (hours >= 19) {
  console.log('좋은 저녁입니다.');
}
```

&nbsp;

## 6. BMI 계산기
- 키(cm), 몸무게(kg)를 입력받아 BMI 지수 계산
- 키를 m 단위로 바꿔서 계산할것

```javascript
let height = Number(prompt('키 cm로 입력하세요.', ''));
let weight = Number(prompt('몸무게 kg으로 입력', ''));

height /= 100;
console.log(`${weight / height ** 2}`);
```

&nbsp;

[제일위로](#24-11-07-연습문제)