
function 함수명(num) {
  if (num % 2 === 0) {
    return "짝수";
  } else {
    return "홀수";
  }
}

console.log(함수명(10)); // 결과값 "짝수";
console.log(함수명(7)); // 결과값 "홀수";