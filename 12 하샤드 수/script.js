let numbers = 11; // 1 이상, 10000 이하인 정수입니다.

// 코드 점수 2

// console.time('solution_1')
// console.log(solution(numbers));
// console.timeEnd('solution_1')

// function solution(numbers) {
//     let division = numbers;
//     let sum = 0;
//     while(numbers>0){
//         sum = sum+ numbers%10;
//         numbers = Math.floor(numbers/10);
//     }
//     return (division/sum)%1==0?true:false;
// }


// 문제가 개편되었습니다. 이로 인해 함수 구성이나 테스트케이스가 변경되어, 과거의 코드는 동작하지 않을 수 있습니다.
// 새로운 함수 구성을 적용하려면 [코드 초기화] 버튼을 누르세요. 단, [코드 초기화] 버튼을 누르면 작성 중인 코드는 사라집니다.
function Harshad(n){
  return !(n % (n + "").split("").reduce((a, b) => +b + +a ));
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(Harshad(148))
    
