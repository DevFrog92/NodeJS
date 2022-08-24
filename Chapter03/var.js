const odd = "홀수 입니다.";
const even = "짝수 입니다.";

module.exports = {
  odd,
  even
}

// module.exports를 통해서 한번에 대입하는 것 이외에, exports 객체에 하나씩 넣을 수 있다.
// exports 객체에 함수를 넣으면 module.exports에도 동일한 함수가 들어가게 된다.
// 즉, exports와 module.exports는 동일한 객체를 참조한다.

// exports.odd
// exports.even