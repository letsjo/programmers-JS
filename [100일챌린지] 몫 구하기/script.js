// [JavaScript 알고리즘 100일 챌린지]
// https://www.youtube.com/playlist?list=PLkfUwwo13dlWZxOdbvMhkzhAowaiEjuGS

// 문제
// https://school.programmers.co.kr/learn/courses/30/lessons/120805

// 내가 푼 풀이
function solution(num1, num2) {
    return Math.floor(num1 / num2);
}

console.log(solution(7, 2));

// 추천 풀이

function recommend(num1, num2) {
    var answer = ~~(num1 / num2);
    return answer;
}

/**
 * ~n 은 어떻게 될까?
 * 
 * * 5 (1001) -> 0110 로 변경
 * 실제 10진법으로 -(n+1) 로 변경됨
 * 
 * ~~n
 * -(-(n+1)+1)
 * -(-n-1+1)
 * n
 * 
 * ~~5.1 => 5
 */

console.log(recommend(7, 2));