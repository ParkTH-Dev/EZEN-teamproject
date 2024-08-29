//남은 작업
//1 submit 버튼 누를 때 필수조건 확인 & 아이디 겹침 확인 << 화-수요일 작업 완료 예정
//2. 휴대폰 인증번호 받기 << 월요일-화 작업 완료 예정

// form 요소들
const form = document.querySelector("form");
const mainBtn = document.querySelector(".mainBtn");
const userId = document.querySelector("#userId");
const userpw = document.querySelector("#userpw");
const pwCheck = document.querySelector("#pwCheck");
const userName = document.querySelector("#userName");
const userEmail = document.getElementById("userEmail");
const emailselect = document.getElementById("email");
const emailDirectInput = document.getElementById("emailDr");
const hiddenS = document.querySelector(".hiddenS");
const directOptionValue = "direct";
const userPhon = document.querySelector("#userPhon");
const checkBtn = document.querySelector(".checkBtn");
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
const tapModal4 = document.querySelector(".tapModal4");
const modalText = document.querySelector(".modalText");

//------------------오토 넘버
const userNumCheck = document.querySelector("#userNumCheck");
const numCheckBtn = document.querySelector(".numCheckBtn");
const timeset = document.querySelector(".timeset");
//------------submit------------
const emailTwo = document.querySelector(".emailTwo");
const essenBoxs = document.querySelectorAll(".essenBoxs");
const essenAgrees = document.querySelectorAll(".essenAgrees");
// emaile // adress ==>가상클래스이다.
const essenBoxs2 = document.querySelectorAll(".essenBoxs2");
//--submit check array
let submitList = [];
console.log(submitList);

function checkarrMinus(mainArr, arrayE) {
  if (mainArr.includes(arrayE))
    for (let i = 0; i < mainArr.length; i++) {
      if (mainArr[i] === arrayE) {
        mainArr.splice(i, 1);
        // i--;
      }
    }
}
//-----------top -----------------//

////-------------각요소 조건
//아이디 //idSucc
userId.addEventListener("change", function () {
  const idErr = /^[a-zA-Z0-9]{6,16}$/g;
  const idIn = document.querySelector(".iderr");
  userId.classList.remove("essenBoxs");
  if (userId.value === "") {
    idIn.innerText = "";
    userId.classList.add("essenBoxs");
    checkarrMinus(submitList, "idSucc");
    console.log(submitList);
  } else if (!idErr.test(userId.value)) {
    idIn.innerText = "6자 이상 16자 이하의 영문과 숫자를 조합만 가능합니다.";
    userId.classList.add("essenBoxs");
    checkarrMinus(submitList, "idSucc");
    console.log(submitList);
  } else {
    idIn.innerText = "";
    submitList.push("idSucc");
    userId.classList.remove("essenBoxs");
    console.log(submitList);
  }
});

