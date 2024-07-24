const scores = [36, 62, 72, 55, 86, 95, 92, 48, 81];

function 함수명(scores) {
  return scores.map((score) => score + 3);
}

const newScore = 함수명(scores);


console.log(scores);
console.log(newScore); // 기대값: [39, 65, 75, 58, 89, 98, 95, 51, 84]