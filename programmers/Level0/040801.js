//정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.

const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function solution(n) {
    
    var answer = 0;
    
    for(let i = 0; i <= n; i+=2){
        
        answer += i;
      
    }
    
     return answer;
    
}

r1.question("숫자 n : ", (input) => {
    const n = parseInt(input);

    console.log("짝수의 합 : ", solution(n));

    r1.close();
})