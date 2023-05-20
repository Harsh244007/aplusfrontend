var a={
     "showcaseid": 8,
     "pro_name": "AP-112",
     "catid": "2",
     "pro_image": "showcaseproduct2019-05-2842739386.jpg",
     "description": "",
     "pro_desc": "a:9:{i:0;a:2:{s:7:\"heading\";s:12:\"Power Rating\";s:11:\"description\";s:9:\"100W/300W\";}i:1;a:2:{s:7:\"heading\";s:16:\"Recommended Amp.\";s:11:\"description\";s:20:\"200W-300W into 8 Ohm\";}i:2;a:2:{s:7:\"heading\";s:18:\"Frequency Response\";s:11:\"description\";s:10:\"50Hz-15KHz\";}i:3;a:2:{s:7:\"heading\";s:11:\"Sensitivity\";s:11:\"description\";s:19:\"101 dB SPL (1w/1 m)\";}i:4;a:2:{s:7:\"heading\";s:17:\"Nominal Impedance\";s:11:\"description\";s:5:\"8 Ohm\";}i:5;a:2:{s:7:\"heading\";s:18:\"Dimensions (HXWXD)\";s:11:\"description\";s:13:\"558x407x330mm\";}i:6;a:2:{s:7:\"heading\";s:16:\"Input Connectors\";s:11:\"description\";s:47:\"Army Post Terminal x 1 1/4in Jack x 1; Parallel\";}i:7;a:2:{s:7:\"heading\";s:9:\"LF Driver\";s:11:\"description\";s:6:\"12-XHF\";}i:8;a:2:{s:7:\"heading\";s:9:\"HF Driver\";s:11:\"description\";s:13:\"Piezo Tweeter\";}}",
     "status": "1",
     "reg_date": "2019-05-27T22:16:06.000Z",
     "update_time": "2019-05-27T22:21:40.000Z"
   }
    // const newObje=((a.pro_desc.replace(/s:(\d+):"(.*?)";/g, '"$2"')))
    // const regex=/a:\d+:{(.*?)};/g
// const regex=/s:(\d+):"(.*?)";/g
// let matches=[...a.pro_desc.matchAll(regex)]
// const deserializedObjects = matches.map((match) => {
//   const array = match[2];
//   const deserializedObject = (`{${array}}`);
//   return deserializedObject;
// });
// console.log(deserializedObjects)

let a2 ="{heading}"
console.log(a2.replace(/{|}/g,""))