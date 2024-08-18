const shareBtn = document.querySelector(".share");

shareBtn.addEventListener("click", () => {
  document.querySelector(".share_modal").classList.toggle("active");
});

const infoBtn = document.querySelector(".desc_info > .info");
const infoModal = document.querySelector(".info_modal");
const infoModalCloseBtn = document.querySelector(".info_modal_closeBtn");
infoBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  infoModal.classList.add("active");
});

infoModalCloseBtn.addEventListener("click", () => {
  infoModal.classList.remove("active");
});

document.addEventListener("click", (e) => {
  if (!infoModal.contains(e.target)) {
    infoModal.classList.remove("active");
  }
});

const refundFirstBtn = document.querySelector(".refund_firstBtn");
const refundSecondBtn = document.querySelector(".refund_secondBtn");

refundFirstBtn.addEventListener("click", () => {
  const refundModal = document.querySelector(".itemWrap .first");
  refundModal.classList.toggle("active");
  if (refundModal.classList.contains("active")) {
    refundFirstBtn.innerHTML = `닫기 <i class="fa-solid fa-chevron-up">`;
  } else {
    refundFirstBtn.innerHTML = `열기 <i class="fa-solid fa-chevron-down">`;
  }
});
refundSecondBtn.addEventListener("click", () => {
  const refundModal = document.querySelector(".itemWrap .second");
  refundModal.classList.toggle("active");
  if (refundModal.classList.contains("active")) {
    refundSecondBtn.innerHTML = `닫기 <i class="fa-solid fa-chevron-up">`;
  } else {
    refundSecondBtn.innerHTML = `열기 <i class="fa-solid fa-chevron-down">`;
  }
});
