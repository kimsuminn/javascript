# if

## 제어문
프로그램의 순차적인 흐름을 제어할 때 사용하는 실행문

### if
조건식의 결과가 true면 주어진 실행문을 실행하고, false면 아무것도 실행하지 않음

```javascript
if (true) {
  console.log('참');
}

if (20 < 10) {
  console.log('거짓'); // 실행되지 않음
}
```

```javascript
let time = new Date(); // 브라우저에서의 시간대를 가져오는 키워드
console.log(time);

let hours = time.getHours(); // 브라우저의 시간대에서 시간의 값만 추출
console.log(hours);

if (hours >= 12) {
  console.log(`%{hours}시는 오후입니다.`);
}

if (hours < 12) {
  console.log(`${hours}시는 오전입니다.`)
}
```

```javascript
// prompt('질문', '가이드 메세지')
// : 질의 응답창을 window에서 출력
// : 입력받은 값은 문자열로 인식

// alert() > window에서 경고창을 출력

let age = Number(prompt('현재 나이를 입력해주세요.', 'ex. 19'));

if (age < 20) {
  alert('당신은 미성년자입니다.');
} 

if (age >= 20) {
  alert('당신은 성인입니다.');
}
```

&nbsp;

### else
if문과 같이 사용할 수 있는 else문은 조건식의 결과가 false일 때 주어진 실행문을 실행

```javascript
if (true) {
  // 참일 때 실행
} else {
  // 거짓일 때 실행
}
```

```javascript
let time = new Date(); 
console.log(time);

let hours = time.getHours();
console.log(hours);

if (hours >= 12) {
  console.log(`%{hours}시는 오후입니다.`);
} else {
  console.log(`${hours}시는 오전입니다.`)
}
```

```javascript
let age = Number(prompt('현재 나이를 입력해주세요.', 'ex. 19'));

if (age < 20) {
  alert('당신은 미성년자입니다.');
} else {
  alert('당신은 성인입니다.');
}
```

&nbsp;

### else if
- 여러 조건을 처리할 때 사용하는 제어문
- 여러개의 조건을 순차적으로 설정 및 확인

```javascript
let age = Number(prompt('현재 나이를 입력해주세요.', 'ex. 19'));

if (age <= 7) {
  alert('유년기');
} else if (age < 20) {
  alert('청소년');
} else if (age < 40) {
  alert('성인');
} else if (age < 60) {
  alert('중년');
} else if (age < 120) {
  alert('어르신');
} else if (isNaN(age)) {
  alert('나이를 입력해주세요.');
} else {
  alert('인외의 어떠한 존재');
}
```

&nbsp;

[제일위로](#if)