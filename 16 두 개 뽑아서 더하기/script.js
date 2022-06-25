let arr = [5,2,1,3,5];

// console.time('solution_1')
// console.log(solution(arr));
// console.timeEnd('solution_1')

// function solution(numbers) {
//   let arr_sum = [];
//   let tmp = 0;
//   let arr_length= numbers.length
//   for(let i=0;i<arr_length;i++){
//     for(let j=i+1;j<arr_length;j++){
//       arr_sum.push(numbers[i]+numbers[j]);
//     }
//   }
//   let answer = new Set(arr_sum);
//   return [...answer].sort((a,b) => a-b)
// }


// console.time('solution_2')
// console.log(solution_2(arr));
// console.timeEnd('solution_2')

// // 코드 점수 6점

// function solution_2(numbers) {
//   let arr_sum = [];
//   let tmp = 0;
//   let arr_length= numbers.length
//   for(let i=0;i<arr_length;i++){
//     for(let j=i+1;j<arr_length;j++){
//       tmp = numbers[i]+numbers[j];
//       if (arr_sum.indexOf(tmp)==-1){
//         arr_sum.push(tmp)
//       }
//     }
//   }
//   return arr_sum.sort((a,b) => a-b)
// }  


// console.time('solution_best')
// console.log(solution_best(arr));
// console.timeEnd('solution_best')
// // 베스트 소스코드

// function solution_best(numbers) {
//     const temp = []

//     for (let i = 0; i < numbers.length; i++) {
//         for (let j = i + 1; j < numbers.length; j++) {
//             temp.push(numbers[i] + numbers[j])
//         }
//     }

//     const answer = [...new Set(temp)]

//     return answer.sort((a, b) => a - b)
// }