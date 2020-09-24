var geocoder;
var map; // 전체 맵
var CurLat; // 현재 위치 위도
var Curlon; // 현재 위치 경도
var CurName; // 현재 위치 이름
var CurWeather; // 현재 위치 날씨
var CurTemp; // 현재 위치 체감 기온
var CurWind; // 현재 위치 풍속
var CurHumid; // 현재 위치 습도
var temp = 0; // 처음 한 번 현재 위치에 대한 날씨 정보를 받아오기 위한 임시 변수
var legend; // 범례 (지금 이 지역은!) 을 global로 쓰기 위해
var legend_div; // 범례에 추가할 내용을 global로 쓰기 위해
var place_name;


// 현재 위치를 불러오기 위한 부분 시작 

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

  legend = document.getElementById('legend');
  legend_div = document.createElement('div');
  // Geocoder
  geocoder = new google.maps.Geocoder();

  var myLatLng = new google.maps.LatLng( CurLat, Curlon);
  var mapOptions = {
      zoom: 16,
      center: myLatLng,
      // mapTypeId: 'roadmap'
  };
  map = new google.maps.Map(document.getElementById('map'), mapOptions);

    var home_image = { // 지도 아이콘
      url: "https://www.flaticon.com/svg/static/icons/svg/589/589521.svg",
      scaledSize: new google.maps.Size(30,30)
    };
    var beachMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        // label: "현재 위치",
        icon :home_image
    });

    targetPoint(); // 50 가지 관광 명소 Marker 불러오기

    panorama = new google.maps.StreetViewPanorama( // 파노라마 뷰 설정
      document.getElementById("pano"),
      {
        position: myLatLng,
        pov: {
          heading: 34,
          pitch: 10
        }
      }
    );

    var image = { // 관광한 곳 보라색 점으로 찍을 때 사용하는 보라색 점 아이콘
      url: "https://svg-clipart.com/svg/purple/qD1j6Dk-purple-circle-icon-vector.svg",
      scaledSize: new google.maps.Size(15,13)
    };

    panorama.addListener("position_changed", () => { // 관광한 곳에 찍기 
      var curpos = panorama.getPosition() + "";
      var posArray = curpos.split(',');
      posArray[0] = posArray[0].replace("(","");
      posArray[1] = posArray[1].replace(")","").replace(" ","");
      console.log("현재 위도 : ",posArray[0],", 경도 :", posArray[1]);
      // document.getElementById("content").innerText += ("현재 위도 : ",posArray[0],", 경도 :", posArray[1]);

      new google.maps.Marker({
        position:{lat:Number(posArray[0]), lng:Number(posArray[1])},
        map: map,
        icon:image
      });

      // 처음 한 번만 실행되어 현재 접속자가 있는 위치의 날씨를 가져온다.
      if(temp ==0 ){
        temp++; // 이제 다시는 실행하지 않는다.
        fetch(
          'https://api.openweathermap.org/data/2.5/weather?lat='+String(CurLat)+'&lon='+String(Curlon)+'&appid=++키자리입니다++&units=metric'
        )
          .then(function(response){
          return response.json();
        })
          .then(function(json){  
            CurName = json.name;
            CurWeather = json.weather[0].description; // String
            CurTemp = json.main.feels_like; // Number
            CurHumid = json.main.humidity; // Number
            CurWind = json.wind.speed; // Number
          });
      }

      // 거리뷰를 옮길 떄마다 실행되어 해당 지역의 날씨 정보를 가져온다.
      fetch(
        'https://api.openweathermap.org/data/2.5/weather?lat='+String(posArray[0])+'&lon='+String(posArray[1])+'&appid=88b09f015356454bc7bb626fc92f996d&units=metric'
      )
        .then(function(response){
        return response.json();
      })
        .then(function(json){
          console.log(json);
          place_name = json.name;
          var place_weather = json.weather[0].description;
          var place_temp = json.main.feels_like;
          var place_realTemp = json.main.temp;
          var place_humid = json.main.humidity;
          var place_wind = json.wind.speed;

          legend_div.innerHTML = `현재 ${place_name}의 날씨는 <strong>${place_weather}</strong> 입니다.<br/>`;
          legend.appendChild(legend_div);
          tempDescription(place_name, place_temp); 
          // console.log(`현재 ${place_name}의 기온은 ${place_realTemp}℃ 입니다.<br/>`)   
          legend_div.innerHTML += `현재 ${place_name}의 기온은 <strong>${place_realTemp} ℃</strong> 입니다.<br/>`;
          legend.appendChild(legend_div);
          // document.getElementById("content").innerText += (`현재 ${place_name}의 기온은 ${place_realTemp}℃ 입니다.`);
          humidDescription(place_name, place_humid);     
          windDescription(place_name, place_wind);
        });
    });

    map.setStreetView(panorama);
    // div.innerHTML = '<img src="' + icon + '"> ' + name;
    // legend_div.innerHTML = "보고 계신 지역의 상대적 날씨 정보가 표시됩니다.<br/>지금 여러 관광지를 스트리트뷰로 여행해보세요!";
    // legend.appendChild(legend_div);
    
    map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(legend);
    
}

