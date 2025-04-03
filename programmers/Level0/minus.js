//정수 num1과 num2가 주어질 때, num1에서 num2를 뺀 값을 return하도록 soltuion 함수를 완성해주세요.

const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function solution(num1, num2) {
    var answer = num1-num2;
    return answer;
}

r1.question("첫번째 숫자: ",(input1) => {
    r1.question("두번째 숫자: ",(input2) => {
        const num1 = parseInt(input1);
        const num2 = parseInt(input2);

        console.log(solution(num1,num2));

        r1.close();
    })
})