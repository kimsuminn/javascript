# 타입

### String
- 문자열 타입
- ""
- ''
- ``(문자열 타입 외 다른 데이터와 함께 사용할때)
  - `${데이터}`

### Number
- 숫자 타입
- 숫자 기입시 사용하며 부동 소수점 연산

### boolean
- 참(true), 거짓(false) 값만 주어짐

### undefined
- 값이 할당되지 않은 변수

### null
- 의도적으로 값이 없음을 나타낼 때 사용함

### NaN (not a number)
- 숫자 데이터 타입에 다른 데이터 타입이 저장될 경우 나타남

### typeof
- 변수, 데이터의 타입을 확인할 때 사용함

```javascript
let 이름 = "user";
let age = 19;
let 나이 = `${이름}이라는 사람은 만 ${age}세`;

console.log(나이); // user이라는 사람은 만 19세

console.log(0.1 + 1.1 == 1.2): // 부동 소수점 계산식에 따라 false

let 성별;
console.log(성별); // undefined

let 문자="문자";
console.log(Number(age)); // 19
console.log(Number(문자)); // NaN
console.log(String(문자)); // 문자

console.log(typeof age);  // number
console.log(typeof 문자); // string

console.log(typeof(20 > 10)); // false -> boolean
```

&nbsp;

[제일위로](#타입)