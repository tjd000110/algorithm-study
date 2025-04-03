//머쓱이는 선생님이 몇 년도에 태어났는지 궁금해졌습니다. 2022년 기준 선생님의 나이 age가 주어질 때, 선생님의 출생 연도를 return 하는 solution 함수를 완성해주세요

const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function solution(age) {
    var answer = 2022-age+1;
    return answer;
}

r1.question("나이를 입력하세요:", (input) => {
    const age = parseInt(input);

    
    console.log("출생연도:",solution(age));
    
    r1.close();
})
