//남은 작업
//1 submit 버튼 누를 때 필수조건 확인 & 아이디 겹침 확인 << 화요일 작업예정
//2. 휴대폰 인증번호 받기 << 월요일 작업 예정
//3.약관보기 모달 << 월요일작업예정
//4. 이메일 뒤에 주소 자동변경 & 직접입력 << 일요일 작업예정

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
emailselect.addEventListener("click", () => {
  for (let option of emailselect.options) {
    if (option.value === directOptionValue) {
      document.querySelector(".hiddenS").classList.add("active");
      break;
    } else {
      document.querySelector(".hiddenS").classList.remove("active");
      break;
    }
  }
});

userEmail.addEventListener("input", function () {
  const emailValue = userEmail.value.trim();
  const userOtherId = [...emailValue.split("@")];
  const onlyId = [...userOtherId].shift();
  const atIndex = emailValue.indexOf("@");
  document.querySelector(".hiddenS").classList.remove("active");
  if (atIndex !== -1) {
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
      // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

      // 각 주소의 노출 규칙에 따라 주소를 조합한다.
      // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
      var addr = ""; // 주소 변수
      var extraAddr = ""; // 참고항목 변수

      //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
      if (data.userSelectedType === "R") {
        // 사용자가 도로명 주소를 선택했을 경우
        addr = data.roadAddress;
      } else {
        // 사용자가 지번 주소를 선택했을 경우(J)
        addr = data.jibunAddress;
      }

      // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
      if (data.userSelectedType === "R") {
        // 법정동명이 있을 경우 추가한다. (법정리는 제외)
        // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
        if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
          extraAddr += data.bname;
        }
        // 건물명이 있고, 공동주택일 경우 추가한다.
        if (data.buildingName !== "" && data.apartment === "Y") {
          extraAddr +=
            extraAddr !== "" ? ", " + data.buildingName : data.buildingName;
        }
        // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
        if (extraAddr !== "") {
          extraAddr = " (" + extraAddr + ")";
        }
        // 조합된 참고항목을 해당 필드에 넣는다.
        document.getElementById("sample6_extraAddress").value = extraAddr;
      } else {
        document.getElementById("sample6_extraAddress").value = "";
      }

      // 우편번호와 주소 정보를 해당 필드에 넣는다.
      document.getElementById("sample6_address").value = addr;
      // 커서를 상세주소 필드로 이동한다.
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
