//정수 num1, num2가 매개변수로 주어질 때, num1를 num2로 나눈 나머지를 return 하도록 solution 함수를 완성해주세요.

const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function solution(num1, num2) {
    var answer = num1%num2;
    return answer;
}

r1.question("첫번째 숫자: ", (input1) => {
    r1.question("두번째 숫자: ", (input2) => {
        const num1 = parseInt(input1);
        const num2 = parseInt(input2);

        console.log("나머지: ", solution(num1, num2));

        r1.close();
    })
})