function codeAddress() {
  var address = document.getElementById("address").value;
  var loc = [];
  geocoder.geocode({ address: address }, function (results, status) {
    if (status == "OK") {
      // 여기

      map.setCenter(results[0].geometry.location);
      map.setZoom(12);
      loc[0] = results[0].geometry.location.lat();
      loc[1] = results[0].geometry.location.lng();
      // marker = new google.maps.Marker({
      //   map: map,
      //   position: results[0].geometry.location,
      // });
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

      var image = { // 관광한 곳 보라색 점으로 찍을 때 사용하는 보라색 점 아이콘
        url: "https://svg-clipart.com/svg/purple/qD1j6Dk-purple-circle-icon-vector.svg",
        scaledSize: new google.maps.Size(15,13)
      };
  
      panorama.addListener("position_changed", () => { // 관광한 곳에 찍기 
        var curpos = panorama.getPosition() + "";
        var posArray = curpos.split(',');
        posArray[0] = posArray[0].replace("(","");
        posArray[1] = posArray[1].replace(")","").replace(" ","");
        console.log("현재 위도 : ",posArray[0],", 경도 :", posArray[1]);
        // document.getElementById("content").innerText += ("현재 위도 : ",posArray[0],", 경도 :", posArray[1]);
  
        new google.maps.Marker({
          position:{lat:Number(posArray[0]), lng:Number(posArray[1])},
          map: map,
          icon:image
        });
  
        // 처음 한 번만 실행되어 현재 접속자가 있는 위치의 날씨를 가져온다.
        if(temp ==0 ){
          temp++; // 이제 다시는 실행하지 않는다.
          fetch(
            'https://api.openweathermap.org/data/2.5/weather?lat='+String(CurLat)+'&lon='+String(Curlon)+'&appid=88b09f015356454bc7bb626fc92f996d&units=metric'
          )
            .then(function(response){
            return response.json();
          })
            .then(function(json){  
              CurName = json.name;
              CurWeather = json.weather[0].description; // String
              CurTemp = json.main.feels_like; // Number
              CurHumid = json.main.humidity; // Number
              CurWind = json.wind.speed; // Number
            });
        }
  
        // 거리뷰를 옮길 떄마다 실행되어 해당 지역의 날씨 정보를 가져온다.
        fetch(
          'https://api.openweathermap.org/data/2.5/weather?lat='+String(posArray[0])+'&lon='+String(posArray[1])+'&appid=88b09f015356454bc7bb626fc92f996d&units=metric'
        )
          .then(function(response){
          return response.json();
        })
          .then(function(json){
            console.log(json);
            place_name = json.name;
            var place_weather = json.weather[0].description;
            var place_temp = json.main.feels_like;
            var place_realTemp = json.main.temp;
            var place_humid = json.main.humidity;
            var place_wind = json.wind.speed;
  
            legend_div.innerHTML = `현재 ${place_name}의 날씨는 <strong>${place_weather}</strong> 입니다.<br/>`;
            legend.appendChild(legend_div);
            tempDescription(place_name, place_temp); 
            // console.log(`현재 ${place_name}의 기온은 ${place_realTemp}℃ 입니다.<br/>`)   
            legend_div.innerHTML += `현재 ${place_name}의 기온은 <strong>${place_realTemp} ℃</strong> 입니다.<br/>`;
            legend.appendChild(legend_div);
            // document.getElementById("content").innerText += (`현재 ${place_name}의 기온은 ${place_realTemp}℃ 입니다.`);
            humidDescription(place_name, place_humid);     
            windDescription(place_name, place_wind);
          });
      });
  
      map.setStreetView(panorama);
      // div.innerHTML = '<img src="' + icon + '"> ' + name;
      // legend_div.innerHTML = "보고 계신 지역의 상대적 날씨 정보가 표시됩니다.<br/>지금 여러 관광지를 스트리트뷰로 여행해보세요!";
      // legend.appendChild(legend_div);
      
      // map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(legend);
     
    } else {
      alert("Geocode was not successful for the following reason: " + status);
    }
  });
}


