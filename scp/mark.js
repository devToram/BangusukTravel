function targetPoint() {
 
  
    var usa_liberty = { lat: 40.689167 ,lng:-74.044444 };
  
  
    var usa_grandCanyon = {lat:36.0544445, lng:-112.1401108};
    var aus_grapeBarrierReef = {lat:-18.1710, lng:147.42};
    var usa_disneyland = {lat: 29.23180, lng: -81.64956};
    var nzd_south_island = {lat : -45.157614, lng : 169.889436};
    var rsa_cape_town = {lat : -33.968164, lng : 18.431033};
    var ind_golden_temple= {lat : 31.620136,lng :  74.876249};
    var usa_las_vegas= {lat : 36.155417,lng :  -115.170889};
    var aus_opera_house= {lat :-33.856811, lng :151.215393};
    var usa_newyork = {lat : 40.672156, lng: -73.982461};
    var ind_Taj_Mahal = {lat : 27.175021,lng :  78.042121};
    var cad_lake_louise = {lat : 51.425210,lng : -116.177627};
    var max_chichen ={lat :20.684285, lng:	-88.567804};
    var per_machu ={lat :-13.163214	, lng:-72.544995};
    var cad_niagra ={lat :43.082738	, lng:-79.074259};
    var jordan_petra ={lat :30.328362	, lng:35.444394};
    var egy_pyramid ={lat :29.927891	, lng:31.168553};
    var italy_venice = {lat :45.434063	, lng:12.329582};
  
  
  
    var maldives = {lat :-0.632746	, lng:73.097906};
    var manli_long_castle ={lat :40.431851	, lng:116.570396};
    var victoria_falls ={lat :-17.924422	, lng:25.857318};
    var hongkong ={lat :22.314374	, lng:114.221041};
    var yosemite_national_park = {lat :37.850808	, lng:-119.535353};
    var hawaii = {lat :21.305395, lng:	-157.716783};
    var nzd_north_island = {lat :-39.270598, lng:	175.834677};
    var iguassu_falls = {lat :-25.695356	, lng:-54.436548};
    var paris = {lat :48.787345	, lng:2.346366};
    var alaska = {lat :66.104993	, lng:-151.593295};
    var angkor_wat = {lat :13.411332	, lng:103.866868};
    var everest = {lat :27.988043	, lng:86.9224};
    var rio ={lat :-22.89371, lng:	-43.235608};
    var masai = {lat :-1.284528	, lng:36.869029};
  
  
  
  
    var galapagos ={lat :-0.376724	, lng:-90.053215};
    var luxor = {lat :25.689677	, lng:32.647793};
    var rome = {lat :41.873479	, lng:12.511647};
    var sanfran = {lat :37.741426	, lng:-122.415391};
    var barcel = {lat :41.434315	, lng:2.139422};
    var dubai = {lat :25.116575	, lng:55.288001};
    var singapore = {lat :1.321966	, lng:103.887001};
    var la_digue_island = {lat :-4.368057	, lng:55.84335};
    var sri_lanka = {lat :6.936534	, lng:80.933498};
    var bangkok = {lat :13.697281	, lng:100.553274};
    var barbados = {lat :13.156047	, lng:-59.53664};
    var iceland = {lat :64.59308	, lng:-18.643391};
    var chinese_king = {lat :34.383965	, lng:109.278588};
    var alps = {lat :45.976035	, lng:7.656907};
    var angel_falls = {lat :5.969682	, lng:-62.536401};
    var abu_simbel = {lat :22.336904	, lng:31.625767};
    var bali = {lat :-8.438191	, lng:115.010324};
    var bora ={lat :-16.50689	, lng:-151.736933};
    
  
  
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
      usa_liberty_infowindow.open(map,usa_liberty_marker);
      if(usa_liberty_marker.getAnimation()==null){
        usa_liberty_marker.setAnimation(google.maps.Animation.BOUNCE);
      }
      else{
        usa_liberty_marker.setAnimation(null);
      }
    });
  
    usa_liberty_marker.addListener('mouseout', function() {
      usa_liberty_infowindow.close();
      if(usa_liberty_marker.getAnimation()!=null){
        usa_liberty_marker.setAnimation(null);
      }
      
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
      usa_grandCanyon_infowindow.open(map,usa_grandCanyon_marker);
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
  
    aus_grapeBarrierReef_content = "<h2>그레이트 베리어 리프</h2><p>그레이트배리어리프 또는 대보초는 오스트레일리아 북동부에 위치한 세계 최대의 산호초 지대이다.</br>이것은 오스트레일리아의 해안 지형에서 가장 두드러진 특색이다.2,600 km에 걸쳐 3,000위치한다.<br/>오스트레일리아의 북동 퀸즐랜드주의 해안을 따라 발달한 산호초이다.</p>"
    var aus_grapeBarrierReef_infowindow = new google.maps.InfoWindow({ content: aus_grapeBarrierReef_content});
  
    aus_grapeBarrierReef_marker = new google.maps.Marker({
      position: aus_grapeBarrierReef,
      map: map,
      label: "그레이트 베리어 리프",
      title: aus_grapeBarrierReef_content
    });
  
    aus_grapeBarrierReef_marker.addListener('click', function() {
      aus_grapeBarrierReef_infowindow.open(map,aus_grapeBarrierReef_marker);
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
  
  
    usa_disneyland_content = "<h2>월트 디즈니 월드</h2><p>대형 리조트, 식당가, 상점, 놀이기구가 있는 4개의 테마파크, 공연장 등으로 구성된 유명한 명소입니다.</p>"
    var usa_disneyland_infowindow = new google.maps.InfoWindow({ content: usa_disneyland_content});
  
    usa_disneyland_marker = new google.maps.Marker({
      position: usa_disneyland,
      map: map,
      label: "월트 디즈니 월드",
      title: usa_disneyland_content
    });
  
    usa_disneyland_marker.addListener('click', function() {
      usa_disneyland_infowindow.open(map,usa_disneyland_marker);
      if(usa_disneyland_marker.getAnimation()==null){
        usa_disneyland_marker.setAnimation(google.maps.Animation.BOUNCE);
      }
      else{
        usa_disneyland_marker.setAnimation(null);
      }
    });
  
    usa_disneyland_marker.addListener('mouseout', function() {
      usa_disneyland_infowindow.close();
      if(usa_disneyland_marker.getAnimation()!=null){
        usa_disneyland_marker.setAnimation(null);
      }
      
    });
  
    
  
    nzd_south_island_content = "<h2>뉴질랜드 남섬</h2><p>반지의 제왕 촬영지</p>"
    var nzd_south_island_infowindow = new google.maps.InfoWindow({ content: nzd_south_island_content});
  
    nzd_south_island_marker = new google.maps.Marker({
      position: nzd_south_island,
      map: map,
      label: "뉴질랜드 남섬",
      title: nzd_south_island_content
    });
  
    nzd_south_island_marker.addListener('click', function() {
      nzd_south_island_infowindow.open(map,nzd_south_island_marker);
      if(nzd_south_island_marker.getAnimation()==null){
        nzd_south_island_marker.setAnimation(google.maps.Animation.BOUNCE);
      }
      else{
        nzd_south_island_marker.setAnimation(null);
      }
    });
  
    nzd_south_island_marker.addListener('mouseout', function() {
      nzd_south_island_infowindow.close();
      if(nzd_south_island_marker.getAnimation()!=null){
        nzd_south_island_marker.setAnimation(null);
      }
      
    });
  
    
  
    rsa_cape_town_content = "<h2>케이프타운</h2><p>케이프타운은 남아프리카 공화국의 입법 수도이다</br>이 도시의 배후에는 테이블 산이 있으며, 부근에 희망봉이 있다. </p>"
    var rsa_cape_town_infowindow = new google.maps.InfoWindow({ content: rsa_cape_town_content});
  
    rsa_cape_town_marker = new google.maps.Marker({
      position: rsa_cape_town,
      map: map,
      label: "남아공 케이프 타운",
      title: rsa_cape_town_content
    });
  
    rsa_cape_town_marker.addListener('click', function() {
      rsa_cape_town_infowindow.open(map,rsa_cape_town_marker);
      if(rsa_cape_town_marker.getAnimation()==null){
        rsa_cape_town_marker.setAnimation(google.maps.Animation.BOUNCE);
      }
      else{
        rsa_cape_town_marker.setAnimation(null);
      }
    });
  
    rsa_cape_town_marker.addListener('mouseout', function() {
      rsa_cape_town_infowindow.close();
      if(rsa_cape_town_marker.getAnimation()!=null){
        rsa_cape_town_marker.setAnimation(null);
      }
      
    });
  
    
  
    ind_golden_temple_content = "<h2>황금사원</h2><p>인도 시크교도의 총본산 인도 암리차르의 황금사원</p>"
    var ind_golden_temple_infowindow = new google.maps.InfoWindow({ content: ind_golden_temple_content});
  
    ind_golden_temple_marker = new google.maps.Marker({
      position: ind_golden_temple,
      map: map,
      label: "황금사원",
      title: ind_golden_temple_content
    });
  
    ind_golden_temple_marker.addListener('click', function() {
      ind_golden_temple_infowindow.open(map,ind_golden_temple_marker);
      if(ind_golden_temple_marker.getAnimation()==null){
        ind_golden_temple_marker.setAnimation(google.maps.Animation.BOUNCE);
      }
      else{
        ind_golden_temple_marker.setAnimation(null);
      }
    });
  
    ind_golden_temple_marker.addListener('mouseout', function() {
      ind_golden_temple_infowindow.close();
      if(ind_golden_temple_marker.getAnimation()!=null){
        ind_golden_temple_marker.setAnimation(null);
      }
      
    });
  
  
  
    
  
    usa_las_vegas_content = "<h2>라스베이거스</h2><p>라스베이거스 또는 라스베가스는 미국 남서부 사우스웨스트 네바다주 남부 사막 가운데에 있는 도시이자 최대도시이다.</p>"
    var usa_las_vegas_infowindow = new google.maps.InfoWindow({ content: usa_las_vegas_content});
  
    usa_las_vegas_marker = new google.maps.Marker({
      position: usa_las_vegas,
      map: map,
      label: "라스베이거스",
      title: usa_las_vegas_content
    });
  
    usa_las_vegas_marker.addListener('click', function() {
      usa_las_vegas_infowindow.open(map,usa_las_vegas_marker);
      if(usa_las_vegas_marker.getAnimation()==null){
        usa_las_vegas_marker.setAnimation(google.maps.Animation.BOUNCE);
      }
      else{
        usa_las_vegas_marker.setAnimation(null);
      }
    });
  
    usa_las_vegas_marker.addListener('mouseout', function() {
      usa_las_vegas_infowindow.close();
      if(usa_las_vegas_marker.getAnimation()!=null){
        usa_las_vegas_marker.setAnimation(null);
      }
      
    });
  
  
  
    
  
    aus_opera_house_content = "<h2>시드니 오페라하우스</h2><p>스카이라인에 우뚝 솟은 예술 센터로 가이드 투어를 이용하거나</br>오페라, 연극, 음악, 무용 공연을 볼 수 있습니다.</p>"
    var aus_opera_house_infowindow = new google.maps.InfoWindow({ content: aus_opera_house_content});
  
    aus_opera_house_marker = new google.maps.Marker({
      position: aus_opera_house,
      map: map,
      label: "오페라하우스",
      title: aus_opera_house_content
    });
  
    aus_opera_house_marker.addListener('click', function() {
      aus_opera_house_infowindow.open(map,aus_opera_house_marker);
      if(aus_opera_house_marker.getAnimation()==null){
        aus_opera_house_marker.setAnimation(google.maps.Animation.BOUNCE);
      }
      else{
        aus_opera_house_marker.setAnimation(null);
      }
    });
  
    aus_opera_house_marker.addListener('mouseout', function() {
      aus_opera_house_infowindow.close();
      if(aus_opera_house_marker.getAnimation()!=null){
        aus_opera_house_marker.setAnimation(null);
      }
      
    });
  
    
  
    usa_newyork_content = "<h2>뉴욕</h2><p>뉴욕은 미합중국 북동부, 뉴욕주의 남쪽 끝에 있는 도시이다.</br>또한 미합중국에서 가장 인구가 많은 도시로, 전 세계에서 가장 인구가 많은 도시 중 하나이며,</br>미합중국의 최대 도시이다.</p>"
    var usa_newyork_infowindow = new google.maps.InfoWindow({ content: usa_newyork_content});
  
    usa_newyork_marker = new google.maps.Marker({
      position: usa_newyork,
      map: map,
      label: "뉴욕",
      title: usa_newyork_content
    });
  
    usa_newyork_marker.addListener('click', function() {
      usa_newyork_infowindow.open(map,usa_newyork_marker);
      if(usa_newyork_marker.getAnimation()==null){
        usa_newyork_marker.setAnimation(google.maps.Animation.BOUNCE);
      }
      else{
        usa_newyork_marker.setAnimation(null);
      }
    });
  
    usa_newyork_marker.addListener('mouseout', function() {
      usa_newyork_infowindow.close();
      if(usa_newyork_marker.getAnimation()!=null){
        usa_newyork_marker.setAnimation(null);
      }
      
    });
  
  
  
    ind_Taj_Mahal_content = "<h2>타지마할</h2><p>첨탑이 있는 17세기 무굴제국풍 대리석 묘지로,.</br>모스크와 유명한 대칭식 정원이 있습니다.</p>"
    var ind_Taj_Mahal_infowindow = new google.maps.InfoWindow({ content: ind_Taj_Mahal_content});
  
    ind_Taj_Mahal_marker = new google.maps.Marker({
      position: ind_Taj_Mahal,
      map: map,
      label: "타지마할",
      title: ind_Taj_Mahal_content
    });
  
    ind_Taj_Mahal_marker.addListener('click', function() {
      ind_Taj_Mahal_infowindow.open(map,ind_Taj_Mahal_marker);
      if(ind_Taj_Mahal_marker.getAnimation()==null){
        ind_Taj_Mahal_marker.setAnimation(google.maps.Animation.BOUNCE);
      }
      else{
        ind_Taj_Mahal_marker.setAnimation(null);
      }
    });
  
    ind_Taj_Mahal_marker.addListener('mouseout', function() {
      ind_Taj_Mahal_infowindow.close();
      if(ind_Taj_Mahal_marker.getAnimation()!=null){
        ind_Taj_Mahal_marker.setAnimation(null);
      }
      
    });
  
  
    cad_lake_louise_content = "<h2>루이즈 호수</h2><p>동화속 도시 밴프의 루이스 호수</p>"
    var cad_lake_louise_infowindow = new google.maps.InfoWindow({ content: cad_lake_louise_content});
  
    cad_lake_louise_marker = new google.maps.Marker({
      position: cad_lake_louise,
      map: map,
      label: "루이즈 호수",
      title: cad_lake_louise_content
    });
  
    cad_lake_louise_marker.addListener('click', function() {
      cad_lake_louise_infowindow.open(map,cad_lake_louise_marker);
      if(cad_lake_louise_marker.getAnimation()==null){
        cad_lake_louise_marker.setAnimation(google.maps.Animation.BOUNCE);
      }
      else{
        cad_lake_louise_marker.setAnimation(null);
      }
    });
  
    cad_lake_louise_marker.addListener('mouseout', function() {
      cad_lake_louise_infowindow.close();
      if(cad_lake_louise_marker.getAnimation()!=null){
        cad_lake_louise_marker.setAnimation(null);
      }
      
    });
  
  
  
  
    max_chichen_content = "<h2>치첸이사</h2><p>거대한 마야 도시 발굴 유적지가 있는 고고학적 장소로</br>계단식 피라미드가 있다</p>"
    var max_chichen_infowindow = new google.maps.InfoWindow({ content: max_chichen_content});
  
    max_chichen_marker = new google.maps.Marker({
      position: max_chichen,
      map: map,
      label: "치첸이사",
      title: max_chichen_content
    });
  
    max_chichen_marker.addListener('click', function() {
      max_chichen_infowindow.open(map, max_chichen_marker);
      if(max_chichen_marker.getAnimation()==null){
        max_chichen_marker.setAnimation(google.maps.Animation.BOUNCE);
      }
      else{
        max_chichen_marker.setAnimation(null);
      }
    });
  
    max_chichen_marker.addListener('mouseout', function() {
      max_chichen_infowindow.close();
      if(max_chichen_marker.getAnimation()!=null){
        max_chichen_marker.setAnimation(null);
      }
      
    });
  
  
    per_machu_content = "<h2>마추픽추</h2><p>15세기 잉카 도시의 장징적인 대형 유적지</p>"
    var per_machu_infowindow = new google.maps.InfoWindow({ content: per_machu_content});
  
    per_machu_marker = new google.maps.Marker({
      position: per_machu,
      map: map,
      label: "마추픽추",
      title: per_machu_content
    });
  
    per_machu_marker.addListener('click', function() {
      per_machu_infowindow.open(map, per_machu_marker);
      if(per_machu_marker.getAnimation()==null){
        per_machu_marker.setAnimation(google.maps.Animation.BOUNCE);
      }
      else{
        per_machu_marker.setAnimation(null);
      }
    });
  
    per_machu_marker.addListener('mouseout', function() {
      per_machu_infowindow.close();
      if(per_machu_marker.getAnimation()!=null){
        per_machu_marker.setAnimation(null);
      }
      
    });
  
  
    cad_niagra_content = "<h2>나이아가라</h2><p>캐나다와 미국 경계에 우뚝 솟은 유명한 폭포</p>"
    var cad_niagra_infowindow = new google.maps.InfoWindow({ content: cad_niagra_content});
  
    cad_niagra_marker = new google.maps.Marker({
      position: cad_niagra,
      map: map,
      label: "나이아가라",
      title: cad_niagra_content
    });
  
    cad_niagra_marker.addListener('click', function() {
      cad_niagra_infowindow.open(map, cad_niagra_marker);
      if(cad_niagra_marker.getAnimation()==null){
        cad_niagra_marker.setAnimation(google.maps.Animation.BOUNCE);
      }
      else{
        cad_niagra_marker.setAnimation(null);
      }
    });
  
    cad_niagra_marker.addListener('mouseout', function() {
      cad_niagra_infowindow.close();
      if(cad_niagra_marker.getAnimation()!=null){
        cad_niagra_marker.setAnimation(null);
      }
      
    });
  
  
    jordan_petra_content = "<h2>페트라</h2><p>2000년 전의 상징적인 도시로 붉은 바위산에 새겨 건설했다</p>"
    var jordan_petra_infowindow = new google.maps.InfoWindow({ content: jordan_petra_content});
  
    jordan_petra_marker = new google.maps.Marker({
      position: jordan_petra,
      map: map,
      label: "페트라",
      title: jordan_petra_content
    });
  
    jordan_petra_marker.addListener('click', function() {
      jordan_petra_infowindow.open(map, jordan_petra_marker);
      if(jordan_petra_marker.getAnimation()==null){
        jordan_petra_marker.setAnimation(google.maps.Animation.BOUNCE);
      }
      else{
        jordan_petra_marker.setAnimation(null);
      }
    });
  
    jordan_petra_marker.addListener('mouseout', function() {
      jordan_petra_infowindow.close();
      if(jordan_petra_marker.getAnimation()!=null){
        jordan_petra_marker.setAnimation(null);
      }
      
    });
  
  
    egy_pyramid_content = "<h2>피라미드</h2><p>피라미드</p>"
    var egy_pyramid_infowindow = new google.maps.InfoWindow({ content: egy_pyramid_content});
  
    egy_pyramid_marker = new google.maps.Marker({
      position: egy_pyramid,
      map: map,
      label: "피라미드",
      title: egy_pyramid_content
    });
  
    egy_pyramid_marker.addListener('click', function() {
      egy_pyramid_infowindow.open(map, egy_pyramid_marker);
      if(egy_pyramid_marker.getAnimation()==null){
        egy_pyramid_marker.setAnimation(google.maps.Animation.BOUNCE);
      }
      else{
        egy_pyramid_marker.setAnimation(null);
      }
    });
  
    egy_pyramid_marker.addListener('mouseout', function() {
      egy_pyramid_infowindow.close();
      if(egy_pyramid_marker.getAnimation()!=null){
        egy_pyramid_marker.setAnimation(null);
      }
      
    });
  
    italy_venice_content = "<h2>베니스</h2><p>베네치아는 이탈리아 북부에 위치한 베네토주 베네치아 광역시에 속하는 도시로, 베네토 주의 수도이다.</p>"
    var italy_venice_infowindow = new google.maps.InfoWindow({ content: italy_venice_content});
  
    italy_venice_marker = new google.maps.Marker({
      position: italy_venice,
      map: map,
      label: "베니스",
      title: italy_venice_content
    });
  
    italy_venice_marker.addListener('click', function() {
      italy_venice_infowindow.open(map, italy_venice_marker);
      if(italy_venice_marker.getAnimation()==null){
        italy_venice_marker.setAnimation(google.maps.Animation.BOUNCE);
      }
      else{
        italy_venice_marker.setAnimation(null);
      }
    });
  
    italy_venice_marker.addListener('mouseout', function() {
      italy_venice_infowindow.close();
      if(italy_venice_marker.getAnimation()!=null){
        italy_venice_marker.setAnimation(null);
      }
      
    });
  
  
  
  
    maldives_content = "<h2>몰디브</h2><p>몰디브 공화국, 약칭 몰디브는 남아시아 인도양에 있는 섬나라로, 인도와 스리랑카 남서쪽에 자리한다.</p>"
    var maldives_infowindow = new google.maps.InfoWindow({ content: maldives_content});
  
    maldives_marker = new google.maps.Marker({
      position: maldives,
      map: map,
      label: "몰디브",
      title: maldives_content
    });
  
    maldives_marker.addListener('click', function() {
      maldives_infowindow.open(map, maldives_marker);
      if(maldives_marker.getAnimation()==null){
        maldives_marker.setAnimation(google.maps.Animation.BOUNCE);
      }
      else{
        maldives_marker.setAnimation(null);
      }
    });
  
    maldives_marker.addListener('mouseout', function() {
      maldives_infowindow.close();
      if(maldives_marker.getAnimation()!=null){
        maldives_marker.setAnimation(null);
      }
      
    });
  
  
    manli_long_castle_content = "<h2>만리장성</h2><p>중국 전역에 5,500마일 이상 구불구불하게 펼쳐진 탑과 보도로 고대 세계의 경이로움을 경험할 수 있습니다..</p>"
    var manli_long_castle_infowindow = new google.maps.InfoWindow({ content: manli_long_castle_content});
  
    manli_long_castle_marker = new google.maps.Marker({
      position: manli_long_castle,
      map: map,
      label: "만리장성",
      title: maldives_content
    });
  
    manli_long_castle_marker.addListener('click', function() {
      manli_long_castle_infowindow.open(map, manli_long_castle_marker);
      if(manli_long_castle_marker.getAnimation()==null){
        manli_long_castle_marker.setAnimation(google.maps.Animation.BOUNCE);
      }
      else{
        manli_long_castle_marker.setAnimation(null);
      }
    });
  
    manli_long_castle_marker.addListener('mouseout', function() {
      manli_long_castle_infowindow.close();
      if(manli_long_castle_marker.getAnimation()!=null){
        manli_long_castle_marker.setAnimation(null);
      }
      
    });
  
  
  
    victoria_falls_content = "<h2>빅토리아폭포</h2><p>거대한 크기로 유명한 폭포로 방문객이 수영을 즐길 수 있는 천연 웅덩이가 있습니다..</p>"
    var victoria_falls_infowindow = new google.maps.InfoWindow({ content: victoria_falls_content});
  
    victoria_falls_marker = new google.maps.Marker({
      position: victoria_falls,
      map: map,
      label: "빅토리아폭포",
      title: victoria_falls_content
    });
  
    victoria_falls_marker.addListener('click', function() {
      victoria_falls_infowindow.open(map, victoria_falls_marker);
      if(victoria_falls_marker.getAnimation()==null){
        victoria_falls_marker.setAnimation(google.maps.Animation.BOUNCE);
      }
      else{
        victoria_falls_marker.setAnimation(null);
      }
    });
  
    victoria_falls_marker.addListener('mouseout', function() {
      victoria_falls_infowindow.close();
      if(victoria_falls_marker.getAnimation()!=null){
        victoria_falls_marker.setAnimation(null);
      }
      
    });
  
  
  
    hongkong_content = "<h2>홍콩</h2><p>중화인민공화국 홍콩 특별행정구 또는 줄여서 홍콩은 중화인민공화국 화난 주강 삼각주 동쪽에 위치한 특별행정구이다. </p>"
    var hongkong_infowindow = new google.maps.InfoWindow({ content: hongkong_content});
  
    hongkong_marker = new google.maps.Marker({
      position: hongkong,
      map: map,
      label: "홍콩",
      title: hongkong_content
    });
  
    hongkong_marker.addListener('click', function() {
      hongkong_infowindow.open(map, hongkong_marker);
      if(hongkong_marker.getAnimation()==null){
        hongkong_marker.setAnimation(google.maps.Animation.BOUNCE);
      }
      else{
        hongkong_marker.setAnimation(null);
      }
    });
  
    hongkong_marker.addListener('mouseout', function() {
      hongkong_infowindow.close();
      if(hongkong_marker.getAnimation()!=null){
        hongkong_marker.setAnimation(null);
      }
      
    });
  
  
    yosemite_national_park_content = "<h2>요세미티국립공원</h2><p>상징적인 국립공원으로 삼나무 사이를 거니는 하이킹과 강 래프팅 같은 다양한 액티비티를 즐길 수 있습니다. </p>"
    var yosemite_national_park_infowindow = new google.maps.InfoWindow({ content: yosemite_national_park_content});
  
    yosemite_national_park_marker = new google.maps.Marker({
      position: yosemite_national_park,
      map: map,
      label: "요세미티국립공원",
      title: yosemite_national_park_content
    });
  
    yosemite_national_park_marker.addListener('click', function() {
      yosemite_national_park_infowindow.open(map, yosemite_national_park_marker);
      if(yosemite_national_park_marker.getAnimation()==null){
        yosemite_national_park_marker.setAnimation(google.maps.Animation.BOUNCE);
      }
      else{
        yosemite_national_park_marker.setAnimation(null);
      }
    });
  
    yosemite_national_park_marker.addListener('mouseout', function() {
      yosemite_national_park_infowindow.close();
      if(yosemite_national_park_marker.getAnimation()!=null){
        yosemite_national_park_marker.setAnimation(null);
      }
      
    });
  
  
    hawaii_content = "<h2>하와이</h2><p>하와이주는 태평양의 하와이 제도에 위치하고 있다. 본래는 폴리네시아 민족의 땅으로 여왕이 다스린 왕국이었다.</p>"
    var hawaii_infowindow = new google.maps.InfoWindow({ content: hawaii_content});
  
    hawaii_marker = new google.maps.Marker({
      position: hawaii,
      map: map,
      label: "하와이",
      title: hawaii_content
    });
  
    hawaii_marker.addListener('click', function() {
      hawaii_infowindow.open(map, hawaii_marker);
      if(hawaii_marker.getAnimation()==null){
        hawaii_marker.setAnimation(google.maps.Animation.BOUNCE);
      }
      else{
        hawaii_marker.setAnimation(null);
      }
    });
  
    hawaii_marker.addListener('mouseout', function() {
      hawaii_infowindow.close();
      if(hawaii_marker.getAnimation()!=null){
        hawaii_marker.setAnimation(null);
      }
      
    });
  
  
    nzd_north_island_content = "<h2>뉴질랜드 북섬</h2><p>북쪽 섬.</p>"
    var nzd_north_island_infowindow = new google.maps.InfoWindow({ content: nzd_north_island_content});
  
    nzd_north_island_marker = new google.maps.Marker({
      position: nzd_north_island,
      map: map,
      label: "뉴질랜드 북섬",
      title: nzd_north_island_content
    });
  
    nzd_north_island_marker.addListener('click', function() {
      nzd_north_island_infowindow.open(map, nzd_north_island_marker);
      if(nzd_north_island_marker.getAnimation()==null){
        nzd_north_island_marker.setAnimation(google.maps.Animation.BOUNCE);
      }
      else{
        nzd_north_island_marker.setAnimation(null);
      }
    });
  
    nzd_north_island_marker.addListener('mouseout', function() {
      nzd_north_island_infowindow.close();
      if(nzd_north_island_marker.getAnimation()!=null){
        nzd_north_island_marker.setAnimation(null);
      }
      
    });
  
  
    iguassu_falls_content = "<h2>이과수 폭포</h2><p>산책로, 야생동물, 정글을 통과하는 기차로 둘러싸인 방대한 그림 같은 폭포입니다..</p>"
    var iguassu_falls_infowindow = new google.maps.InfoWindow({ content: iguassu_falls_content});
  
    iguassu_falls_marker = new google.maps.Marker({
      position: iguassu_falls,
      map: map,
      label: "이과수 폭포",
      title: iguassu_falls_content
    });
  
    iguassu_falls_marker.addListener('click', function() {
      iguassu_falls_infowindow.open(map, iguassu_falls_marker);
      if(iguassu_falls_marker.getAnimation()==null){
        iguassu_falls_marker.setAnimation(google.maps.Animation.BOUNCE);
      }
      else{
        iguassu_falls_marker.setAnimation(null);
      }
    });
  
    iguassu_falls_marker.addListener('mouseout', function() {
      iguassu_falls_infowindow.close();
      if(iguassu_falls_marker.getAnimation()!=null){
        iguassu_falls_marker.setAnimation(null);
      }
      
    });
  
    paris_content = "<h2>파리</h2><p>파리는 프랑스의 수도로, 프랑스 북부 일드프랑스 지방의 중앙에 있다. 센 강 중류에 있으며, 면적은 105 km². 인구는 2010년 기준으로 224만 명이다.</p>"
    var paris_infowindow = new google.maps.InfoWindow({ content: paris_content});
  
    paris_marker = new google.maps.Marker({
      position: paris,
      map: map,
      label: "파리",
      title: paris_content
    });
  
    paris_marker.addListener('click', function() {
      paris_infowindow.open(map, paris_marker);
      if(paris_marker.getAnimation()==null){
        paris_marker.setAnimation(google.maps.Animation.BOUNCE);
      }
      else{
        paris_marker.setAnimation(null);
      }
    });
  
    paris_marker.addListener('mouseout', function() {
      paris_infowindow.close();
      if(paris_marker.getAnimation()!=null){
        paris_marker.setAnimation(null);
      }
      
    });
  
  
  
    alaska_content = "<h2>알래스카</h2><p>알래스카주 주다. 알래스카의 어원은 알류트족의 Alyeshka, 섬이 아닌 땅이다. 면적은 171만 8,000km² 로서 미국의 단일 주 중에서 가장 크다. 원주민은 전체인구의 7분의 1에 불과하다.</p>"
    var alaska_infowindow = new google.maps.InfoWindow({ content: alaska_content});
  
    alaska_marker = new google.maps.Marker({
      position: alaska,
      map: map,
      label: "알래스카",
      title: paris_content
    });
  
    alaska_marker.addListener('click', function() {
      alaska_infowindow.open(map, alaska_marker);
      if(alaska_marker.getAnimation()==null){
        alaska_marker.setAnimation(google.maps.Animation.BOUNCE);
      }
      else{
        alaska_marker.setAnimation(null);
      }
    });
  
    alaska_marker.addListener('mouseout', function() {
      alaska_infowindow.close();
      if(alaska_marker.getAnimation()!=null){
        alaska_marker.setAnimation(null);
      }
      
    });
  
  
    
  
  
  
  
    angkor_wat_content = "<h2>앙코르와트</h2><p>이 상징적인 거대한 사원 단지는 넓은 해자로 둘러싸여 있으며 정교한 조각품이 있습니다.</p>"
    var angkor_wat_infowindow = new google.maps.InfoWindow({ content: angkor_wat_content});
  
    angkor_wat_marker = new google.maps.Marker({
      position: angkor_wat,
      map: map,
      label: "앙코르와트",
      title: angkor_wat_content
    });
  
    angkor_wat_marker.addListener('click', function() {
      angkor_wat_infowindow.open(map, angkor_wat_marker);
      if(angkor_wat_marker.getAnimation()==null){
        angkor_wat_marker.setAnimation(google.maps.Animation.BOUNCE);
      }
      else{
        angkor_wat_marker.setAnimation(null);
      }
    });
  
    angkor_wat_marker.addListener('mouseout', function() {
      angkor_wat_infowindow.close();
      if(angkor_wat_marker.getAnimation()!=null){
        angkor_wat_marker.setAnimation(null);
      }
      
    });
  
  
  
    everest_content = "<h2>에베레스트</h2><p>수많은 전문 산악인이 모여드는 세계에서 가장 높은 산으로 제일 높은 봉우리가 약 8,848m에 달합니다.</p>"
    var everest_infowindow = new google.maps.InfoWindow({ content: everest_content});
  
    everest_marker = new google.maps.Marker({
      position: everest,
      map: map,
      label: "에베레스트",
      title: everest_content
    });
  
    everest_marker.addListener('click', function() {
      everest_infowindow.open(map, everest_marker);
      if(everest_marker.getAnimation()==null){
        everest_marker.setAnimation(google.maps.Animation.BOUNCE);
      }
      else{
        everest_marker.setAnimation(null);
      }
    });
  
    everest_marker.addListener('mouseout', function() {
      everest_infowindow.close();
      if(everest_marker.getAnimation()!=null){
        everest_marker.setAnimation(null);
      }
      
    });
  
  
  
    rio_content = "<h2>리우</h2><p>리우데자네이루는 브라질 남동부 대서양 연안에 자리한 도시로 리우데자네이루주의 주도이다. 줄여서 리우라고도 불린다.</p>"
    var rio_infowindow = new google.maps.InfoWindow({ content: rio_content});
  
    rio_marker = new google.maps.Marker({
      position: rio,
      map: map,
      label: "리우",
      title: rio_content
    });
  
    rio_marker.addListener('click', function() {
      rio_infowindow.open(map, rio_marker);
      if(rio_marker.getAnimation()==null){
        rio_marker.setAnimation(google.maps.Animation.BOUNCE);
      }
      else{
        rio_marker.setAnimation(null);
      }
    });
  
    rio_marker.addListener('mouseout', function() {
      rio_infowindow.close();
      if(rio_marker.getAnimation()!=null){
        rio_marker.setAnimation(null);
      }
      
    });
  
  
    masai_content = "<h2>마사이마라</h2><p>케냐 남서부 리프트밸리주(Rift Valley Province)에 있는 국립보호구. 약자로 MMNR이다. 면적은 1,510㎢이다.</p>"
    var masai_infowindow = new google.maps.InfoWindow({ content: masai_content});
  
    masai_marker = new google.maps.Marker({
      position: masai,
      map: map,
      label: "마사이마라",
      title: masai_content
    });
  
    masai_marker.addListener('click', function() {
      masai_infowindow.open(map, masai_marker);
      if(masai_marker.getAnimation()==null){
        masai_marker.setAnimation(google.maps.Animation.BOUNCE);
      }
      else{
        masai_marker.setAnimation(null);
      }
    });
  
    masai_marker.addListener('mouseout', function() {
      masai_infowindow.close();
      if(masai_marker.getAnimation()!=null){
        masai_marker.setAnimation(null);
      }
      
    });
  
  
    galapagos_content = "<h2>갈라파고스</h2><p>남아메리카 동태평양에 있는 에콰도르령 제도로서 살아 있는 자연사 박물관이라 불리는 19개의 섬으로 이루어져 있다.</p>"
    var galapagos_infowindow = new google.maps.InfoWindow({ content: galapagos_content});
  
    galapagos_marker = new google.maps.Marker({
      position: galapagos,
      map: map,
      label: "갈라파고스",
      title: galapagos_content
    });
  
    galapagos_marker.addListener('click', function() {
      galapagos_infowindow.open(map, galapagos_marker);
      if(galapagos_marker.getAnimation()==null){
        galapagos_marker.setAnimation(google.maps.Animation.BOUNCE);
      }
      else{
        galapagos_marker.setAnimation(null);
      }
    });
  
    galapagos_marker.addListener('mouseout', function() {
      galapagos_infowindow.close();
      if(galapagos_marker.getAnimation()!=null){
        galapagos_marker.setAnimation(null);
      }
      
    });
  
  
  
    luxor_content = "<h2>룩소르</h2><p>룩소르는 이집트의 남부에 있는 도시이다. 고대 이집트 시대부터 존재해 왔으며 인구는 376,022명이고, 도시의 면적은 416km²이다.</p>"
    var luxor_infowindow = new google.maps.InfoWindow({ content: luxor_content});
  
    luxor_marker = new google.maps.Marker({
      position: luxor,
      map: map,
      label: "룩소르",
      title: luxor_content
    });
  
    luxor_marker.addListener('click', function() {
      luxor_infowindow.open(map, luxor_marker);
      if(luxor_marker.getAnimation()==null){
        luxor_marker.setAnimation(google.maps.Animation.BOUNCE);
      }
      else{
        luxor_marker.setAnimation(null);
      }
    });
  
    luxor_marker.addListener('mouseout', function() {
      luxor_infowindow.close();
      if(luxor_marker.getAnimation()!=null){
        luxor_marker.setAnimation(null);
      }
      
    });
  
  
  
    rome_content = "<h2>로마</h2><p>로마는 이탈리아의 수도이자 최대 도시로, 라치오주의 주도이며, 테베레 강 연안에 있다</p>"
    var rome_infowindow = new google.maps.InfoWindow({ content: rome_content});
  
    rome_marker = new google.maps.Marker({
      position: rome,
      map: map,
      label: "로마",
      title: rome_content
    });
  
    rome_marker.addListener('click', function() {
      rome_infowindow.open(map, rome_marker);
      if(rome_marker.getAnimation()==null){
        rome_marker.setAnimation(google.maps.Animation.BOUNCE);
      }
      else{
        rome_marker.setAnimation(null);
      }
    });
  
    rome_marker.addListener('mouseout', function() {
      rome_infowindow.close();
      if(rome_marker.getAnimation()!=null){
        rome_marker.setAnimation(null);
      }
      
    });
  
  
  
    sanfran_content = "<h2>샌프란시스코</h2><p>샌프란시스코는 미국 캘리포니아주에 위치한 도시로, 북부 캘리포니아의 문화, 경제, 상업 거점 역할을 하고 있다. 공식적인 명칭은 시티 앤 카운티 오브 샌프란시스코이다.</p>"
    var sanfran_infowindow = new google.maps.InfoWindow({ content: sanfran_content});
  
    sanfran_marker = new google.maps.Marker({
      position: sanfran,
      map: map,
      label: "샌프란시스코",
      title: sanfran_content
    });
  
    sanfran_marker.addListener('click', function() {
      sanfran_infowindow.open(map, sanfran_marker);
      if(sanfran_marker.getAnimation()==null){
        sanfran_marker.setAnimation(google.maps.Animation.BOUNCE);
      }
      else{
        sanfran_marker.setAnimation(null);
      }
    });
  
    sanfran_marker.addListener('mouseout', function() {
      sanfran_infowindow.close();
      if(sanfran_marker.getAnimation()!=null){
        sanfran_marker.setAnimation(null);
      }
      
    });
  
  
  
    barcel_content = "<h2>바르셀로나</h2><p>바르셀로나는 스페인에서 두 번째로 큰 도시로, 스페인 동부 지중해 연안 지역부터 프랑스 남쪽 피레네 산맥과 접경지역을 아우르는 카탈루냐 지방의 중심 도시이다. 인구는 1,620,343명이고 면적은 101.3 km²이다.</p>"
    var barcel_infowindow = new google.maps.InfoWindow({ content: barcel_content});
  
    barcel_marker = new google.maps.Marker({
      position: barcel,
      map: map,
      label: "바르셀로나",
      title: barcel_content
    });
  
    barcel_marker.addListener('click', function() {
      barcel_infowindow.open(map, barcel_marker);
      if(barcel_marker.getAnimation()==null){
        barcel_marker.setAnimation(google.maps.Animation.BOUNCE);
      }
      else{
        barcel_marker.setAnimation(null);
      }
    });
  
    barcel_marker.addListener('mouseout', function() {
      barcel_infowindow.close();
      if(barcel_marker.getAnimation()!=null){
        barcel_marker.setAnimation(null);
      }
      
    });
  
  
  
    barcel_content = "<h2>바르셀로나</h2><p>바르셀로나는 스페인에서 두 번째로 큰 도시로, 스페인 동부 지중해 연안 지역부터 프랑스 남쪽 피레네 산맥과 접경지역을 아우르는 카탈루냐 지방의 중심 도시이다. 인구는 1,620,343명이고 면적은 101.3 km²이다.</p>"
    var barcel_infowindow = new google.maps.InfoWindow({ content: barcel_content});
  
    barcel_marker = new google.maps.Marker({
      position: barcel,
      map: map,
      label: "바르셀로나",
      title: barcel_content
    });
  
    barcel_marker.addListener('click', function() {
      barcel_infowindow.open(map, barcel_marker);
      if(barcel_marker.getAnimation()==null){
        barcel_marker.setAnimation(google.maps.Animation.BOUNCE);
      }
      else{
        barcel_marker.setAnimation(null);
      }
    });
  
    barcel_marker.addListener('mouseout', function() {
      barcel_infowindow.close();
      if(barcel_marker.getAnimation()!=null){
        barcel_marker.setAnimation(null);
      }
      
    });
  
  
  
    dubai_content = "<h2>두바이</h2><p>두바이는 페르시아 만 남동쪽 해안에 위치한 아랍에미리트의 최대 도시이다. 아랍에미리트를 구성하는 7개의 토후국 가운데 하나인 두바이 토후국의 수도이다.</p>"
    var dubai_infowindow = new google.maps.InfoWindow({ content: dubai_content});
  
    dubai_marker = new google.maps.Marker({
      position: dubai,
      map: map,
      label: "두바이",
      title: dubai_content
    });
  
    dubai_marker.addListener('click', function() {
      dubai_infowindow.open(map, dubai_marker);
      if(dubai_marker.getAnimation()==null){
        dubai_marker.setAnimation(google.maps.Animation.BOUNCE);
      }
      else{
        dubai_marker.setAnimation(null);
      }
    });
  
    dubai_marker.addListener('mouseout', function() {
      dubai_infowindow.close();
      if(dubai_marker.getAnimation()!=null){
        dubai_marker.setAnimation(null);
      }
      
    });
  
  
    singapore_content = "<h2>싱가폴</h2><p>싱가포르 공화국, 줄여서 싱가포르은 동남아시아, 말레이 반도의 끝에 위치한 섬나라이자 항구 도시로 이루어진 도시 국가이다.</p>"
    var singapore_infowindow = new google.maps.InfoWindow({ content: singapore_content});
  
    singapore_marker = new google.maps.Marker({
      position: singapore,
      map: map,
      label: "싱가폴",
      title: singapore_content
    });
  
    singapore_marker.addListener('click', function() {
      singapore_infowindow.open(map, singapore_marker);
      if(singapore_marker.getAnimation()==null){
        singapore_marker.setAnimation(google.maps.Animation.BOUNCE);
      }
      else{
        singapore_marker.setAnimation(null);
      }
    });
  
    singapore_marker.addListener('mouseout', function() {
      singapore_infowindow.close();
      if(singapore_marker.getAnimation()!=null){
        singapore_marker.setAnimation(null);
      }
      
    });
  
  
    la_digue_island_content = "<h2>세이셀 공화국 라디게섬</h2><p>세이셸 공화국은 아프리카 동부, 인도양에 위치하여 있는 섬 나라이다. 아프리카 대륙에서 약 1,600 km 떨어져 있다. 수도는 빅토리아이다.</p>"
    var la_digue_island_infowindow = new google.maps.InfoWindow({ content: la_digue_island_content});
  
    la_digue_island_marker = new google.maps.Marker({
      position: la_digue_island,
      map: map,
      label: "세이셀 공화국 라디게섬",
      title: la_digue_island_content
    });
  
    la_digue_island_marker.addListener('click', function() {
      la_digue_island_infowindow.open(map, la_digue_island_marker);
      if(la_digue_island_marker.getAnimation()==null){
        la_digue_island_marker.setAnimation(google.maps.Animation.BOUNCE);
      }
      else{
        la_digue_island_marker.setAnimation(null);
      }
    });
  
    la_digue_island_marker.addListener('mouseout', function() {
      la_digue_island_infowindow.close();
      if(la_digue_island_marker.getAnimation()!=null){
        la_digue_island_marker.setAnimation(null);
      }
      
    });
  
  
  
    sri_lanka_content = "<h2>스리랑카</h2><p>스리랑카 민주사회주의공화국, 약칭 스리랑카는 남아시아에 있는 섬나라이며 법률상의 수도는 스리자야와르데네푸라코테이고, 제일 큰 도시는 콜롬보이다.</p>"
    var sri_lanka_infowindow = new google.maps.InfoWindow({ content: sri_lanka_content});
  
    sri_lanka_marker = new google.maps.Marker({
      position: sri_lanka,
      map: map,
      label: "스리랑카",
      title: sri_lanka_content
    });
  
    sri_lanka_marker.addListener('click', function() {
      sri_lanka_infowindow.open(map, sri_lanka_marker);
      if(sri_lanka_marker.getAnimation()==null){
        sri_lanka_marker.setAnimation(google.maps.Animation.BOUNCE);
      }
      else{
        sri_lanka_marker.setAnimation(null);
      }
    });
  
    sri_lanka_marker.addListener('mouseout', function() {
      sri_lanka_infowindow.close();
      if(sri_lanka_marker.getAnimation()!=null){
        sri_lanka_marker.setAnimation(null);
      }
      
    });
  
  
    bangkok_content = "<h2>방콕</h2><p>방콕 정식 명칭 끄룽텝 마하나콘, 말하기 끄룽텝은 태국의 수도이자 가장 큰 도시이다. 타이 만으로 흘러드는 짜오프라야 강 동쪽, 북위 13°45′, 동경 100°31′에 자리 잡고 있다. 태국의 정치, 경제, 문화의 중심지로, 1782년 라마 1세가 이곳을 세운 이래 수도였다.</p>"
    var bangkok_infowindow = new google.maps.InfoWindow({ content: bangkok_content});
  
    bangkok_marker = new google.maps.Marker({
      position: bangkok,
      map: map,
      label: "방콕",
      title: bangkok_content
    });
  
    bangkok_marker.addListener('click', function() {
      bangkok_infowindow.open(map, bangkok_marker);
      if(bangkok_marker.getAnimation()==null){
        bangkok_marker.setAnimation(google.maps.Animation.BOUNCE);
      }
      else{
        bangkok_marker.setAnimation(null);
      }
    });
  
    bangkok_marker.addListener('mouseout', function() {
      bangkok_infowindow.close();
      if(bangkok_marker.getAnimation()!=null){
        bangkok_marker.setAnimation(null);
      }
      
    });
  
  
  
    barbados_content = "<h2>서인도제도 바베이도스</h2><p>바베이도스는 카리브 해에 있는 섬나라이다.</p>"
    var barbados_infowindow = new google.maps.InfoWindow({ content: barbados_content});
  
    barbados_marker = new google.maps.Marker({
      position: barbados,
      map: map,
      label: "서인도제도 바베이도스",
      title: barbados_content
    });
  
    barbados_marker.addListener('click', function() {
      barbados_infowindow.open(map, barbados_marker);
      if(barbados_marker.getAnimation()==null){
        barbados_marker.setAnimation(google.maps.Animation.BOUNCE);
      }
      else{
        barbados_marker.setAnimation(null);
      }
    });
  
    barbados_marker.addListener('mouseout', function() {
      barbados_infowindow.close();
      if(barbados_marker.getAnimation()!=null){
        barbados_marker.setAnimation(null);
      }
      
    });
  
  
  
    iceland_content = "<h2>아이슬란드</h2><p>아이슬란드 공화국 줄여서 아이슬란드는 북유럽에 위치한 섬나라이다. 그린란드의 남동쪽, 영국과 덴마크의 자치령인 페로 제도의 북서쪽에 위치하고 있으며, 수도는 레이캬비크이다.</p>"
    var iceland_infowindow = new google.maps.InfoWindow({ content: iceland_content});
  
    iceland_marker = new google.maps.Marker({
      position: iceland,
      map: map,
      label: "아이슬란드",
      title: iceland_content
    });
  
    iceland_marker.addListener('click', function() {
      iceland_infowindow.open(map, iceland_marker);
      if(iceland_marker.getAnimation()==null){
        iceland_marker.setAnimation(google.maps.Animation.BOUNCE);
      }
      else{
        iceland_marker.setAnimation(null);
      }
    });
  
    iceland_marker.addListener('mouseout', function() {
      iceland_infowindow.close();
      if(iceland_marker.getAnimation()!=null){
        iceland_marker.setAnimation(null);
      }
      
    });
  
  
  
  
    chinese_king_content = "<h2>중국 서안의 진시황 병마용</h2><p>약 기원전 3세기에 지어졌으며 살아있는 듯한 테라코타 병사 조각상으로 유명한 명소입니다.</p>"
    var chinese_king_infowindow = new google.maps.InfoWindow({ content: chinese_king_content});
  
    chinese_king_marker = new google.maps.Marker({
      position: chinese_king,
      map: map,
      label: "중국 서안의 진시황 병마용",
      title: chinese_king_content
    });
  
    chinese_king_marker.addListener('click', function() {
      chinese_king_infowindow.open(map, chinese_king_marker);
      if(chinese_king_marker.getAnimation()==null){
        chinese_king_marker.setAnimation(google.maps.Animation.BOUNCE);
      }
      else{
        chinese_king_marker.setAnimation(null);
      }
    });
  
    chinese_king_marker.addListener('mouseout', function() {
      chinese_king_infowindow.close();
      if(chinese_king_marker.getAnimation()!=null){
        chinese_king_marker.setAnimation(null);
      }
      
    });
  
  
    alps_content = "<h2>알프스</h2><p>독특한 피라미드 모양의 유명한 고산 봉우리에는 정상으로 가는 도전적인 등반 루트가 마련되어 있습니다.</p>"
    var alps_infowindow = new google.maps.InfoWindow({ content: alps_content});
  
    alps_marker = new google.maps.Marker({
      position: alps,
      map: map,
      label: "알프스",
      title: alps_content
    });
  
    alps_marker.addListener('click', function() {
      alps_infowindow.open(map, alps_marker);
      if(alps_marker.getAnimation()==null){
        alps_marker.setAnimation(google.maps.Animation.BOUNCE);
      }
      else{
        alps_marker.setAnimation(null);
      }
    });
  
    alps_marker.addListener('mouseout', function() {
      alps_infowindow.close();
      if(alps_marker.getAnimation()!=null){
        alps_marker.setAnimation(null);
      }
      
    });
  
  
    angel_falls_content = "<h2>베네수엘라의 엔젤폭포</h2><p>979m 높이의 이 유명하고 경치 좋은 장소는 세계에서 가장 높은 자유 낙하 폭포입니다.</p>"
    var angel_falls_infowindow = new google.maps.InfoWindow({ content: angel_falls_content});
  
    angel_falls_marker = new google.maps.Marker({
      position: angel_falls,
      map: map,
      label: "알베네수엘라의 엔젤폭포",
      title: angel_falls_content
    });
  
    angel_falls_marker.addListener('click', function() {
      angel_falls_infowindow.open(map, angel_falls_marker);
      if(angel_falls_marker.getAnimation()==null){
        angel_falls_marker.setAnimation(google.maps.Animation.BOUNCE);
      }
      else{
        angel_falls_marker.setAnimation(null);
      }
    });
  
    angel_falls_marker.addListener('mouseout', function() {
      angel_falls_infowindow.close();
      if(angel_falls_marker.getAnimation()!=null){
        angel_falls_marker.setAnimation(null);
      }
      
    });
  
  
  
    abu_simbel_content = "<h2>이집트의 아부심벨 신전</h2><p>람세스 2세를 기리는 3천년 된 건축물로 아스완댐 건설 당시 재건축된 사원 두 개 중 하나입니다.</p>"
    var abu_simbel_infowindow = new google.maps.InfoWindow({ content: abu_simbel_content});
  
    abu_simbel_marker = new google.maps.Marker({
      position: abu_simbel,
      map: map,
      label: "이집트의 아부심벨 신전",
      title: abu_simbel_content
    });
  
    abu_simbel_marker.addListener('click', function() {
      abu_simbel_infowindow.open(map, abu_simbel_marker);
      if(abu_simbel_marker.getAnimation()==null){
        abu_simbel_marker.setAnimation(google.maps.Animation.BOUNCE);
      }
      else{
        abu_simbel_marker.setAnimation(null);
      }
    });
  
    abu_simbel_marker.addListener('mouseout', function() {
      abu_simbel_infowindow.close();
      if(abu_simbel_marker.getAnimation()!=null){
        abu_simbel_marker.setAnimation(null);
      }
      
    });
  
  
  
    bali_content = "<h2>인도네시아 발리</h2><p>휴양 마을, 종교적 명소, 숲이 우거진 화산이 있는 인도네시아 섬입니다.</p>"
    var bali_infowindow = new google.maps.InfoWindow({ content: bali_content});
  
    bali_marker = new google.maps.Marker({
      position: bali,
      map: map,
      label: "인도네시아 발리",
      title: bali_content
    });
  
    bali_marker.addListener('click', function() {
      bali_infowindow.open(map, bali_marker);
      if(bali_marker.getAnimation()==null){
        bali_marker.setAnimation(google.maps.Animation.BOUNCE);
      }
      else{
        bali_marker.setAnimation(null);
      }
    });
  
    bali_marker.addListener('mouseout', function() {
      bali_infowindow.close();
      if(bali_marker.getAnimation()!=null){
        bali_marker.setAnimation(null);
      }
      
    });
  
  
  
    bora_content = "<h2>타히티와 보라보라섬 </h2><p>이 군도는 유명한 국제 관광지로 석호와 보초가 있습니다.</p>"
    var bora_infowindow = new google.maps.InfoWindow({ content: bora_content});
  
    bora_marker = new google.maps.Marker({
      position: bora,
      map: map,
      label: "타히티와 보라보라섬 ",
      title: bora_content
    });
  
    bora_marker.addListener('click', function() {
      bora_infowindow.open(map, bora_marker);
      if(bora_marker.getAnimation()==null){
        bora_marker.setAnimation(google.maps.Animation.BOUNCE);
      }
      else{
        bora_marker.setAnimation(null);
      }
    });
  
    bora_marker.addListener('mouseout', function() {
      bora_infowindow.close();
      if(bora_marker.getAnimation()!=null){
        bora_marker.setAnimation(null);
      }
      
    });
  
    var markers = [usa_liberty_marker, usa_grandCanyon_marker,aus_grapeBarrierReef_marker,usa_disneyland_marker,nzd_south_island_marker,rsa_cape_town_marker,ind_golden_temple_marker,usa_las_vegas_marker,
      aus_opera_house_marker,usa_newyork_marker,ind_Taj_Mahal_marker,cad_lake_louise_marker, max_chichen_marker,
      per_machu_marker
      ,cad_niagra_marker
      ,jordan_petra_marker
      ,egy_pyramid_marker
      ,italy_venice_marker
      ];
    
  
    var markerCluster = new MarkerClusterer(map, markers,
      {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
  
  }