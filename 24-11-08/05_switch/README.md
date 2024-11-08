# switch
- 여러 조건을 처리할 때 유용한 제어문
- 주어진 표현식의 값을 case 값과 비교하여 일치하는 경우 해당 실행문을 실행

```javascript
switch (표현식) {
  case 값:
    // 실행문
    break; // 해당 실행문을 실행시키고 종료

  case 값:
    // 실행문
    break;

  default:
    // 위의 어떤 case와도 일치하지 않을 때 실행됨
    break;
}
```

```javascript
let 숫자 = Number(prompt('숫자', ''));

switch(숫자 % 2) {
  case 0:
    alert('짝수입니다.');
    break;

  case 1:
    alert('홀수입니다.');
    break;

  default:
    alert('숫자를 입력해주세요')
    break;
}
```

```javascript
switch(날짜) {
  case 0:
    alert('오늘은 일요일입니다.')
    break;
  case 1:
    alert('오늘은 월요일입니다.');
    break;
  case 2:
    alert('오늘은 화요일입니다.');
    break;
  case 3:
    alert('오늘은 수요일입니다.');
    break;
  case 4:
    alert('오늘은 목요일입니다.');
    break;
  case 5:
    alert('오늘은 금요일입니다.');
    break;
  case 6:
    alert('오늘은 토요일입니다.');
    break;
  default:
    alert('무슨 요일인지 확인이 안됩니다.');
}
```

```javascript
let age = 'a';

switch(true) {
  case age >= 20:
    alert('성인입니다.');
    break;
  case age < 20:
    alert('미성년자입니다.');
    break;
  default:
    alert('나이를 확인해주세요.');
}
```

&nbsp;

[제일위로](#switch)