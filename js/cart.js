// 주문하기 모달

document.addEventListener("DOMContentLoaded", function () {
  var modal = document.getElementById("loginModal");
  var btn = document.querySelector(".order-btn");
  var span = document.getElementsByClassName("close")[0];

  // 모달 열기
  btn.onclick = function () {
    modal.style.display = "block";
  };

  // 모달 닫기
  span.onclick = function () {
    modal.style.display = "none";
  };

  // 모달 외부 클릭 시 닫기
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});

// 모달 닫기

function fnCalCount(type, ths) {
  var $input = $(ths).parents("td").find("input[name='pop_out']");
  var tCount = Number($input.val());
  var tEqCount = Number($(ths).parents("tr").find("td.bseq_ea").html());

  if (type == "p") {
    if (tCount < tEqCount) $input.val(Number(tCount) + 1);
  } else {
    if (tCount > 0) $input.val(Number(tCount) - 1);
  }
}

// 카카오 주소 모달창
var mapContainer = document.getElementById("map"), // 지도를 표시할 div
  mapOption = {
    center: new daum.maps.LatLng(37.537187, 127.005476), // 지도의 중심좌표
    level: 5, // 지도의 확대 레벨
  };

//지도를 미리 생성
var map = new daum.maps.Map(mapContainer, mapOption);
//주소-좌표 변환 객체를 생성
var geocoder = new daum.maps.services.Geocoder();
//마커를 미리 생성
var marker = new daum.maps.Marker({
  position: new daum.maps.LatLng(37.537187, 127.005476),
  map: map,
});

function sample5_execDaumPostcode() {
  new daum.Postcode({
    theme: {
      searchBgColor: "#5F0080",
      queryTextColor: "#FFFFFF",
      emphTextColor: "#5F0080",
    },
    oncomplete: function (data) {
      var addr = data.address; // 최종 주소 변수

      // 주소 정보를 해당 필드에 넣는다.
      document.getElementById("sample5_address").value = addr;
      // 주소로 상세 정보를 검색
      geocoder.addressSearch(data.address, function (results, status) {
        // 정상적으로 검색이 완료됐으면
        if (status === daum.maps.services.Status.OK) {
          var result = results[0]; //첫번째 결과의 값을 활용

          // 해당 주소에 대한 좌표를 받아서
          var coords = new daum.maps.LatLng(result.y, result.x);
          // 지도를 보여준다.
          mapContainer.style.display = "block";
          map.relayout();
          // 지도 중심을 변경한다.
          map.setCenter(coords);
          // 마커를 결과값으로 받은 위치로 옮긴다.
          marker.setPosition(coords);
        }
      });
    },
  }).open();
}

const coldItemExample = document.querySelector("#cold-item-example");
console.log(coldItemExample);
const productInfo = ".././json/db.json";
fetch(productInfo)
  .then((resoponse) => resoponse.json())
  .then((data) => {
    coldItemExample.innerHTML = `
    
    `;
  })
  .catch((error) => {
    console.log(error);
  });
