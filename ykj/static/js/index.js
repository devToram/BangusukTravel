/*  "use strict";

      let map; */
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {
      /* map의 중심 설정 */ lat: 27,
      lng: 137,
    },
    zoom: 2.5 /* map의 줌 레벨 */,
    minZoom: 1,
    /* mapTypeId: "satellite",  위성타입*/
  });
  /* map.setTilt(45); */
  var vancouver = new google.maps.LatLng(49.3023, -123.107);

  marker = new google.maps.Marker({
    position: vancouver,
  });
  marker.setMap(map);
}

/* 
DOM Listener를 추가하여 페이지가 로드될 때 initialize()함수 실행 

google.maps.event.addDomListener(window, "load", initMap);
*/
