//문자열 my_string이 매개변수로 주어집니다. my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.

const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function solution(my_string) {
    
    
    var answer = my_string.split('').reverse().join('');
    return answer;
}

r1.question("문자열 작성: ", (input) => {
    const my_string = input;

    console.log(solution(my_string));

    r1.close();
})