function targetPoint() {

  var kor_seoul = {lat:37.5642135, lng:127.0016985};
  var usa_liberty = { lat: 40.689167 ,lng:-74.044444 };
  var usa_grandCanyon = {lat:36.0544445, lng:-112.1401108};
  var aus_grapeBarrierReef = {lat:-18.1710, lng:147.42};
  // lat : 북위(위도), lng : 동경(경도)

  // 자유의 여신상 
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
    if(usa_liberty_marker.getAnimation()==null){
      usa_liberty_marker.setAnimation(google.maps.Animation.BOUNCE);
    }
    else{
      usa_liberty_marker.setAnimation(null);
    }
  });

  usa_liberty_marker.addListener('mouseout', function() {
    console.log("움직이잖어;;;");
    usa_liberty_infowindow.close();
    if(usa_liberty_marker.getAnimation()!=null){
      usa_liberty_marker.setAnimation(null);
    }
    
  });

  // 그랜드 캐니언
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
    if(usa_grandCanyon_marker.getAnimation()==null){
      usa_grandCanyon_marker.setAnimation(google.maps.Animation.BOUNCE);
    }
    else{
      usa_grandCanyon_marker.setAnimation(null);
    }
  });

  usa_grandCanyon_marker.addListener('mouseout', function() {
    usa_grandCanyon_infowindow.close();
    if(usa_grandCanyon_marker.getAnimation()!=null){
      usa_grandCanyon_marker.setAnimation(null);
    }
    
  });

  // 그레이트 베리어 리프
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
    if(aus_grapeBarrierReef_marker.getAnimation()==null){
      aus_grapeBarrierReef_marker.setAnimation(google.maps.Animation.BOUNCE);
    }
    else{
      aus_grapeBarrierReef_marker.setAnimation(null);
    }
  });

  aus_grapeBarrierReef_marker.addListener('mouseout', function() {
    aus_grapeBarrierReef_infowindow.close();
    if(aus_grapeBarrierReef_marker.getAnimation()!=null){
      aus_grapeBarrierReef_marker.setAnimation(null);
    }
    
  });


}

