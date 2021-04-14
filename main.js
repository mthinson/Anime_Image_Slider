//variables for slider
var i = 0;
var images = [];
var time = 1000;

//array that holds image list
images[0] = 'https://wallpapercave.com/wp/wp3867557.jpg';
images[1] = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2a2ada8d-131b-4ff0-adae-b28c3e2a584f/db4wx9i-1d25a942-488c-4011-8a4d-e3bc6b1a7182.png/v1/fill/w_1024,h_576,q_80,strp/trio_survey_corps__aot__minimalist_wallpaper_by_slezzy7_db4wx9i-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01NzYiLCJwYXRoIjoiXC9mXC8yYTJhZGE4ZC0xMzFiLTRmZjAtYWRhZS1iMjhjM2UyYTU4NGZcL2RiNHd4OWktMWQyNWE5NDItNDg4Yy00MDExLThhNGQtZTNiYzZiMWE3MTgyLnBuZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.285zAPkFnj6Sw9SZ_UXj4hD26b4IM94O_W3ea_6AQZA';
images[2] = 'https://wallpapercave.com/wp/wp4592966.png';

images[3] ='https://wallpapercave.com/wp/wp8154085.jpg' ;
images[4] = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/616e0a77-2a7e-4b2a-b427-536b2822ff02/db2mw4q-a72b0820-139b-48a6-9a0c-a434d2902902.png/v1/fill/w_1024,h_575,q_80,strp/minimalistic_night_raid_by_huskydogg_db2mw4q-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01NzUiLCJwYXRoIjoiXC9mXC82MTZlMGE3Ny0yYTdlLTRiMmEtYjQyNy01MzZiMjgyMmZmMDJcL2RiMm13NHEtYTcyYjA4MjAtMTM5Yi00OGE2LTlhMGMtYTQzNGQyOTAyOTAyLnBuZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.KN72_yOYX6mAncuPtE807fbKPZr31dyFdNvkqdVt8ts';
images[5] = 'https://wallpapercave.com/wp/wp8006897.jpg';
images[6] = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6000ca11-0422-48c9-9254-65f6ba392a7c/db2z784-456ba382-1c55-4f18-815d-d015ea9f64a2.png/v1/fill/w_1192,h_670,q_70,strp/natsu_dragneel__fairy_tail__minimal_wallpaper_by_max028_db2z784-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD00NTAwIiwicGF0aCI6IlwvZlwvNjAwMGNhMTEtMDQyMi00OGM5LTkyNTQtNjVmNmJhMzkyYTdjXC9kYjJ6Nzg0LTQ1NmJhMzgyLTFjNTUtNGYxOC04MTVkLWQwMTVlYTlmNjRhMi5wbmciLCJ3aWR0aCI6Ijw9ODAwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.28o8BUO03K0_ld2BnWS0lzZFQyeqR0KrwECvaueItfU';
images[7] =  'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/13611851-c6bd-4a74-9b5b-a519a5d9c4b1/dc8il2x-050f23e5-f4a9-4af7-bac8-6f07928859ff.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMTM2MTE4NTEtYzZiZC00YTc0LTliNWItYTUxOWE1ZDljNGIxXC9kYzhpbDJ4LTA1MGYyM2U1LWY0YTktNGFmNy1iYWM4LTZmMDc5Mjg4NTlmZi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.z7s2knZ036GP9uUnMH4tA13VTUSemsfUr9UsGdj1-ac';
images[8] = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6000ca11-0422-48c9-9254-65f6ba392a7c/db1ewxv-fcbf1bd0-f91e-44df-89c7-1710ef93e46b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNjAwMGNhMTEtMDQyMi00OGM5LTkyNTQtNjVmNmJhMzkyYTdjXC9kYjFld3h2LWZjYmYxYmQwLWY5MWUtNDRkZi04OWM3LTE3MTBlZjkzZTQ2Yi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.K5VI3RiLY0fZ3xa46L9NgsVS2flswiNdQTzJWC3p3V0';
images[9] = 'https://wallpapercave.com/wp/wp5525971.jpg';
images[10] = 'https://wallpapercave.com/wp/wp6611777.png';
//if statement to check for length
function changeImg(){
  document.slide.src = images[i];
  
if(i < images.length - 1){
  i++
}else{
  i = 0;
}

setTimeout("changeImg()", time);
}
window.onload=changeImg;

