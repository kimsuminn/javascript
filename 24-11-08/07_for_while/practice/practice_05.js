// 별찍기

let star = '';
for (let i = 1; i < 10; i++) {
  for(let j = 0; j < i; j++) {
    star += '*';
  }
  star += '\n'
}
console.log(star);