// main slide
const mainBanner = document.querySelector("#main_banner");
const mainSlideArrowLeft = document.querySelector("#leftArrow");
const mainSlideArrowRight = document.querySelector("#rightArrow");
const mainSlideImgPC = document.querySelector(".bg_imgPC");
const mainSlideImgMO = document.querySelector(".bg_imgMO");
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

const mainPicsMO = [
  "main_01.png",
  "main_02.jpg",
  "main_03.png",
  "main_04.jpg",
  "main_05.jpg",
  "main_06.jpg",
  "main_07.jpg",
  "main_08.png",
  "main_09.jpg",
  "main_10.jpg",
];

let slide = 0;
let currentIdx = 0;

// mainSlideImg.style.backgroundImage = `url(../img/main/${mainPicsPC[i]})`;

mainCounterAll.innerText = mainPicsPC.length;
mainCounterNow.innerText = currentIdx + 1;

// 이미지 세팅
for (let i = 0; i < mainPicsPC.length; i++) {
  const img = document.createElement("img");
  const src = document.createAttribute("src");

  src.value = `../img/main/${mainPicsPC[i]}`;
  img.setAttributeNode(src);
  mainSlideImgPC.appendChild(img);
}

for (let i = 0; i < mainPicsMO.length; i++) {
  const img = document.createElement("img");
  const src = document.createAttribute("src");

  src.value = `../img/main/m/${mainPicsMO[i]}`;
  img.setAttributeNode(src);
  mainSlideImgMO.appendChild(img);
}

//이미지 클론

// 슬라이드 이동 함수
const moveSlide = (num) => {
  slide = num;
  mainSlideImgPC.style.left = `${num}00%`;
  mainSlideImgMO.style.left = `${num}00%`;
};

// 슬라이드 카운트 업데이트 (감소)
const counterUpdateMinus = () => {
  if (currentIdx < 1) {
    currentIdx = mainPicsPC.length - 1;
  } else {
    currentIdx--;
  }
  mainCounterNow.innerText = currentIdx + 1;
};

// 슬라이드 카운트 업데이트 (증가)
const counterUpdatePlus = () => {
  if (currentIdx < mainPicsPC.length - 1) {
    currentIdx++;
  } else {
    currentIdx = 0;
  }
  mainCounterNow.innerText = currentIdx + 1;
};

// 버튼 클릭으로 슬라이드 이동 (PC)
mainSlideArrowLeft.addEventListener("click", () => {
  moveSlide(slide + 1);
  counterUpdateMinus();
});

mainSlideArrowRight.addEventListener("click", () => {
  moveSlide(slide - 1);
  counterUpdatePlus();
});

// 슬라이드로 슬라이드 이동 (MO)
let startPoint = 0;
let endPoint = 0;

mainBanner.addEventListener("mousedown", (e) => {
  startPoint = e.pageX; // 터치가 시작되는 위치 저장
});
mainBanner.addEventListener("mouseup", (e) => {
  endPoint = e.pageX; // 터치가 끝나는 위치 저장
  if (startPoint < endPoint) {
    moveSlide(slide + 1);
    counterUpdateMinus();
  } else if (startPoint > endPoint) {
    moveSlide(slide - 1);
    counterUpdatePlus();
  }
});

mainBanner.addEventListener("touchstart", (e) => {
  startPoint = e.touches[0].pageX; // 터치가 시작되는 위치 저장
});
mainBanner.addEventListener("touchend", (e) => {
  endPoint = e.changedTouches[0].pageX; // 터치가 끝나는 위치 저장
  if (startPoint < endPoint) {
    moveSlide(slide + 1);
    counterUpdateMinus();
  } else if (startPoint > endPoint) {
    moveSlide(slide - 1);
    counterUpdatePlus();
  }
});
