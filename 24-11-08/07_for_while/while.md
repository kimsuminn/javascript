# while
- if 조건문과 형태가 비슷한 반복문
- 문장을 한번만 실행하고 끝나는 것이 아니라 불표현식이 true면 계속 문장을 실행시킴

```javascript
while(조건식) {
  // 실행문
}
```

```javascript
let i = 0;

while(true) {
  alert(`${i}번째 반복입니다.`);
  i++;
} // 무한반복되는 코드
```

```javascript
// confirm() > 확인: true 취소: false 버튼이 만들어지는 윈도우 창
let i = 0;
while(confirm("계속하시겠습니까?")) {
  alert(`${i}번째 반복입니다.`);
  i++;
} // confirm 창에서 취소를 누르면 while문을 빠져나옴
```

```javascript
let i = 0;
let arr = [1, 2, 3, 4, 5];
let hap = 0;

while(i < arr.length) {
  console.log(`${i}번째방: ${arr[i]}`);
  hap += arr[i];

  i++;
}

console.log(hap); // 15
```

### for문으로 무한 반복 코드 작성

```javascript
for(;;) {
  // 무한반복
}
```

&nbsp;

### break
- 반복문을 벗어날 때 사용하는 키워드
- while 반복은 조건이 항상 참일 경우 무한반복하므로 이러한 무한루프를 break를 사용하여 종료함

```javascript
while(true) {
  break;
}
```

```javascript
let i = 1;
while (true) {
  console.log(i);

  if(i === 100) {
    break; // i가 100이되면 while문을 종료함
  }

  i++;
}
```

&nbsp;

### continue
반복문 안의 반복작업을 멈추고 반복문의 처음으로 돌아가 다음 반복작업을 진행

```javascript
for (let i = 0; i < 5; i++) {

  if (i % 2 !== 0) {
    continue; // i가 홀수일 때 다음 반복작업으로 넘어감
  }

  console.log(i);
}
```

&nbsp;

### 중첩 if문

```javascript
let age = Number(prompt('나이'));

if (age >= 20) {
  console.log('성인입니다.');

  if (age >= 65) {
    console.log('노인입니다.');
  } else {
    console.log('성인이지만 노인은 아닙니다.');
  }
} else {
  console.log('미성년자입니다.');
}
```

### 중첩반복문
- 반복문을 여러겹 중첩하여 사용함
- n차원에 대한 처리에 사용

```javascript
for (let i = 1; i <= 5; i++) {
  // 외부 반복문
  for (let j = 1; j <= 5; j++) {
    // 내부 반복문
    console.log(`i = ${i}, j = ${j}`);
  }
}
```

```javascript
// 구구단
for (let i = 1; i < 10; i++) {
  console.log(`${i}단`)
  for (let j = 1; j < 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
  console.log('');
}
```

&nbsp;

[제일위로](#while)