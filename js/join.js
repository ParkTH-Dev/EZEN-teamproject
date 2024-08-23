
// form 요소들
const form = document.querySelector("form")
const inputText = document.querySelectorAll("input[type='text']")
console.log(inputText)
const inputpass = document.querySelectorAll("input[type='password']")
const inputradio = document.querySelectorAll("input[type='radio']")
const checkBoxs = document.querySelectorAll("input[type='checkbox']");
//-----------top -----------------//

////-------------각요소 조건

inputText[0].addEventListener("change", function () {
  const idErr = /^[a-zA-Z0-9]{6,16}$/g;
  const idIn = document.querySelector(".iderr")
  if (inputText[0].value === "") {
    idIn.innerText = "";
  } else if (!idErr.test(inputText[0].value)) {
    idIn.innerText = "6자 이상 16자 이하의 영문과 숫자를 조합만 가능합니다.";
  } else {
    idIn.innerText = "";
  }
});

//----pass
inputpass[0].addEventListener("change", function () {
  const pwErr = /^[a-zA-Z0-9`~!@#$%^&*()-_=+]{10,}$/g;
  const passIn = document.querySelector(".passerr")
  if (inputpass[0].value === "") {
    passIn.innerText = "";
  } else if (!pwErr.test(inputpass[0].value)) {
    passIn.innerText =
      "10자 이상에 영문 숫자 특수문자 조합만 가능합니다.";
  } else {
    passIn.innerText = "";
  }
});

//----pass2
inputpass[1].addEventListener("change", function () {
  const pass2In = document.querySelector(".pw2err")
  if (inputpass[1].value === "") {
    pass2In.innerText = "";
  } else if (inputpass[1].value === userpw.value) {
    pass2In.innerText =
      "";
  } else {
    pass2In.innerText = "동일한 비밀번호 입력해주세요.";
  }
});

//----name
inputText[1].addEventListener("change", function () {
  const nameIn = document.querySelector(".nameErr")
  const nameErr = /^[가-힣a-zA-Z]+$/g;
  if (inputText[1].value === "") {
    nameIn.innerText = "";
  } else if (!nameErr.test(inputText[1].value)) {
    nameIn.innerText =
      "이름을 확인해주세요.";
  } else {
    nameIn.innerText = "";
  }
});

//----email
inputText[2].addEventListener("change", function () {
  const emailIn = document.querySelector(".emailerr")
  const emailErr =  /^[a-zA-Z0-9]$/g;
  if (inputText[2].value === "") {
    emailIn.innerText = "";
  } else if (!emailErr.test(inputText[2].value)) {
    emailIn.innerText =
      "숫자 또는 영문만 입력 가능합니다.";
  } else {
    emailIn.innerText = "";
  }
});

//----Phon
inputText[4].addEventListener("change", function () {
  const phonIn = document.querySelector(".phonerr")
  const PhonV = inputText[4].value
  const trimPhon = PhonV.replace(/-/g,"")
  if (inputText[4].value === "") {
    phonIn.innerText = "";
  } else if (!/^[0][0-9]{9,10}$/.test(trimPhon)) {
    phonIn.innerText =
      "숫자 10~11자리";
  } else {
    phonIn.innerText = "";
  }
});

//----adress



//----gender & radio

inputradio.addEventListener("click",()=>{
  if (inputradio.checked) {
    console.log("kk")
    inputradio.checked === false;
  } else {
    inputradio.checked
  }
})



//----birth

//----invit

//--------bottom checkbox --------//


//--------bottom checkbox --------//

// **  --체크박스와 아이콘 연동 함수-- **//

function checkAndIcon(checkBox) {
  let checkIcon = document.getElementsByClassName(`${checkBox.id}`)[0];
  const allCheck = document.querySelector(".allCheck")
  const allCheckBox = document.querySelector("#allCheck")
  if (checkBox.checked) {
    checkIcon.classList.add("active");
  } else {
    checkIcon.classList.remove("active");
  }
  
  allCheckBox.checked === true ? allCheck.classList.add("active") : allCheck.classList.remove("active") 
};

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
};

//개별요소 선택시
function checkToggle(all, element) {
  const allCheck = document.querySelector(all);
  //체크가능한 전체 요소들 개수
  let checkBox_in = document.querySelectorAll(element + ":enabled").length;
  //체크된 요소의 개수
  let allchecked = document.querySelectorAll(element + ":checked:enabled").length;
  if (checkBox_in === allchecked) {
    allCheck.checked = true;
  } else {
    allCheck.checked = false;
  }
  checkAndIcon(allCheck)
};

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
};

checkHandler(".subAll", ".subElement");
checkHandler(".allCheckBox", ".checkElement");
