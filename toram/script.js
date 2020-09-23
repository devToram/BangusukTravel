var map;
var CurLat;
var Curlon;

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
    CurLat = latitude;
    Curlon = longitude;
    console.log("현재 위도 경도",latitude, longitude);
    initialize();
}
// locationSuccess
function locationError(error){
    var errorTypes = {
        0 : "무슨 에러?",
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

    targetPoint();

    const panorama = new google.maps.StreetViewPanorama(
      document.getElementById("pano"),
      {
        position: myLatLng,
        pov: {
          heading: 34,
          pitch: 10
        }
      }
    );

    panorama.addListener("position_changed", () => {
      var curpos = panorama.getPosition() + "";
      var posArray = curpos.split(',');
      posArray[0] = posArray[0].replace("(","");
      posArray[1] = posArray[1].replace(")","").replace(" ","");
      posArray[0] = Math.round(Number(posArray[0]));
      posArray[1] = Math.round(Number(posArray[1]));

      console.log(posArray[0], posArray[1]);
      
      fetch(
        'https://api.openweathermap.org/data/2.5/weather?lat='+String(posArray[0])+'&lon='+String(posArray[1])+'&appid=++여기가키입니다++&units=metric'
      )
        .then(function(response){
        return response.json();
      })
        .then(function(json){
          console.log(json);

          console.log("현재 위치 : "+json.name);
          console.log("현재 날씨 : "+json.weather[0].description);
          console.log("현재 체감 기온 : "+json.main.feels_like+"℃");
          console.log("현재 기온 : "+ json.main.temp+"℃");
          console.log("현재 습도 : "+ json.main.humidity+"%");
          console.log("현재 바람풍속 : "+json.wind.speed+"m/s");
        });
    });

    map.setStreetView(panorama);
    
}

function targetPoint() {

  var kor_seoul = {lat:37.5642135, lng:127.0016985};
  var usa_liberty = { lat: 40.689167 ,lng:-74.044444 };
  var usa_grandCanyon = {lat:36.0544445, lng:-112.1401108};
  var aus_grapeBarrierReef = {lat:-18.1710, lng:147.42};
  // lat : 북위(위도), lng : 동경(경도)

  usa_liberty_content = "<h2>자유의 여신상</h2><p>자유의 여신상이라는 이름으로 더 잘 알려져 있는 세계를 밝히는 자유는</br>프랑스가 19세기 말에 미국의 독립 100주년을 축하하기 위해 제작한 동상</p>"
  var usa_liberty_infowindow = new google.maps.InfoWindow({ content: usa_liberty_content});

  usa_liberty_marker = new google.maps.Marker({
    position: usa_liberty,
    map: map,
    label: "자유의 여신상",
    title: usa_liberty_content
  });

  usa_liberty_marker.addListener('click', function() {
    usa_liberty_infowindow.open(map, usa_liberty_marker);
  });


  usa_grandCanyon_content = "<h2>그랜드 캐니언</h2><p>그랜드 캐니언 국립공원은 미국 애리조나주에 있는 국립공원이다. </br>미국의 국립공원 중에서 가장 규모가 크고 웅장하고 신비로운 계곡이 있는 세계적인 공원이다.</p>"
  var usa_grandCanyon_infowindow = new google.maps.InfoWindow({ content: usa_grandCanyon_content});

  usa_grandCanyon_marker = new google.maps.Marker({
    position: usa_grandCanyon,
    map: map,
    label: "그랜드 캐니언",
    title: usa_grandCanyon_content
  });

  usa_grandCanyon_marker.addListener('click', function() {
    usa_grandCanyon_infowindow.open(map, usa_grandCanyon_marker);
  });

  aus_grapeBarrierReef_content = "<h2>그레이트 베리어 리프</h2><p>그레이트배리어리프 또는 대보초는 오스트레일리아 북동부에 위치한 세계 최대의 산호초 지대이다.</br>이것은 오스트레일리아의 해안 지형에서 가장 두드러진 특색이다.2,600 km에 걸쳐 3,000위치한다.<br/>오스트레일리아의 북동 퀸즐랜드주의 해안을 따라 발달한 산호초이다.</p>"
  var aus_grapeBarrierReef_infowindow = new google.maps.InfoWindow({ content: aus_grapeBarrierReef_content});

  aus_grapeBarrierReef_marker = new google.maps.Marker({
    position: aus_grapeBarrierReef,
    map: map,
    label: "그레이트 베리어 리프",
    title: aus_grapeBarrierReef_content
  });

  aus_grapeBarrierReef_marker.addListener('click', function() {
    aus_grapeBarrierReef_infowindow.open(map, aus_grapeBarrierReef_marker);
  });


}
