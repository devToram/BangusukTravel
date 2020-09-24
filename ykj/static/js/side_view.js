var geocoder;
var map;
function initialize() {
  // Geocoder
  geocoder = new google.maps.Geocoder();

  fenway = {
    lat: 42.345573,
    lng: -71.098326,
  };
  map = new google.maps.Map(document.getElementById("map"), {
    center: fenway,
    zoom: 14,
  });
  panorama = new google.maps.StreetViewPanorama(
    document.getElementById("pano"),
    {
      position: fenway,
      pov: {
        heading: 34,
        pitch: 10,
      },
    }
  );
  map.setStreetView(panorama);
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
      // 스트리트뷰도 검색어와 함께 이동
      panorama = new google.maps.StreetViewPanorama(
        document.getElementById("pano"),
        {
          position: results[0].geometry.location,
          pov: {
            heading: 34,
            pitch: 10,
          },
        }
      );
      map.setStreetView(panorama);
      console.log(loc);

      // weather API
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?lat=" +
          String(loc[0]) +
          "&lon=" +
          String(loc[1]) +
          "&appid=++여기가 키입니다.++&units=metric"
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
