const urlParams = new URLSearchParams(window.location.search);
const keyword = urlParams.get("query");

const form = document.querySelector(".header_main_center > form");
const productItems = document.querySelector(".product_items");
let allProducts = [];

const createProduct = (product) => {
  const price = createKoPrice(product);
  const productItem = document.createElement("div");
  productItem.classList.add("product_item");
  productItem.innerHTML = `
    <div class="product_item">
      <div class="product_item_img">
        <img src="${product.thumbnail}" alt="product_01" />
        <div class="rating_coupon">${product.discount} 할인</div>
      </div>
      <div class="product_cartin">
        <i class="fa-solid fa-cart-shopping"></i>
        <p>담기</p>
      </div>
      <div class="product_item_text">
        <p class="product_name">
          ${product.productName}
        </p>
        <div class="product_item_text_bottom">
          <p class="product_price">${price.originalPriceKo}원</p>
          <div class="product_salePrice">
            <p class="product_rating">${product.discount}</p>
            <p class="product_Sprice">${price.priceKo}원</p>
          </div>
          <div class="comment_text">
            <i class="fa-regular fa-comment-dots"></i>
            <p>${product.reviews.length}</p>
          </div>
        </div>
      </div>
    </div>
  `;
  productItems.appendChild(productItem);
};

const createKoPrice = (product) => {
  const originalPriceKo = new Intl.NumberFormat("ko-kr").format(
    product.originalPrice
  );
  const priceKo = new Intl.NumberFormat("ko-kr").format(product.price);
  return { originalPriceKo, priceKo };
};

const removeAll = () => {
  const productItem = document.querySelectorAll(".product_item");
  productItem.forEach((item) => {
    item.remove();
  });
};

const searchProduct = (e) => {
  e.preventDefault();
  const searchInput = document.querySelector(".searchInput");
  const keyword = searchInput.value.trim();

  if (keyword) {
    window.location.href = `search.html?query=${encodeURIComponent(keyword)}`;
  }
};

const filterAndDisplayProducts = (keyword) => {
  if (keyword) {
    removeAll(); // 기존 상품 제거
    const filteredProducts = allProducts.filter((product) =>
      product.productName.includes(keyword)
    );
    if (filteredProducts.length > 0) {
      // 필터링된 상품이 있는 경우 화면에 생성
      filteredProducts.forEach((product) => {
        createProduct(product);
      });
    } else {
      // 필터링된 결과가 없는 경우
      document.querySelector(
        ".noItem"
      ).innerHTML = `<div><span>등록된 상품이 없습니다.</span></div>`;
    }
  } else {
    allProducts.forEach((product) => {
      createProduct(product);
    });
  }
};

const productInfo = ".././json/db.json";
fetch(productInfo)
  .then((response) => response.json())
  .then(({ products }) => {
    allProducts = products;
    filterAndDisplayProducts(keyword); // 페이지 로드 시 필터링 실행
  });

form.addEventListener("submit", searchProduct);
