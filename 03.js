
function isEvenOrOdd(num) {
  if (num % 2 === 0) {
    return "짝수";
  } else {
    return "홀수";
  }
}

console.log(isEvenOrOdd(10)); // 결과값 "짝수";
console.log(isEvenOrOdd(7)); // 결과값 "홀수";