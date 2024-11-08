# 24-11-08 for while 연습문제

## 1. 1 ~ 10까지 곱한 값을 반복문을 사용하여 계산

```javascript
let result_1 = 1;
for (let i = 1; i <= 10; i++) {
  result_1 *= i;
}

console.log(`result_1 = ${result_1}`);
```

&nbsp;

## 2. 1 ~ 30 홀수만 출력 후 더한 값 계산

```javascript
let result_2 = 0;
for (let i = 1; i <= 30; i+=2) {
  // console.log(i);
  result_2 += i;
}

console.log(`result_2 = ${result_2}`);
```

&nbsp;

## 3. [11, 22, 33, 44, 55]의 합 계산

```javascript
let arr = [11, 22, 33, 44, 55];
let result_3 = 0;
for (let i of arr) {
  result_3 += i;
} 

console.log(`result_3 = ${result_3}`);
```

&nbsp;

## 4. 10에서 1까지 역순으로 반복문 표기

```javascript
for (let i = 10; i > 0; i--) {
  console.log(i);
}
```

&nbsp;

## 5. 별찍기

```javascript
let star = '';
for (let i = 1; i < 10; i++) {
  for(let j = 0; j < i; j++) {
    star += '*';
  }
  star += '\n'
}
console.log(star);
```

&nbsp;

## 6. 중첩반복문을 사용하여 피라미드 구조 만들기

```javascript
let star = '';

for (let i = 1; i < 10; i+=2) {
  for (let j = 0; j < 10 - i; j+=2) {
    star += ' ';
  }

  for (let j = 0; j < i; j++) {
    star += '*';
  }

  star += '\n';
}

console.log(star);
```

&nbsp;

## 7. 중첩반복문을 사용하여 역 피라미드 구조 만들기

```javascript
let star = '';

for (let i = 9; i > 0; i-=2) {
  for (let j = 0; j < 10 - i; j+=2) {
    star += ' ';
  }

  for (let j = 0; j < i; j++) {
    star += '*';
  }

  star += '\n';
}

console.log(star);
```