//----pass // paSucc
userpw.addEventListener("change", function () {
  const pwErr = /^[a-zA-Z0-9`~!@#$%^&*()-_=+]{10,}$/g;
  const passIn = document.querySelector(".passerr");
  userpw.classList.remove("essenBoxs");
  checkarrMinus(submitList, "paSucc");
  if (userpw.value === "") {
    passIn.innerText = "";
    userpw.classList.add("essenBoxs");
    checkarrMinus(submitList, "paSucc");
    console.log(submitList);
  } else if (!pwErr.test(userpw.value)) {
    passIn.innerText = "10자 이상에 영문 숫자 특수문자 조합만 가능합니다.";
    userpw.classList.add("essenBoxs");
    checkarrMinus(submitList, "paSucc");
    console.log(submitList);
  } else {
    passIn.innerText = "";
    submitList.push("paSucc");
    console.log(submitList);
  }
});

//----pass2 //pd2Succ
pwCheck.addEventListener("change", function () {
  const pass2In = document.querySelector(".pw2err");
  pwCheck.classList.remove("essenBoxs");
  submitList.pop();
  if (pwCheck.value === "") {
    pass2In.innerText = "";
    pwCheck.classList.add("essenBoxs");
    checkarrMinus(submitList, "pd2Succ");
    console.log(submitList);
  } else if (pwCheck.value === userpw.value) {
    pass2In.innerText = "";
    submitList.push("success");
    submitList.push("pd2Succ");
    console.log(submitList);
  } else {
    pass2In.innerText = "동일한 비밀번호 입력해주세요.";
    pwCheck.classList.add("essenBoxs");
    checkarrMinus(submitList, "pd2Succ");
    console.log(submitList);
  }
});

//----name // nameSucc
userName.addEventListener("change", function () {
  const nameIn = document.querySelector(".nameErr");
  const nameErr = /^[가-힣a-zA-Z]+$/g;
  userName.classList.remove("essenBoxs");
  if (userName.value === "") {
    nameIn.innerText = "";
    userName.classList.add("essenBoxs");
    checkarrMinus(submitList, "nameSucc");
    console.log(submitList);
  } else if (!nameErr.test(userName.value)) {
    nameIn.innerText = "이름을 확인해주세요.";
    userName.classList.add("essenBoxs");
    checkarrMinus(submitList, "nameSucc");
    console.log(submitList);
  } else {
    nameIn.innerText = "";
    submitList.push("nameSucc");
    console.log(submitList);
  }
});

//----email//emailSucc = emailS + inputS + selectS ==>2개이상
let emailSucc = [];
//이메일과 인풋 둘 다 ㅎ값이 확인되면 최종적으로 emailSucc값을 submitList로 조내자.
//조건이 더 필요하네.. 일단 1번. emailS는 필수. 2.inputS 와 selectS 둘 중 하나는 있어야함.
//2번 조건을 추가한다.  if 를 걸어서.
//인풋 이 있거나!! 셀렉트가 있을 때 ==> || 를 사용하여 하나만 요건이 맞으면 최종배열에 넣게 하자. 그럼 난 뭘 해야할 까. 어? 그냥 두개를 합치는것도 좋을 거 같은데.?
//두개를 합쳐보자. inputS + selectS = domainS 로

//직접입력 input Text
hiddenS.addEventListener("input", () => {
  checkarrMinus(emailSucc, "domainS");
  if (hiddenS.value === "") {
    checkarrMinus(emailSucc, "domainS");
    console.log(emailSucc);
    // if (hiddenS.classList.includes("active"))
    //   hiddenS.style.background = "#f9c9d4";
  } else if (hiddenS.value.includes(".")) {
  } else {
    emailSucc.push("domainS");
    console.log(emailSucc);
  }
});

//select 부분
emailselect.addEventListener("change", function () {
  checkarrMinus(emailSucc, "domainS");
  if (this.value === "direct") {
    hiddenS.classList.add("active");
    checkarrMinus(emailSucc, "domainS");
    console.log(emailSucc);
  } else {
    hiddenS.classList.remove("active");
    emailSucc.push("domainS");
    console.log(emailSucc);
  }
});

//id 입력 input
userEmail.addEventListener("input", function () {
  const emailValue = userEmail.value.trim();
  const userOtherId = [...emailValue.split("@")]; // @기준으로 새 배열만듦
  const onlyId = [...userOtherId].shift(); // 아이디만 가진 배열 = 편의를 위해 뺌
  const atIndex = emailValue.indexOf("@"); // 문자열에서 @의 인덱스 위치
  const emailErr = /^[a-zA-Z0-9/@/.]+$/g;
  const emailIn = document.querySelector(".emailerr");
  hiddenS.classList.remove("active");
  emailTwo.classList.remove("essenBoxs");
  checkarrMinus(emailSucc, "emailS");
  console.log(emailSucc);
  if (emailValue === "") {
    emailIn.innerText = "";
    emailTwo.classList.add("essenBoxs");
    checkarrMinus(emailSucc, "emailS");
    console.log(emailSucc);
  } else if (!emailErr.test(emailValue)) {
    emailIn.innerText = "숫자 또는 영문만 입력 가능합니다.";
    emailTwo.classList.add("essenBoxs");
    checkarrMinus(emailSucc, "emailS");
    console.log(emailSucc);
  } else {
    emailIn.innerText = "";
    emailSucc.push("emailS");
    console.log(emailSucc);
  }
  //select태그에 들어가는 주소
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
      hiddenS.classList.add("active");
      emailDirectInput.focus();
      emailDirectInput.value = domain;
    }
  }
  userEmail.value = null;
  userEmail.value = `${onlyId}`;
});

//----Phon

let clear = false;

userPhon.addEventListener("input", function () {
  const phonIn = document.querySelector(".phonerr");
  const PhonV = userPhon.value;
  const trimPhon = PhonV.replace(/-/g, "");
  if (userPhon.value === "") {
    phonIn.innerText = "";
    userPhon.classList.add("essenBoxs");
    userNumCheck.classList.add("essenBoxs");
  } else if (!/^[0][0-9]{9,10}$/.test(trimPhon)) {
    phonIn.innerText = "숫자 10~11자리";
    userPhon.classList.add("essenBoxs");
    userNumCheck.classList.add("essenBoxs");
  } else {
    phonIn.innerText = "";
    checkBtn.classList.add("active");
    checkBtn.disabled = false;
  }
});

//랜덤 리팩토링 함수영역
const clickNumModal = () => {
  modalBase.addEventListener("click", () => {
    userPhon.disabled = true;
    checkBtn.disabled = true;
    checkBtn.classList.remove("active");
    numCheckBtn.disabled = true;
    numCheckBtn.classList.add("numDisable");
    userNumCheck.disabled = true;
  });
  modalClose.addEventListener("click", () => {
    userPhon.disabled = true;
    checkBtn.disabled = true;
    numCheckBtn.disabled = true;
    userNumCheck.disabled = true;
  });
};

const timer = () => {
  let time = 180;
  interval = setInterval(() => {
    if (clear === true) {
      clearInterval(interval);
      return;
    } else if (clear === false && time >= 0) {
      const minutes = Math.floor(time / 60);
      const seconds = time % 60;
      timeset.innerText = minutes + ":" + String(seconds).padStart(2, "0");
      time -= 1;
    } else {
      modalText.innerText = "시간이 초과되었습니다.";
      modalBase.style.display = "block";
      document.body.style.overflow = "hidden";
      tapModal4.style.display = "block";
      userNumCheck.disabled = true;
      numCheckBtn.disabled = true;
      numCheckBtn.classList.add("numDisable");
      clearInterval(interval);
    }
  }, 1000);
};

const regularphonCheck = () => {
  userNumCheck.addEventListener("input", () => {
    const numcheckErr = /^[0-9]{6}$/;
    const uNCIn = document.querySelector(".uNCInerr");

    if (userNumCheck.value === "") {
      uNCIn.innerText = "";
    } else if (!numcheckErr.test(userNumCheck.value)) {
      uNCIn.innerText = "인증번호는 6자리 숫자입니다.";
    } else {
      uNCIn.innerText = "";
    }
  });
};

// 실제 실행되는 메인 함수
checkBtn.addEventListener("click", () => {
  const randomNum = String(Math.floor(Math.random() * 100000)).padStart(6, "0");
  alert(`인증번호는 ${randomNum}입니다.`);
  console.log(`${randomNum}`);
  const phoneCheck = document.querySelector(".phoneCheck");
  phoneCheck.style.display = "flex";
  userNumCheck.disabled = false;
  numCheckBtn.disabled = false;
  numCheckBtn.classList.remove("numDisable");
  timer();
  regularphonCheck();
  numCheckBtn.addEventListener("click", () => {
    if (userNumCheck.value === randomNum) {
      modalText.innerText = "인증완료";
      modalBase.style.display = "block";
      document.body.style.overflow = "hidden";
      tapModal4.style.display = "block";
      userPhon.classList.remove("essenBoxs");
      userNumCheck.classList.remove("essenBoxs");
      clear = true;
      submitList.push("success");
      timer();
      clickNumModal();
    } else {
      modalText.innerText = "인증실패";
      modalBase.style.display = "block";
      document.body.style.overflow = "hidden";
      tapModal4.style.display = "block";
      userPhon.classList.add("essenBoxs");
      userNumCheck.classList.add("essenBoxs");
    }
  });
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

tap1.addEventListener("click", () => {
  const frame = document.querySelector(".frame");
  modalBase.style.display = "block";
  document.body.style.overflow = "hidden";
  tapModal1.style.display = "block";
  frame.style.overflowY = "scroll";
});

tap2.addEventListener("click", () => {
  modalBase.style.display = "block";
  document.body.style.overflow = "hidden";
  tapModal2.style.display = "block";
});

tap3.addEventListener("click", () => {
  modalBase.style.display = "block";
  document.body.style.overflow = "hidden";
  tapModal3.style.display = "block";
});

modalBase.addEventListener("click", () => {
  modalBase.style.display = "none";
  document.body.style.overflow = "auto";
  tapModal1.style.display = "none";
  tapModal2.style.display = "none";
  tapModal3.style.display = "none";
});

modalClose.addEventListener("click", () => {
  modalBase.style.display = "none";
  document.body.style.overflow = "auto";
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

//--------submit-------------------//
mainBtn.addEventListener("click", (e) => {
  e.preventDefault();
  essenBoxs.forEach((essenBox) => {
    if (essenBox.classList.contains("essenBoxs"))
      essenBox.style.backgroundColor = "#f9c9d4";
    else {
      essenBox.style.backgroundColor = "inherit";
    }
  });
});

//-----------
checkHandler(".subAll", ".subElement");
checkHandler(".allCheckBox", ".checkElement");
