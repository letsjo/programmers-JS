// 문제 설명
// 문자열을 압축하는 방법에는 여러 가지가 있습니다. 그중 한가지 방법은 다음과 같습니다.

// 주어진 문자열에서 S라는 문자열이 K 번 반복될 경우 이를 K(S)로 표현할 수 있습니다.
// 예를 들어 문자열이 "hihihi"인 경우 "3(hi)"와 같이 표현할 수 있습니다. 또 문자열이 "hihihicohihihico"라면 "2(3(hi)co)"와 같이 표현할 수 있습니다.

// 압축된 문자열 compressed가 주어질 때, 원래 문자열을 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// compressed의 길이는 1 이상 100 이하입니다.
// compressed는 숫자 '0'~'9', 괄호 '(', ')', 알파벳 소문자로만 이루어진 문자열입니다.
// compressed는 알파벳 소문자로만 이루어진 문자열을 압축한 문자열입니다.
// 따라서, compressed를 원래 문자열로 복원하면 알파벳 소문자로만 이루어진 문자열이 됩니다.
// 항상 올바르게 압축된 문자열만 입력으로 주어집니다.
// return 하는 원래 문자열의 길이는 1 이상 1,000 이하입니다.
// 입출력 예
// compressed	result
// "3(hi)"	"hihihi"
// "2(3(hi)co)"	"hihihicohihihico"
// "10(p)"	"pppppppppp"
// "2(2(hi)2(co))x2(bo)"	"hihicocohihicocoxbobo"
// 입출력 예 설명
// 입출력 예 #1
// 문제 설명과 같습니다.

// 입출력 예 #2
// 문제 설명과 같습니다.

// 입출력 예 #3
// 원래 문자열은 p가 연속해서 10개 나오는 문자열입니다.

// 입출력 예 #4
// "2(2(hi)2(co))x2(bo)" 의 원래 문자열은 "hihicocohihicocoxbobo"입니다.

const compressed = "2(3(hi)co)";
// const compressed = "2(2(hi)2(co))x2(bo)";

console.log(solution(compressed));



function solution(compressed) {
  let regExp = /[0-9]+\(([^()]+)\)/gm;
  let regUnit = /([^()]+)/gm;
  let matches = compressed.match(regExp);
  while(matches != null){
    matches = compressed.match(regExp);
    matches?.map((replaceString)=>{
      let check = replaceString.match(regUnit);
      compressed = compressed.replace(replaceString, check[1].repeat(check[0]));
    })
  }
  return compressed;
}
