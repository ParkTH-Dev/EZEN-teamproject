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

document.addEventListener("DOMContentLoaded", () => {
  const deleteIcon = document.querySelector(".x-mark");
  const deleteModal = document.querySelector(".deleteModal");
  const closeBtn = deleteModal.querySelector(".close");
  const confirmDeleteBtn = document.getElementById("confirmDelete");
  const cancelDeleteBtn = document.getElementById("cancelDelete");

  // 삭제 아이콘 클릭 시 모달 표시
  deleteIcon.addEventListener("click", () => {
    deleteModal.style.display = "block";
  });

  // 모달 닫기 버튼 클릭 시 모달 숨김
  closeBtn.addEventListener("click", () => {
    deleteModal.style.display = "none";
  });

  // 취소 버튼 클릭 시 모달 숨김
  cancelDeleteBtn.addEventListener("click", () => {
    deleteModal.style.display = "none";
  });

  // 확인 버튼 클릭 시 실제 삭제 동작 추가 (여기서는 모달만 닫음)
  confirmDeleteBtn.addEventListener("click", () => {
    // 실제 삭제 로직이 여기에 추가될 수 있음
    deleteModal.style.display = "none";
  });

  // 모달 외부 클릭 시 모달 숨김
  window.addEventListener("click", (event) => {
    if (event.target === deleteModal) {
      deleteModal.style.display = "none";
    }
  });
});

// 카카오 맵 모달창 내용

// function sample6_execDaumPostcode() {
//   new daum.Postcode({
//     theme: {
//       searchBgColor: "#5F0080",
//       queryTextColor: "#FFFFFF",
//       emphTextColor: "#5F0080",
//     },
//     oncomplete: function (data) {
//       document.querySelector(".addressInner").classList.add("active");
//       var addr = "";
//       var extraAddr = "";
//       if (data.userSelectedType === "R") {
//         addr = data.roadAddress;
//       } else {
//         addr = data.jibunAddress;
//       }
//       if (data.userSelectedType === "R") {
//         if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
//           extraAddr += data.bname;
//         }
//         if (data.buildingName !== "" && data.apartment === "Y") {
//           extraAddr +=
//             extraAddr !== "" ? ", " + data.buildingName : data.buildingName;
//         }
//         if (extraAddr !== "") {
//           extraAddr = " (" + extraAddr + ")";
//         }
//         document.getElementById("sample6_extraAddress").value = extraAddr;
//       } else {
//         document.getElementById("sample6_extraAddress").value = "";
//       }
//       document.getElementById("sample6_address").value = addr;
//       document.getElementById("sample6_detailAddress").focus();
//     },
//   }).open();
// }

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
