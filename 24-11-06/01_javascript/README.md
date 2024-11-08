# Javascript

- [Javascript 연결 방법](#javascript-연결-방법)
- [async, defer](#async-defer)
- [기본문법](#기본문법)

## Javascript 연결 방법

### 1. 내부 스크립트

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>Javascript</title>
</head>
<body>

  <script>
    // Javascript 코드 작성
  </script>

</body>
</html>
```

### 2. 외부 스크립트

`파일명.js` 파일을 만든 후 html 파일에 연결

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>Javascript</title>
  <script src="./javascript.js">
    // 외부 스크립트 연결시 태그 내부에 코드 작성 불가
  </script>
</head>
<body>

</body>
</html>
```

&nbsp;

## async, defer

html은 문서를 순차적으로 읽기때문에 script가 DOM 요소와 상호작용해야 하는 경우에 script를 DOM 요소보다 위쪽에서 호출했을 때 script에 작성한 코드가 실행되지 못함

### async
- script를 비동기적으로 다운로드하며 다운로드가 완료되는 즉시 실행
- 실행순서를 보장하지 않음
- DOM이 완전히 파싱되기 전에 실행될 수 있음
- 독립적인 스크립트를 최대한 빨리 로드하고 실행할 경우 사용
  - 페이지 렌더링에 영향을 주지 않는 분석도구 혹은 외부 광고 스크립트

```html
<script src="./javascript.js" async></script>
```

### defer
- 스크립트가 비동기적으로 다운로드하지만 DOM문서가 모두 파싱된 후에 순차적으로 실행되도록 해줌
- 스크립트가 DOM 요소와 상호작용해야 하는 경우에 사용 (이벤트 리스너 추가시)
- 여러 스크립트 간의 실행 순서를 보장해야 할 때 사용
- 페이지 로딩 성능을 최적화 하고 싶을 때 사용

```html
<script src="./javascript.js" defer></script>
<script src="./javascript.js" defer="defer"></script>
```

&nbsp;

## 기본문법

### 출력

```javascript
console.log("Hello World!");
```

### 변수

데이터를 저장하고 참조하기 위한 식별자

#### 변수 선언 3가지 방법
- es6 이전: var -> 변수 규칙, 변수명 중첩, scope 무시
- es6 이후
  - let: 재할당이 가능한 변수
  - const: 재할당이 불가능한 변수, 절대 새로운 값으로 저장을 하면 안될 때 주로 사용함

### 변수 규칙

1. 선언
2. 대임 (할당) -> 데이터가 저장이 됨
3. 호출

&nbsp;

🌟 하나의 이름으로 한 번만 사용이 가능함

```javascript
let name; // 선언
name = 'user'; // 대입
console.log(name); // 호출
```
```javascript
let name = 'user' // 선언 + 대입
console.log(name);
```

```javascript
let a = 1, b = 2; // 다중선언 + 대입
console.log(a, b);
```

```javascript
let name = 'user';
name = 'customer'; // 재할당
```

```javascript
const name = 'user';
name = 'customer'; // const는 재할당 안됨
```

```javascript 
let name = 'user';

let name = 'customer'; // 위에서 name을 한 번 사용했기 때문에 오류가 생김
```

#### scope

__전역변수__
- global variable
- 프로그램 어디서나 접근할 수 있는 변수
- 함수나 블록 외부에서 선언된 변수

&nbsp;

__지역변수__
- local variable
- 블록, 함수 안에서만 접근 가능한 변수
- 함수나 블록 내부에서 선언된 변수

```javascript
let name = 'user';

{
  console.log(name); // user

  let a = 'name';
  console.log(a); // name
}

console.log(a); // 찾을 수 없음
```

### 변수이름규칙

1. 첫 글자는 영문, 언더바(_), 달러기호($)로 시작 가능 (숫자로 시작할 수 없음)
2. 특수기호는 언더바(_), 달러기호($)만 사용가능
3. 키워드는 변수명으로 사용할 수 없음 (ex. let, const..)
4. 띄워쓰기는 사용할 수 없음
5. 대소문자 구별 가능함

```javascript
// 모두 다른 변수명
let new1 = 1;
let neW1 = 1;
let nEw1 = 1;
let New1 = 1;
```

&nbsp;

[제일위로](#javascript)