//정수 num1과 num2가 매개변수로 주어질 때, num1을 num2로 나눈 값에 1,000을 곱한 후 정수 부분을 return 하도록 solution 함수를 완성해주세요.

const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function solution(num1, num2) {
    var answer = (num1/num2)*1000;
    return Math.trunc(answer);
}

r1.question("첫번째 : ", (input1) => {
    r1.question("두번째 : ",(input2) => {
        const num1 = parseInt(input1);
        const num2 = parseInt(input2);

        console.log("값 : ", solution(num1, num2));
    })
})