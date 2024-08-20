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
// console.log(mainPicsPC.length);
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

//width 계산
const updateWidth = () => {
  const imgs = document.querySelectorAll(".bg_imgPC > img");
  const imgsM = document.querySelectorAll(".bg_imgMO > img");
  const newSlideCount = imgs.length;
  const newSlideCountM = imgsM.length;
  const imgWidth = 100;
  const newWidth = `${newSlideCount * imgWidth}%`;
  const newWidthM = `${newSlideCountM * imgWidth}%`;
  mainSlideImgPC.style.width = newWidth;
  mainSlideImgMO.style.width = newWidth;
};

const setInitialPos = () => {
  mainSlideImgPC.style.transform = `translateX(-33.33%)`;
  mainSlideImgMO.style.transform = `translateX(-33.33%)`;
};

//이미지 클론
const imgs = document.querySelectorAll(".bg_imgPC > img");
const imgsM = document.querySelectorAll(".bg_imgMO > img");
const makeClone = () => {
  for (let i = 0; i < imgs.length; i++) {
    const cloneSlide = imgs[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    mainSlideImgPC.appendChild(cloneSlide);
  }
  for (let i = imgs.length - 1; i >= 0; i--) {
    const cloneSlide = imgs[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    mainSlideImgPC.prepend(cloneSlide);
  }
  for (let i = 0; i < imgsM.length; i++) {
    const cloneSlideM = imgsM[i].cloneNode(true);
    cloneSlideM.classList.add("clone");
    mainSlideImgMO.appendChild(cloneSlideM);
  }
  for (let i = imgsM.length - 1; i >= 0; i--) {
    const cloneSlideM = imgsM[i].cloneNode(true);
    cloneSlideM.classList.add("clone");
    mainSlideImgMO.prepend(cloneSlideM);
  }
  updateWidth();
  setInitialPos();
  setTimeout(() => {
    mainSlideImgPC.classList.add("animated");
  }, 100);
  setTimeout(() => {
    mainSlideImgMO.classList.add("animated");
  }, 100);
};

makeClone();

// 슬라이드 이동 함수
const moveSlide = (num) => {
  slide = num;
  mainSlideImgPC.style.left = `${num}00%`;
  mainSlideImgMO.style.left = `${num}00%`;
  if (slide === mainPicsPC.length || slide === -mainPicsPC.length) {
    setTimeout(() => {
      mainSlideImgPC.classList.remove("animated");
      mainSlideImgPC.style.left = "0px";
      slide = 0;
    }, 500);
    setTimeout(() => {
      mainSlideImgPC.classList.add("animated");
    }, 600);
  }
  if (slide === mainPicsMO.length || slide === -mainPicsMO.length) {
    setTimeout(() => {
      mainSlideImgMO.classList.remove("animated");
      mainSlideImgMO.style.left = "0px";
      slide = 0;
    }, 500);
    setTimeout(() => {
      mainSlideImgMO.classList.add("animated");
    }, 600);
  }
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

// 자동슬라이드 및 정지
let timer = undefined;
const autoSlide = () => {
  if (timer === undefined) {
    timer = setInterval(() => {
      moveSlide(slide - 1);
      counterUpdatePlus();
    }, 3000);
  }
};

autoSlide();

const stopSlide = () => {
  clearInterval(timer);
  timer = undefined;
};

mainBanner.addEventListener("mouseenter", () => {
  stopSlide();
});

mainBanner.addEventListener("mouseleave", () => {
  autoSlide();
});

mainSlideArrowLeft.addEventListener("mouseenter", () => {
  stopSlide();
});

mainSlideArrowLeft.addEventListener("mouseleave", () => {
  autoSlide();
});

mainSlideArrowRight.addEventListener("mouseenter", () => {
  stopSlide();
});

mainSlideArrowRight.addEventListener("mouseleave", () => {
  autoSlide();
});

// 카테고리 위치 이동
const categoryArea = document.querySelector("#category_area");