function  tempDescription(place_name, place_temp){
  var addText;
  if(place_temp - CurTemp > 10){ 
    addText = `현재 ${place_name}의 체감 기온은 <strong>${place_temp} ℃</strong>로 현재 계신 ${CurName} 보다 조금 따뜻해요.<br/>`;
  }
  else if(place_temp - CurTemp > 20){
    addText = `현재 ${place_name}의 체감 기온은 <strong>${place_temp} ℃</strong>로 현재 계신 ${CurName} 보다 보다 훨씬 더워요.<br/>`;
  }
  else if(place_temp - CurTemp < -10){
    addText = `현재 ${place_name}의 체감 기온은 <strong>${place_temp} ℃</strong>로 현재 계신 ${CurName} 보다 조금 쌀쌀해요.<br/>`;
  }
  else if(place_temp - CurTemp < -20){
    addText = `현재 ${place_name}의 체감 기온은 <strong>${place_temp} ℃</strong>로 현재 계신 ${CurName} 보다 훨씬 추워요.<br/>`;
  }
  else if(place_temp - CurTemp <=10 || place_temp - CurTemp >= -10){
    addText = `현재 ${place_name}의 체감 기온은 <strong>${place_temp} ℃</strong>로 현재 계신 ${CurName}과 비슷한 날씨에요.<br/>`;
  }
  else{
    addText = `현재 ${place_name}의 체감 기온은 <strong>${place_temp} ℃</strong>입니다.<br/>`;
  }

  // console.log(addText);
  legend_div.innerHTML += addText;
  legend.appendChild(legend_div);
  // document.getElementById("content").innerText += (addText);
  
}

function humidDescription(place_name, place_humid){
  var addText;
  // if(place_humid - CurHumid <=1 || place_humid - CurHumid >= -1){
  //  addText = (`현재 ${place_name}의 습도는 <strong>${place_humid} %</strong>로 현재 계신 ${CurName}와(과) 비슷해요.<br/>`);
  // }
  if(place_humid - CurHumid>0){
    addText = (`현재 ${place_name}의 습도는 <strong>${place_humid} %</strong>로 현재 계신 ${CurName}보다 습해요.<br/>`);
  }
  else if(place_humid - CurHumid == 0){
    addText = (`현재 ${place_name}의 습도는 <strong>${place_humid} %</strong>로 현재 계신 ${CurName}와 같아요.<br/>`);
  }
  else{
    addText = (`현재 ${place_name}의 습도는 <strong>${place_humid} %</strong>로 현재 계신 ${CurName}보다 건조해요.<br/>`);
  }
  // console.log(addText);
  legend_div.innerHTML += addText;
  legend.appendChild(legend_div);
  // document.getElementById("content").innerText += addText;
}

function windDescription(place_name, place_wind){
  var addText;
  if(place_wind - CurWind > 10){
    addText = (`현재 ${place_name}의 풍속은 <strong>${place_humid} m/s</strong>으로 현재 계신 ${CurName}보다 훨씬 바람이 많이 불어요!<br/>`);
    // console.log(addText);
    legend_div.innerHTML += addText;
    legend.appendChild(legend_div);
    // document.getElementById("content").innerText += addText;
  }
}


$(function(){
  $("#shot").on("click",function(){
    // html2canvas(document.querySelector(".widget-scene-canvas")).then(canvas => {
    //   saveAs(canvas.toDataURL('image/png'),"capture-test.png");
  //     });
      // var screenshot = {};
      html2canvas(document.getElementById("pano"),{
        useCORS: true,
        onrendered: function (canvas) {
          console.log("!")
          // var tempcanvas = document.createElement('canvas');
          // tempcanvas.width=1350;
          // tempcanvas.height=700;
          // var context = tempcanvas.getContext('2d');
          // context.drawImage(canvas,0,0,1350,700,0,0,1350,700);
          // var link = document.createElement('a');
          // link.href = tempcanvas.toDataURL('image/jpg');
          // link.download = 'screenshot.jpg';
          // link.click();
          // savaAs(href,download);
        }
      })
      .then(canvas => saveAs(canvas.toDataURL('image/png'),place_name+".png"))
      ;
    // console.log("~")
    // $(".gm-style svg").css("visibility","hidden")
    //  html2canvas( $(".gm-style svg"),{
    //     useCORS: true,
    //     onrendered: function(canvas)
    //     {
    //       $(".gm-style svg").css("visibility","visible")
    //       var dataUrl= canvas.toDataURL('image/png');
          
    //     }
    //   }).then(canvas => saveAs(dataUrl,"capture_test.png"));
    });
    function saveAs(uri, filename){
      var link = document.createElement('a');
      if (typeof link.download === 'string'){
        link.href = uri;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }else{
        window.open(uri);
      }
    }
  });