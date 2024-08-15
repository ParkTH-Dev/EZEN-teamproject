// modal
const long = document.querySelector("#longModal");

const form = document.querySelector("form");

//user input
const userId = form.querySelector("#login_id");
const userPass = form.querySelector("#login_password");
//random
const autoN = form.querySelector("#autoN");
//for submit
const loginBtn = form.querySelector(".login");
//modal
const modalBack = document.querySelector("#blackB");
const modal = document.querySelector("#longModal");

//id value only EN & num
userId.addEventListener("input", function (text) {
  const idText = userId.value;
  const onlyEnNum = /[^a-zA-Z0-9]/g;
  if (onlyEnNum.test(idText)) {
    document.querySelector(".errorId").innerText =
      "영문(대소문자)과 숫자만 입력해주세요.";
  } else {
    document.querySelector(".errorId").innerText = "";
  }
});

// id & password submit
const id = "ezen123";
const password = "1234";

//modal add & close
function modalClose() {
  document.querySelectorAll(".close, #blackB").forEach((item) => {
    item.addEventListener("click", () => {
      modalBack.classList.remove("active");
      modal.classList.remove("active");
    });
  });
}

//auto Num & auto modal Check
function autoModal() {
  const autoNum = Math.floor(Math.random() * 3000 + 1);
  document.querySelector(".autonum").innerText = autoNum;
  document.querySelector(".automatic").classList.add("active");
  //숫자를 넣고 값을 띄우며 모달 실행
  if (
    autoNum === autoN.value &&
    userId.value === id &&
    userPass.value === password
  ) {
    modal.querySelector("h1").innerText = `${id}님 환영합니다`;
    modalBack.classList.add("active");
    modal.classList.add("active");
    modalClose();
  } else {
    modal.querySelector(
      "h1"
    ).innerHTML = `아이디,비밀번호와 <br/> 자동방지 숫자를 확인해주세요`;
  }
}

let falseCount = 0;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (userId.value === id && userPass.value === password) {
    modal.querySelector("h1").innerText = `${id}님 환영합니다`;
    modalBack.classList.add("active");
    modal.classList.add("active");
    modalClose();
  } else {
    falseCount++;
    modalBack.classList.add("active");
    modal.classList.add("active");
    modal.querySelector("h1").innerText = `아이디와 비밀번호를 확인해주세요`;
    modalClose();
    if (falseCount >= 3) {
      autoModal();
    }
  }
});
