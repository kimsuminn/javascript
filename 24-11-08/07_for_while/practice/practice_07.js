// 중첩반복문을 사용하여 역 피라미드 구조 만들기

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