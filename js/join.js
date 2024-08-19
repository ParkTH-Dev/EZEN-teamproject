//모달 ==><div class="modalBase noneActive">에 noneActive삭제하면 나옴
//모달은 각각 tap1Modal1 의 네임으로 되어있고 frame은 yblock 가상 클래스가 존재하여  모달 1번때만 frame에 부여하면 된다.

const checkBoxs = document.querySelectorAll("input[type='checkbox']");

checkBoxs.forEach((checkBox) => {
  checkBox.addEventListener("change", () => {
    let checkIcon = document.getElementsByClassName(`${checkBox.id}`)[0];
    checkIcon.classList.toggle("active");
  });
});
