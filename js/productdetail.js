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
    // const reviews = product.reviews[0].img;
    // console.log(reviews);

    if (productId > 0 && productId < 21) {
      const mobileHeaderTitle = document.querySelector(".mobileHeaderTitle");
      mobileHeaderTitle.innerText = product.productName;
      const thumbnail = document.querySelector(".thumbnail");
      thumbnail.innerHTML = `<img src="${product.thumbnail}"/>`;
      const productImg = document.querySelector("#productImg");
      productImg.innerHTML = `
      <img src="${product.productImg}"/>
      <img src="${product.productMobileImg}"/>
      `;
      const frozen = document.querySelector(".frozen");
      console.log(frozen);
      frozen.innerText = product.frozen;
      if (product.frozen === "냉장") {
        frozen.style.backgroundColor = "#2CAA18";
      } else {
        frozen.style.backgroundColor = "#7897bc";
      }
      const productName = document.querySelector(".productName");
      productName.innerText = product.productName;
      const description = document.querySelector(".description");
      description.innerText = product.description;
      const originalPrice = document.querySelector(".originalPrice");
      originalPrice.innerText = product.originalPrice;
      const price = document.querySelector(".price");
      price.innerHTML = `<h2><b>${product.discount}</b> ${product.price}</h2>`;
      const totalPrice = document.querySelector(".totalPrice");
      totalPrice.innerText = product.price;
      const productNameChoice = document.querySelector(".productNameChoice");
      productNameChoice.innerText = product.productName;
      const originalPriceChoice = document.querySelector(
        ".originalPriceChoice"
      );
      originalPriceChoice.innerText = product.originalPrice;
      const PriceChoice = document.querySelector(".PriceChoice");
      PriceChoice.innerText = product.price;
      const modalFrozen = document.querySelector(".modalFrozen");
      modalFrozen.innerText = `${product.frozen} (종이포장)`;
      const packaging = document.querySelector(".packaging");
      packaging.innerText = product.packaging;
      const productWeight = document.querySelector(".productWeight");
      productWeight.innerText = product.productWeight;
      const allergyInfo = document.querySelector(".allergyInfo");
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

      //   bottomreview
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
      review.forEach((item, i) => {
        item.innerHTML = `
        <div class="user">
                <span>베스트</span>
                <span>${product.reviews[i].username}</span>
              </div>
              <div class="desc">
                <span>${product.productName}</span>
                <span
                  >${product.reviews[i].comment}</span
                >
                <div>
                  <img src="${product.reviews[i].img}" alt="reveiw" />
                </div>
                <span>${product.reviews[i].date}</span>
              </div>
              <div class="like">
                <span><i class="fa-regular fa-thumbs-up"></i> 도움돼요</span>
              </div>
        `;
      });
    } else {
      window.history.back();
    }
  })
  .catch((error) => {
    console.log(error);
  });
