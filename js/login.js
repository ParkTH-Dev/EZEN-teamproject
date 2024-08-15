// modal
const long = document.querySelector("#longModal");
// 3 try long num

//1 각 인풋에 틀린 조건을 만들어 준다.
//2 각 인풋의 틀린 조건이 3번이상 반복되면 long의 active를 부여한다.
//3. long안에 있는 autonum에 각 span태그에 랜덤 숫자를 한글자씩 부여한다.
//4. 해당 글자의 transfrom의 transrate와 scal값을 랜덤한 숫자로 부여한다.

//.long 안에 autonum의 span태그는 .all 로 가져와서 forEech를 사용하여 하나씩 값을 부여하자
// 램덤 숫자를 부여하는 함수를 선언하고 return으로 값을 반환하자.
// 랜덤 숫자는 한자리 숫자와 두자리 숫자가 필요하다.
//한자리 숫자는 span 태그에 부여하고 두자리 숫자는 transform에 부여하자.

//1 에서 필요한 건 각 인풋요소에 long 조건을 부여하는 것이다.

const form = document.querySelector("form");
const userId = form.querySelector("#login_id");
const userPass = form.querySelector("#login_password");

//id
id = (e) => {
  e.value = e.value.re;
};
