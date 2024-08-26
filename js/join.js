//남은 작업
//1 submit 버튼 누를 때 필수조건 확인 & 아이디 겹침 확인 << 화-수요일 작업 완료 예정
//2. 휴대폰 인증번호 받기 << 월요일-화 작업 완료 예정

// form 요소들
const form = document.querySelector("form");
const userId = document.querySelector("#userId");
const userpw = document.querySelector("#userpw");
const pwCheck = document.querySelector("#pwCheck");
const userName = document.querySelector("#userName");
const userEmail = document.getElementById("userEmail");
const emailselect = document.getElementById("email");
const emailDirectInput = document.getElementById("emailDr");
const directOptionValue = "direct";
const userPhon = document.querySelector("#userPhon");
const invite = document.querySelector("#invite");
const participationE = document.querySelector("#participationE");
const eventNone = document.querySelector("#eventNone");
const inviteText = document.querySelector("#invite-text");
const checkBoxs = document.querySelectorAll("input[type='checkbox']");
//----------modal-----------------//
const modalBase = document.querySelector(".modalBase");
const modalClose = document.querySelector(".modal_close");
const tap1 = document.querySelector(".tap1");
const tap2 = document.querySelector(".tap2");
const tap3 = document.querySelector(".tap3");
const tapModal1 = document.querySelector(".tapModal1");
const tapModal2 = document.querySelector(".tapModal2");
const tapModal3 = document.querySelector(".tapModal3");

//------------------오토 넘버
const randomNum = Math.floor(Math.random() * 5000 + 1);

//-----------top -----------------//

////-------------각요소 조건
//아이디
userId.addEventListener("change", function () {
  const idErr = /^[a-zA-Z0-9]{6,16}$/g;
  const idIn = document.querySelector(".iderr");
  if (userId.value === "") {
    idIn.innerText = "";
  } else if (!idErr.test(userId.value)) {
    idIn.innerText = "6자 이상 16자 이하의 영문과 숫자를 조합만 가능합니다.";
  } else {
    idIn.innerText = "";
  }
});

