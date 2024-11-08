# 24-11-08 switch 연습문제

## 1. 성적에 따른 등급 부여
- 97 - 100점: A+
- 90 - 96점: A
- 85 - 89점: B
- 75 - 84점: C
- 65 - 74점: D
- 그 외 F

```javascript
let score = Number(prompt('성적을 입력해주세요',''));

switch(true) {
  case 97 <= score && score <= 100:
    alert('A+');
    break;
  case 90 <= score && score < 97: 
    alert('A');
    break;
  case 85 <= score && score < 90:
    alert('B');
    break;
  case 75 <= score && score < 85:
    alert('C');
    break;
  case 65 <= score && score < 75:
    alert('D');
    break;
  case 0 < score && score < 65:
    alert('F');
    break;
  default:
    alert('성적을 확인해주세요.');
    break;
}
```

&nbsp;

## 2. 시간에 따라 인사말 출력
- 0 - 10시: 아침인사
- 12 - 16시: 오후인사
- 19시 이후: 저녁인사

```javascript
let time = new Date();
let hours = time.getHours();

switch(true) {
  case 6 <= hours && hours <= 10:
    alert('좋은 아침입니다.');
    break;
  case 12 <= hours && hours <= 16:
    alert('좋은 오후입니다.');
    break;
  case hours >= 19:
    alert('좋은 저녁입니다.');
    break;
}
```