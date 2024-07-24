function calculator(num1, o, num2) {
  switch (o) {
    case "+":
      return num1 + num2
      break;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      break;
  }
}

console.log(calculator(3, "+", 6)); // 결과값 9
console.log(calculator(11, "-", 6)); // 결과값 5
console.log(calculator(6, "*", 3)); // 결과값 18
console.log(calculator(15, "/", 3)); // 결과값 5