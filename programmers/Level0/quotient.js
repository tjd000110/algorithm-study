//정수 num1, num2가 매개변수로 주어질 때, num1을 num2로 나눈 몫을 return 하도록 solution 함수를 완성해주세요.

const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function solution(num1, num2) {
    var answer = num1/num2;
    return Math.trunc(answer);
}

r1.question("num1: ", (input1) => {
    r1.question("num2 : ", (input2) => {
        const num1 = input1;
        const num2 = input2;

        console.log(solution(num1,num2));

        r1.close();
    })
})