//--------bottom checkbox --------//
//모든체크박스들
const checkBoxs = document.querySelectorAll("input[type='checkbox']");

// //전체동의 체크박스
// const allCheck = document.querySelector(".allCheckBox");
// // 부수요소 체크박스들
// const checkElements = document.querySelectorAll(".checkElement");
// // 무료배송 체크
// const subAll = document.querySelector(".subAll");
// //무료 배송 요소들
// const subElements = document.querySelector(".subElement");

//--------bottom checkbox --------//

//**  --체크박스와 아이콘 연동 함수-- **//
// function checkAndIcon() {
//   checkBoxs.forEach((checkBox) => {
//     checkBox.addEventListener("change", () => {
//       let checkIcon = document.getElementsByClassName(`${checkBox.id}`)[0];
//       if (checkBox.checked) {
//         checkIcon.classList.add("active");
//       } else {
//         checkIcon.classList.remove("active");
//       }
//     });
//   });
// }
function checkAndIcon() {
  let checkIcon = document.getElementsByClassName(`${checkElement.id}`)[0];
  if (checkElement.checked) {
    checkIcon.classList.add("active");
  } else {
    checkIcon.classList.remove("active");
  }
}

//** --전체체크 이벤트 --**//

//전체선택체크 선택시
function checkAll(all, element) {
  let allCheck = document.querySelector(all);
  let checkElements = document.querySelectorAll(element);
  let it_check = allCheck.checked;

  if (it_check === true) {
    checkElements.forEach((checkElement) => {
      if (checkElement.disabled !== true) {
        checkElement.setAttribute("checked", "checked");
        checkElement.checked = true;
      }
    });
  } else {
    checkElements.forEach((checkElement) => {
      checkElement.removeAttribute("checked", "checked");
      checkElement.checked = false;
    });
  }
  checkAndIcon();
}

// //개별요소 선택시
// function checkToggle(all, element) {
//   const allCheck = document.querySelector(all);
//   //체크가능한 전체 요소들 개수
//   let checkBox_in = document.querySelectorAll(element + ":enabled").length;
//   //전체요소들 중 체크된 체크박스 개수
//   let allchecked = document.querySelectorAll(
//     element + ":checked:enabled"
//   ).length;
//   if (checkBox_in === allchecked) {
//     allCheck.setAttribute(`checked`, `checked`);
//     allCheck.checked = true;
//   } else {
//     allCheck.removeAttribute(`checked`, `checked`);
//     allCheck.checked = false;
//   }
// }

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
      // checkToggle(all, element);
    });
  });
  checkAndIcon();
}

checkHandler(".allCheckBox", ".checkElement");
// checkAndIcon();