//----pass
userpw.addEventListener("change", function () {
  const pwErr = /^[a-zA-Z0-9`~!@#$%^&*()-_=+]{10,}$/g;
  const passIn = document.querySelector(".passerr");
  if (userpw.value === "") {
    passIn.innerText = "";
  } else if (!pwErr.test(userpw.value)) {
    passIn.innerText = "10자 이상에 영문 숫자 특수문자 조합만 가능합니다.";
  } else {
    passIn.innerText = "";
  }
});

//----pass2
pwCheck.addEventListener("change", function () {
  const pass2In = document.querySelector(".pw2err");
  if (pwCheck.value === "") {
    pass2In.innerText = "";
  } else if (pwCheck.value === userpw.value) {
    pass2In.innerText = "";
  } else {
    pass2In.innerText = "동일한 비밀번호 입력해주세요.";
  }
});

//----name
userName.addEventListener("change", function () {
  const nameIn = document.querySelector(".nameErr");
  const nameErr = /^[가-힣a-zA-Z]+$/g;
  if (userName.value === "") {
    nameIn.innerText = "";
  } else if (!nameErr.test(userName.value)) {
    nameIn.innerText = "이름을 확인해주세요.";
  } else {
    nameIn.innerText = "";
  }
});

//----email

emailselect.addEventListener("change", function () {
  // console.log(this.value);
  if (this.value === "direct") {
    document.querySelector(".hiddenS").classList.add("active");
  } else {
    document.querySelector(".hiddenS").classList.remove("active");
  }
});

userEmail.addEventListener("input", function () {
  const emailValue = userEmail.value.trim();
  const userOtherId = [...emailValue.split("@")];
  const onlyId = [...userOtherId].shift();
  const atIndex = emailValue.indexOf("@");
  const emailErr = /^[a-zA-Z0-9/@/.]+$/g;
  const emailIn = document.querySelector(".emailerr");
  document.querySelector(".hiddenS").classList.remove("active");
  if (emailValue === "") {
    emailIn.innerText = "";
  } else if (!emailErr.test(emailValue)) {
    emailIn.innerText = "숫자 또는 영문만 입력 가능합니다.";
  } else {
    emailIn.innerText = "";
  }
  if (emailValue.includes("@") === true) {
    const domain = emailValue.substring(atIndex + 1);
    let optionFound = false;
    for (let option of emailselect.options) {
      if (option.value === directOptionValue) {
        continue;
      }
      const optionText = option.textContent || option.innerText;
      if (optionText === domain) {
        emailselect.value = option.value;
        optionFound = true;
        break;
      }
    }
    // 도메인이 일치하는 옵션이 없으면 '직접입력' 옵션 선택
    if (!optionFound) {
      emailselect.value = directOptionValue;
      document.querySelector(".hiddenS").classList.add("active");
      emailDirectInput.focus();
      emailDirectInput.value = domain;
    }
  }
  userEmail.value = null;
  userEmail.value = `${onlyId}`;
});

//----Phon
userPhon.addEventListener("change", function () {
  const phonIn = document.querySelector(".phonerr");
  const PhonV = userPhon.value;
  const trimPhon = PhonV.replace(/-/g, "");
  if (userPhon.value === "") {
    phonIn.innerText = "";
  } else if (!/^[0][0-9]{9,10}$/.test(trimPhon)) {
    phonIn.innerText = "숫자 10~11자리";
  } else {
    phonIn.innerText = "";
    document.querySelector(".checkBtn").classList.add("active");
  }
});

//----adress

function sample6_execDaumPostcode() {
  new daum.Postcode({
    theme: {
      searchBgColor: "#5F0080",
      queryTextColor: "#FFFFFF",
      emphTextColor: "#5F0080",
    },
    oncomplete: function (data) {
      document.querySelector(".addressInner").classList.add("active");
      var addr = "";
      var extraAddr = "";

      if (data.userSelectedType === "R") {
        addr = data.roadAddress;
      } else {
        addr = data.jibunAddress;
      }

      if (data.userSelectedType === "R") {
        if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
          extraAddr += data.bname;
        }
        if (data.buildingName !== "" && data.apartment === "Y") {
          extraAddr +=
            extraAddr !== "" ? ", " + data.buildingName : data.buildingName;
        }
        if (extraAddr !== "") {
          extraAddr = " (" + extraAddr + ")";
        }
        document.getElementById("sample6_extraAddress").value = extraAddr;
      } else {
        document.getElementById("sample6_extraAddress").value = "";
      }

      document.getElementById("sample6_address").value = addr;
      document.getElementById("sample6_detailAddress").focus();
    },
  }).open();
}

//----birth

const changebirth1 = () => {
  const birth1 = document.querySelector("#year").value;
  if (birth1.length === 4) {
    document.querySelector("#moth").focus();
  }
};

const changebirth2 = () => {
  const birth2 = document.querySelector("#moth").value;
  if (birth2.length === 2) {
    document.querySelector("#day").focus();
  }
};

const changebirth3 = () => {
  const birth1 = document.querySelector("#year").value;
  const birth2 = document.querySelector("#moth").value;
  const birth3 = document.querySelector("#day").value;
  const birthIn = document.querySelector(".birtherr");
  if (birth3.length === 2) {
    document.querySelector("#day").blur();
  } else if (
    /^[0-9]+$/g.test(birth1) &&
    /^[0-9]+$/g.test(birth2) &&
    /^[0-9]+$/g.test(birth3)
  ) {
    birthIn.innerText = "";
  } else {
    birthIn.innerText = "숫자만 입력해주세요.";
  }
};

//----invit

invite.addEventListener("change", () => {
  document.querySelector(".hidden-add").classList.add("active");
});
participationE.addEventListener("change", () => {
  document.querySelector(".hidden-add").classList.add("active");
});
eventNone.addEventListener("change", () => {
  document.querySelector(".hidden-add").classList.remove("active");
});

inviteText.addEventListener("keyup", () => {
  if (inviteText.value === "") {
    document.querySelector(".IdEvftn").classList.remove("active");
  } else {
    document.querySelector(".IdEvftn").classList.add("active");
  }
});

//--------bottom checkbox --------//

const submit = document.querySelector(".mainBtn");

submit.addEventListener("click", (e) => {
  e.preventDefault();
});

//--------bottom checkbox --------//

//**-------모달--------**/

// taps.forEach((tap, index) => {
//   tap.addEventListener("click", () => {
//     HModals.forEach((modal, modalIndex) => {
//       console.log(index, modalIndex);
//       if (index === modalIndex) {
//         modal.style.display = "block";
//       } else {
//         modal.style.display = "none";
//       }
//     });
//   });
// });

tap1.addEventListener("click", () => {
  const frame = document.querySelector(".frame");
  modalBase.style.display = "block";
  tapModal1.style.display = "block";
  frame.style.overflowY = "scroll";
});

tap2.addEventListener("click", () => {
  modalBase.style.display = "block";
  tapModal2.style.display = "block";
});

tap3.addEventListener("click", () => {
  modalBase.style.display = "block";
  tapModal3.style.display = "block";
});

modalBase.addEventListener("click", () => {
  modalBase.style.display = "none";
  tapModal1.style.display = "none";
  tapModal2.style.display = "none";
  tapModal3.style.display = "none";
});

modalClose.addEventListener("click", () => {
  modalBase.style.display = "none";
  tapModal1.style.display = "none";
  tapModal2.style.display = "none";
  tapModal3.style.display = "none";
});
// **  --체크박스와 아이콘 연동 함수-- **//

function checkAndIcon(checkBox) {
  let checkIcon = document.getElementsByClassName(`${checkBox.id}`)[0];
  const allCheck = document.querySelector(".allCheck");
  const allCheckBox = document.querySelector("#allCheck");
  if (checkBox.checked) {
    checkIcon.classList.add("active");
  } else {
    checkIcon.classList.remove("active");
  }

  allCheckBox.checked === true
    ? allCheck.classList.add("active")
    : allCheck.classList.remove("active");
}

//** --전체체크 이벤트 --**//

function checkAll(all, element) {
  let allCheck = document.querySelector(all);
  let checkElements = document.querySelectorAll(element);
  let it_check = allCheck.checked;

  checkElements.forEach((checkElement) => {
    if (checkElement.disabled !== true) {
      checkElement.checked = it_check;
      checkAndIcon(checkElement);
    }
  });
}

//개별요소 선택시
function checkToggle(all, element) {
  const allCheck = document.querySelector(all);
  //체크가능한 전체 요소들 개수
  let checkBox_in = document.querySelectorAll(element + ":enabled").length;
  //체크된 요소의 개수
  let allchecked = document.querySelectorAll(
    element + ":checked:enabled"
  ).length;
  if (checkBox_in === allchecked) {
    allCheck.checked = true;
  } else {
    allCheck.checked = false;
  }
  checkAndIcon(allCheck);
}

// 핸들러
function checkHandler(all, element) {
  const allCheck = document.querySelector(all);
  const checkElements = document.querySelectorAll(element);
  allCheck.addEventListener("change", () => {
    //전체체크 선택시
    checkAll(all, element);
  });
  checkElements.forEach((checkElement) => {
    checkElement.addEventListener("change", () => {
      //개별요소 선택시
      checkToggle(all, element);
      checkAndIcon(checkElement);
    });
  });
}

checkHandler(".subAll", ".subElement");
checkHandler(".allCheckBox", ".checkElement");
