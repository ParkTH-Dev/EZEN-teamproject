// main slide
const mainBanner = document.querySelector("#main_banner");
const mainSlideArrowLeft = document.querySelector("#leftArrow");
const mainSlideArrowRight = document.querySelector("#rightArrow");
const mainSlideImg = document.querySelector(".bg_img");
const mainCounterNow = document.querySelector(".now_counter");
const mainCounterAll = document.querySelector(".all_counter");

const mainPicsPC = [
  "main_01.png",
  "main_02.jpg",
  "main_03.jpg",
  "main_04.jpg",
  "main_05.jpg",
  "main_06.jpg",
  "main_07.jpg",
  "main_08.jpg",
  "main_09.png",
  "main_10.jpg",
];

let currentIdx = 0;
const mainSlideLength = mainPicsPC.length;

// mainSlideImg.style.backgroundImage = `url(../img/main/${mainPicsPC[i]})`;

mainCounterAll.innerText = mainPicsPC.length;
mainCounterNow.innerText = currentIdx + 1;

// 이미지 세팅
for (let i = 0; i < mainPicsPC.length; i++) {
  const img = document.createElement("img");
  const src = document.createAttribute("src");

  src.value = `../img/main/${mainPicsPC[i]}`;
  img.setAttributeNode(src);
  mainSlideImg.appendChild(img);
}

// 슬라이드 업데이트 함수
const updateSlide = () => {
  mainCounterNow.innerText = currentIdx + 1;
};

// 슬라이드 이동 함수
const moveSlide = (num) => {
  currentIdx = num;
  mainSlideImg.style.left = `${num}00%`;
};

// 버튼 클릭으로 슬라이드 이동
mainSlideArrowLeft.addEventListener("click", () => {
  moveSlide(currentIdx + 1);
});

mainSlideArrowRight.addEventListener("click", () => {
  moveSlide(currentIdx - 1);
});
