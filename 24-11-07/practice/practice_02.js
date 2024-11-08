// 원화 입력시 달러로 변환

let won = Number(prompt('원화를 입력해주세요.', ''));
console.log(`${won}원은 ${(won * 0.00072).toFixed(2)}$입니다.`);