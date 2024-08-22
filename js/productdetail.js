const choicePrice = document.querySelector(".PriceChoice");
const totalPrice = document.querySelector(".totalPrice");

// sharemodal
const shareBtn = document.querySelector(".share");
shareBtn.addEventListener("click", () => {
  document.querySelector(".share_modal").classList.toggle("active");
});
// infomodal
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

// refundmodal
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

// json
const productInfo = ".././json/db.json";
fetch(productInfo)
  .then((resoponse) => resoponse.json())
  .then((data) => {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get("id");
    const product = data.products[productId - 1];
    const mobileHeaderTitle = document.querySelector(".mobileHeaderTitle");
    const thumbnail = document.querySelector(".thumbnail");
    const frozen = document.querySelector(".frozen");
    const productName = document.querySelector(".productName");
    const description = document.querySelector(".description");
    const originalPrice = document.querySelector(".originalPrice");
    const price = document.querySelector(".price");
    const totalPrice = document.querySelector(".totalPrice");
    const productImg = document.querySelector("#productImg");
    const productNameChoice = document.querySelector(".productNameChoice");
    const originalPriceChoice = document.querySelector(".originalPriceChoice");
    let PriceChoice = document.querySelector(".PriceChoice");
    const modalFrozen = document.querySelector(".modalFrozen");
    const packaging = document.querySelector(".packaging");
    const productWeight = document.querySelector(".productWeight");
    const allergyInfo = document.querySelector(".allergyInfo");
    const productCount = document.querySelector(".productCount");

    if (productId > 0 && productId < 21) {
      // 원화 변경
      let priceChanger = product.price;
      let originalPriceChanger = product.originalPrice;

      const priceKo = new Intl.NumberFormat("ko-kr").format(priceChanger);
      const originalPriceKo = new Intl.NumberFormat("ko-kr").format(
        originalPriceChanger
      );
      mobileHeaderTitle.innerText = product.productName;
      thumbnail.innerHTML = `<img src="${product.thumbnail}"/>`;
      productImg.innerHTML = `
      <img src="${product.productImg}"/>
      <img src="${product.productMobileImg}"/>
      `;
      frozen.innerText = product.frozen;
      if (product.frozen === "냉장") {
        frozen.style.backgroundColor = "#2CAA18";
      } else {
        frozen.style.backgroundColor = "#7897bc";
      }
      productName.innerText = product.productName;
      description.innerText = product.description;
      originalPrice.innerText = `${originalPriceKo}원`;
      price.innerHTML = `<h2><b>${product.discount}</b> ${priceKo}원</h2>`;
      totalPrice.innerText = `${priceKo}원`;
      productNameChoice.innerText = product.productName;
      originalPriceChoice.innerText = `${originalPriceKo}원`;
      PriceChoice.innerText = `${priceKo}원`;
      modalFrozen.innerText = `${product.frozen} (종이포장)`;
      packaging.innerText = product.packaging;
      productWeight.innerText = product.productWeight;
      allergyInfo.innerText = product.allergyInfo;
      //topreview
      const topReviewItem = document.querySelectorAll(".top_review_item");
      console.log(topReviewItem);
      topReviewItem.forEach((item, i) => {
        item.innerHTML = `
      <img src="${product.reviews[i].img}" />
      <div class="desc">
        <div class="userId">
          <span>${product.reviews[i].username}</span>
          <span>${product.reviews[i].date}</span>
        </div>
        <p>${product.reviews[i].comment}</</p>
        <div class="like">
          <div>
            <i class="fa-regular fa-thumbs-up"></i>
            <span>도움돼요</span>
            <span>120</span>
          </div>
        </div>
      </div>`;
      });

      // bottomreview
      document.querySelector(
        ".review_total"
      ).innerText = `총 ${product.reviews.length}개`;
      const review_imgs = document.querySelectorAll(".review_imgs > div");
      review_imgs.forEach((item, i) => {
        item.innerHTML = `
        <div>
              <img
                src="${product.reviews[i].img}"
              />
            </div>
        `;
      });
      const review = document.querySelectorAll(".user_review > .review");
      const sortedReviews = product.reviews.sort((a, b) => {
        return b.like - a.like; // 좋아요 수를 기준으로 내림차순 정렬
      });
      // 정렬된 리뷰를 다시 DOM에 추가
      const reviewContainer = document.querySelector(".user_review");
      sortedReviews.forEach((review) => {
        const reviewElement = document.createElement("div");
        reviewElement.classList.add("review");
        reviewElement.innerHTML = `
          <div class="user">
            <span>베스트</span>
            <span>${review.username}</span>
          </div>
          <div class="desc">
            <span>${product.productName}</span>
            <span>${review.comment}</span>
            <div>
              <img src="${review.img}" alt="review" />
            </div>
            <span>${review.date}</span>
          </div>
          <div class="like">
            <span><i class="fa-regular fa-thumbs-up"></i> ${review.like}</span>
          </div>
        `;
        reviewContainer.appendChild(reviewElement); // 정렬된 리뷰 DOM에 추가
      });
      // 중복 출력 방지를 위한 기존 아이템 제거 함수
      // 기존 리뷰 아이템을 제거하는 함수
      const removeItems = () => {
        const reviewItems = document.querySelectorAll(".user_review > .review");
        reviewItems.forEach((item) => {
          item.remove(); // 선택된 모든 리뷰 아이템 제거
        });
      };
      const likeBtn = document.querySelector(".asceBtn");
      const latestBtn = document.querySelector(".latestBtn");

      const lickBtnSort = (e) => {
        latestBtn.style.color = "#b5b5b5";
        likeBtn.style.color = "#000";
        e.preventDefault(); // 기본 동작 방지
        const sortedReviews = product.reviews.sort((a, b) => {
          return b.like - a.like; // 좋아요 수를 기준으로 내림차순 정렬
        });
        removeItems(); // 기존 리뷰 아이템 제거
        // 정렬된 리뷰를 다시 DOM에 추가
        const reviewContainer = document.querySelector(".user_review");
        sortedReviews.forEach((review) => {
          const reviewElement = document.createElement("div");
          reviewElement.classList.add("review");
          reviewElement.innerHTML = `
            <div class="user">
              <span>베스트</span>
              <span>${review.username}</span>
            </div>
            <div class="desc">
              <span>${product.productName}</span>
              <span>${review.comment}</span>
              <div>
                <img src="${review.img}" alt="review" />
              </div>
              <span>${review.date}</span>
            </div>
            <div class="like">
              <span><i class="fa-regular fa-thumbs-up"></i> ${review.like}</span>
            </div>
          `;
          reviewContainer.appendChild(reviewElement); // 정렬된 리뷰 DOM에 추가
        });
      };

      const latestBtnSort = (e) => {
        e.preventDefault();
        latestBtn.style.color = "#000";
        likeBtn.style.color = "#b5b5b5";
        const sortedReviews = product.reviews.sort((a, b) => {
          return new Date(b.date) - new Date(a.date);
        });
        removeItems();
        const reviewContainer = document.querySelector(".user_review");
        sortedReviews.forEach((review) => {
          const reviewElement = document.createElement("div");
          reviewElement.classList.add("review");
          reviewElement.innerHTML = `
            <div class="user">
              <span>베스트</span>
              <span>${review.username}</span>
            </div>
            <div class="desc">
              <span>${product.productName}</span>
              <span>${review.comment}</span>
              <div>
                <img src="${review.img}" alt="review" />
              </div>
              <span>${review.date}</span>
            </div>
            <div class="like">
              <span><i class="fa-regular fa-thumbs-up"></i> ${review.like}</span>
            </div>
          `;
          reviewContainer.appendChild(reviewElement); // 정렬된 리뷰 DOM에 추가
        });
      };
      // 내림차순 버튼에 이벤트 리스너 추가
      likeBtn.addEventListener("click", lickBtnSort);
      //  최근등록순 버튼에 이벤트 추가
      latestBtn.addEventListener("click", latestBtnSort);

      // productCounter
      const productCounterPlus = document.querySelector(".counterPlus");
      const productCounterMinus = document.querySelector(".counterMinus");
      let productCounter = 1;
      productCounterPlus.addEventListener("click", () => {
        priceChanger += product.price;
        originalPriceChanger += product.originalPrice;
        const priceKo = new Intl.NumberFormat("ko-kr").format(priceChanger);
        const originalPriceKo = new Intl.NumberFormat("ko-kr").format(
          originalPriceChanger
        );
        PriceChoice.innerText = `${priceKo}원`;
        totalPrice.innerText = `${priceKo}원`;
        originalPriceChoice.innerText = `${originalPriceKo}원`;
        productCount.innerText = `${
          productCounter >= 0 ? (productCounter += 1) : (productCounter = 0)
        }`;
      });
      productCounterMinus.addEventListener("click", () => {
        if (priceChanger && originalPriceChanger) {
          priceChanger -= product.price;
          originalPriceChanger -= product.originalPrice;
        }
        const priceKo = new Intl.NumberFormat("ko-kr").format(priceChanger);
        const originalPriceKo = new Intl.NumberFormat("ko-kr").format(
          originalPriceChanger
        );
        PriceChoice.innerText = `${priceKo}원`;
        totalPrice.innerText = `${priceKo}원`;
        originalPriceChoice.innerText = `${originalPriceKo}원`;
        productCount.innerText = `${
          productCounter > 0 ? (productCounter -= 1) : (productCounter = 0)
        }`;
      });
    } else {
      alert("잘못된 접근입니다.");
      window.history.back();
    }
  })
  .catch((error) => {
    console.log(error);
  });
