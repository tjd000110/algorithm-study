const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function solution(num1, num2) {
    var answer = num1 * num2;
    return answer;
}


rl.question("첫 번째 숫자를 입력하세요: ", (input1) => {
    rl.question("두 번째 숫자를 입력하세요: ", (input2) => {
        const num1 = parseInt(input1);
        const num2 = parseInt(input2);

        
        console.log("두 수의 곱:", solution(num1, num2));

        rl.close();
    });
});