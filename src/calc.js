export default function calc(questionCount = 3) {
  const rules = 'What is the result of the expression?';
  const questionsAnswers = [];
  const operationsMapping = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
  };
  const operators = ['+', '-', '*'];
  for (let i = 0; i < questionCount; i += 1) {
    const firstNum = Math.floor(Math.random() * 10);
    const secondtNum = Math.floor(Math.random() * 10);
    const operatorIndex = Math.floor(Math.random() * 3);
    const operator = operators[operatorIndex];
    const expression = [firstNum, operator, secondtNum]
      .map((el) => el.toString())
      .join(' ');
    const correctAnswer = operationsMapping[operator](firstNum, secondtNum)
      .toString();
    questionsAnswers.push({
      question: expression,
      correctAnswer,
    });
  }
  return { rules, questionsAnswers };
}
