var geocoder;
var map;
function initMap() {
  // Geocoder
  geocoder = new google.maps.Geocoder();

  // Map load
  map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: 27,
      lng: 137,
    },
    zoom: 2.5,
    minZoom: 1,
    /* mapTypeId: "satellite",  위성타입*/
  });
  /* map.setTilt(45); */

  // Marker of Vancouver
  var vancouver = new google.maps.LatLng(49.3023, -123.107);

  marker = new google.maps.Marker({
    position: vancouver,
  });
  marker.setMap(map);
}

function codeAddress() {
  var address = document.getElementById("address").value;
  var loc = [];
  geocoder.geocode({ address: address }, function (results, status) {
    if (status == "OK") {
      map.setCenter(results[0].geometry.location);
      map.setZoom(12);
      loc[0] = results[0].geometry.location.lat();
      loc[1] = results[0].geometry.location.lng();
      marker = new google.maps.Marker({
        map: map,
        position: results[0].geometry.location,
      });
      console.log(loc);

      // weather API
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?lat=" +
          String(loc[0]) +
          "&lon=" +
          String(loc[1]) +
          "&appid=++여기가 키 입니다++&units=metric"
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (json) {
          console.log(json);

          console.log("현재 위치 : " + json.name);
          console.log("현재 날씨 : " + json.weather[0].description);
          console.log("현재 체감 기온 : " + json.main.feels_like + "℃");
          console.log("현재 기온 : " + json.main.temp + "℃");
          console.log("현재 습도 : " + json.main.humidity + "%");
          console.log("현재 바람풍속 : " + json.wind.speed + "m/s");
        });
    } else {
      alert("Geocode was not successful for the following reason: " + status);
    }
  });
}
/* 
DOM Listener를 추가하여 페이지가 로드될 때 initialize()함수 실행 

google.maps.event.addDomListener(window, "load", initMap);
*/
