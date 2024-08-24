// form 요소들
const form = document.querySelector("form");
const inputTexts = document.querySelectorAll("input[type='text']");
const inputpasss = document.querySelectorAll("input[type='password']");
const inputradios = document.querySelectorAll("input[type='radio']");
const checkBoxs = document.querySelectorAll("input[type='checkbox']");
//-----------top -----------------//

////-------------각요소 조건

inputTexts[0].addEventListener("change", function () {
  const idErr = /^[a-zA-Z0-9]{6,16}$/g;
  const idIn = document.querySelector(".iderr");
  if (inputTexts[0].value === "") {
    idIn.innerText = "";
  } else if (!idErr.test(inputTexts[0].value)) {
    idIn.innerText = "6자 이상 16자 이하의 영문과 숫자를 조합만 가능합니다.";
  } else {
    idIn.innerText = "";
  }
});

//----pass
inputpasss[0].addEventListener("change", function () {
  const pwErr = /^[a-zA-Z0-9`~!@#$%^&*()-_=+]{10,}$/g;
  const passIn = document.querySelector(".passerr");
  if (inputpasss[0].value === "") {
    passIn.innerText = "";
  } else if (!pwErr.test(inputpasss[0].value)) {
    passIn.innerText = "10자 이상에 영문 숫자 특수문자 조합만 가능합니다.";
  } else {
    passIn.innerText = "";
  }
});

//----pass2
inputpasss[1].addEventListener("change", function () {
  const pass2In = document.querySelector(".pw2err");
  if (inputpasss[1].value === "") {
    pass2In.innerText = "";
  } else if (inputpasss[1].value === userpw.value) {
    pass2In.innerText = "";
  } else {
    pass2In.innerText = "동일한 비밀번호 입력해주세요.";
  }
});

//----name
inputTexts[1].addEventListener("change", function () {
  const nameIn = document.querySelector(".nameErr");
  const nameErr = /^[가-힣a-zA-Z]+$/g;
  if (inputTexts[1].value === "") {
    nameIn.innerText = "";
  } else if (!nameErr.test(inputTexts[1].value)) {
    nameIn.innerText = "이름을 확인해주세요.";
  } else {
    nameIn.innerText = "";
  }
});

//----email
inputTexts[2].addEventListener("change", function () {
  const emailIn = document.querySelector(".emailerr");
  const emailErr = /^[a-zA-Z0-9]$/g;
  if (inputTexts[2].value === "") {
    emailIn.innerText = "";
  } else if (!emailErr.test(inputTexts[2].value)) {
    emailIn.innerText = "숫자 또는 영문만 입력 가능합니다.";
  } else {
    emailIn.innerText = "";
  }
});

//----Phon
inputTexts[4].addEventListener("change", function () {
  const phonIn = document.querySelector(".phonerr");
  const PhonV = inputTexts[4].value;
  const trimPhon = PhonV.replace(/-/g, "");
  if (inputTexts[4].value === "") {
    phonIn.innerText = "";
  } else if (!/^[0][0-9]{9,10}$/.test(trimPhon)) {
    phonIn.innerText = "숫자 10~11자리";
  } else {
    phonIn.innerText = "";
  }
});

//----adress

// theme: {
//   searchBgColor: "#5F0080",
//   queryTextColor: "#FFFFFF",
//   emphTextColor: "#5F0080",
// },

function sample6_execDaumPostcode() {
  new daum.Postcode({
    theme: {
      searchBgColor: "#5F0080",
      queryTextColor: "#FFFFFF",
      emphTextColor: "#5F0080",
    },
    oncomplete: function (data) {
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
      document.getElementById("sample6_postcode").value = data.zonecode;
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
