# for

- [for in](#for-in)
- [for of](#for-of)
- [for](#for-1)

&nbsp;

## for in
- 배열과 함께 사용할 수 있는 반복문
- 배열의 요소를 하나하나 꺼내서 특정 문장을 실행할 때 사용
- 배열의 인덱스 번호를 출력

```javascript
for (let 반복변수 in (배열 or 객체)) {
  // 실행문
}
```

```javascript
let 점심 = ["연어초밥", "타코야끼", "닭꼬치", "떡볶이"];

for (let 메뉴 in 점심) {
  console.log(`${Number(메뉴) + 1}번째 추천 ${점심[메뉴]}`);
  // 1번째 추천 연어초밥
  // 2번째 추천 타코야끼
  // 3번째 추천 닭꼬치
  // 4번째 추천 떡볶이
}
```

&nbsp;

## for of
- 배열과 함께 사용할 수 있는 반복문
- 배열의 요소를 하나하나 꺼내서 특정 문장을 실행할 때 사용
- 배열 요소의 값을 출력

```javascript
for (let 반복변수 of (배열 or 객체)) {
  // 실행문
}
```

```javascript
let 점심 = ["연어초밥", "타코야끼", "닭꼬치", "떡볶이"];

for (let 메뉴 of 점심) {
  console.log(메뉴);
  // 연어초밥
  // 타코야끼
  // 닭꼬치
  // 떡볶이
}
```

&nbsp;

## for
반복 횟수가 정해진 경우에 주로 사용함

```javascript
for (초기식; 반복조건식; 증감식) {
  // 실행문
}
```

1. 초기식을 실행 (for문이 실행될 때 제일 처음 한번만 실행)
2. 조건식을 비교 true일 경우 실행문을 실행, false인 경우 반복문 종료
3. 증감식으로 가서 수치 연산 진행
4. 조건식으을 비교 하여 실행문 실행
... 증감식 조건식 무한 반복
5. 조건식이 false일 경우 for문 종료

```javascript
for (let i = 2; i <= 10; i+=2) {
  console.log(i);
  // 2
  // 4
  // 6
  // 8
  // 10
}
```

```javascript
let hap = 0;
for (let i = 1; i <= 10; i++) {
  hap += i;
  console.log(hap);
  // 1
  // 3
  // 6
  // 10
  // 15
  // 21
  // 28
  // 36
  // 45
  // 55
}

console.log(hap); // 55
```

&nbsp;

[제일위로](#for)