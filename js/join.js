
//모든체크박스들
const checkBoxs = document.querySelectorAll("input[type='checkbox']");
//전체동의 체크박스
const allCheck = document.querySelector(".allCheckBox")
// 부수요소 체크박스들
const checkElements = document.querySelectorAll(".checkElement")

// 체크박스와 아이콘 연동 함수
checkBoxs.forEach((checkBox) => {
  checkBox.addEventListener("change", () => {
    let checkIcon = document.getElementsByClassName(`${checkBox.id}`)[0];
    checkIcon.classList.toggle("active");
  });
});


// 전체체크 1 // 

//전체 체크를 누를 시 부수체크박스들이 전부 체크 선택
// function all_check () {
//   const allCheckOn = allCheck.checked
//   if(allCheckOn === true ) {
//     checkElements.forEach((checkElement)=>{
//       if(checkElement.disabled !== true) {
//         //disabled ==> 지원 속성에 속성이 적용되어있는 것
//         checkElement.setAttribute('disabled' , 'disabled')
//         checkElement.checked = true;
//       }
//     })
//   }
// }



// 핸들러 

function checkHandler (allCk , ckList) {
let allCk = allCheck
let ckList = checkElements
}

checkHandler(allCheck,checkElements)