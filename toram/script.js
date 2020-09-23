var map;

function initMap() {
  var kor_seoul = {lat:37.5642135, lng:127.0016985};
  var usa_liberty = { lat: 40.689167 ,lng: -74.044444 };
  var usa_grandCanyon = {lat:36.0544445, lng:-112.1401108};
  var aus_grapeBarrierReef = {lat:-18.1710, lng:147.42};
  // lat : 북위(위도), lng : 동경(경도)
  // map = new google.maps.Map( document.getElementById('map'), {
  //     zoom: 12,
  //     center: kor_seoul
  //   });

  new google.maps.Marker({
    position: usa_liberty,
    map: map,
    label: "자유의 여신상"
  });

  new google.maps.Marker({
    position: usa_grandCanyon,
    map: map,
    label: "그랜드 캐니언"
  });

  new google.maps.Marker({
    position: aus_grapeBarrierReef,
    map: map,
    label: "그레이트 베리어 리프"
  });
}

////

window.onload = getLocation; 
function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(locationSuccess, locationError, geo_options);
    }else{
        console.log("지오 로케이션 없음")
    }
};
// getLocation
var latitude, longitude;
function locationSuccess(p){
    latitude = p.coords.latitude,
    longitude = p.coords.longitude;
    initialize();
}
// locationSuccess
function locationError(error){
    var errorTypes = {
        0 : "무슨 에러냥~",
        1 : "허용 안눌렀음",
        2 : "위치가 안잡힘",
        3 : "응답시간 지남"
    };
    var errorMsg = errorTypes[error.code];
}
// locationError
var geo_options = {
  enableHighAccuracy: true,
  maximumAge        : 30000,
  timeout           : 27000
};
// geo_options

function initialize() {
    var myLatLng = new google.maps.LatLng(latitude, longitude);
    var mapOptions = {
        zoom: 16,
        center: myLatLng
    };
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    var beachMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        label: "현재 위치"
    });
    initMap();
    //html 문서안에 map-canvas 엘리먼트에 맵을 그리라고 하는 것임
}