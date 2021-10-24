


const paramsObj = {
    'member[email]': 'solaimanppp00@gmail.com',
    "member[password]": "solaiman",
    "member[password_confirmation]": "solaiman",
    "member[page_key]": "xoy7nhsch7g0292f",
    "member[page_id]": "33523349"
    
    
    };
    const searchParams = new URLSearchParams(paramsObj);
    
    const fetchData = searchParams.toString()
  
  
  fetch("https://www.english21days.co.il/members", {
    "headers": {
      "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
      "accept-language": "en",
      "cache-control": "max-age=0",
      "content-type": "application/x-www-form-urlencoded",
      "sec-ch-ua": "\"Chromium\";v=\"94\", \"Google Chrome\";v=\"94\", \";Not A Brand\";v=\"99\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"macOS\"",
      "sec-fetch-dest": "document",
      "sec-fetch-mode": "navigate",
      "sec-fetch-site": "same-origin",
      "sec-fetch-user": "?1",
      "upgrade-insecure-requests": "1"
    },
    "referrer": "https://www.english21days.co.il/login33523348?page_id=33523349&page_key=xoy7nhsch7g0292f&page_hash=42eccdbff95&login_redirect=1",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": fetchData,
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
  }).then(
  (res)=>{
    if(res.status == 200){
      const url = res.url
      if(url == 'https://www.english21days.co.il/course33523349'){
  console.log('emial sent')
          }else{
      console.log('dont sent email ')
  }
    }
  
  
  }
  ).catch((error)=>{
  console.log(error)
  });









// <script>  
// const url = window.location.search
// const params = new URLSearchParams(url)
// const name = params.get('name')
// const email = params.get('email')
// const tagUrl = 'https://clickfunnel-membership-area-api.vercel.app/add-basic-pro/' + name + '/' + email
// fetch(tagUrl,{
// headers :{
// 'Access-Control-Allow-Origin' : 'english21days.co.il'
// }
// }).then((response)=> response.json())
// .then((data)=>{
// document.querySelector("#myBar").style.width = '25%'
// var password = data.password
// const paramsObj = {
//     'member[email]': email,
//     "member[password]": password,
//     "member[password_confirmation]": password,
//     "member[page_key]": "xoy7nhsch7g0292f",
//     "member[page_id]": "33523349"
//     };
//   const searchParams = new URLSearchParams(paramsObj);
//     const fetchData = searchParams.toString()
//   fetch("https://www.english21days.co.il/members", {
//     "headers": {
//       "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
//       "accept-language": "en",
//       "cache-control": "max-age=0",
//       "content-type": "application/x-www-form-urlencoded",
//       "sec-ch-ua": "\"Chromium\";v=\"94\", \"Google Chrome\";v=\"94\", \";Not A Brand\";v=\"99\"",
//       "sec-ch-ua-mobile": "?0",
//       "sec-ch-ua-platform": "\"macOS\"",
//       "sec-fetch-dest": "document",
//       "sec-fetch-mode": "navigate",
//       "sec-fetch-site": "same-origin",
//       "sec-fetch-user": "?1",
//       "upgrade-insecure-requests": "1"
//     },
//     "referrer": "https://www.english21days.co.il/login33523348?page_id=33523349&page_key=xoy7nhsch7g0292f&page_hash=42eccdbff95&login_redirect=1",
//     "referrerPolicy": "strict-origin-when-cross-origin",
//     "body": fetchData,
//     "method": "POST",
//     "mode": "cors",
//     "credentials": "include"
//   }).then(
//   (res)=>{
//     if(res.status == 200){
// document.querySelector("#myBar").style.width = '50%'
//       const url = res.url
//       if(url == 'https://www.english21days.co.il/course33523349'){
// 		const emailUrl = 'https://clickfunnel-membership-area-api.vercel.app/send-success-email/' + name + '/' + email + '/' + password
// fetch(emailUrl,{
// headers :{
// 'Access-Control-Allow-Origin' : '*'
// }
// }).then((res)=> res.json())
// .then((result)=>{
// if(result.message == 'success'){
// document.querySelector("#myBar").style.width = '85%'
// document.querySelector('#headline-79864').style.display = 'none'
// document.querySelector('#tmp_headline1-14598').style.display = 'block'
// document.querySelector("#myBar").style.width = '100%'
// }else{
// console.log('email failed to send')
// }
// }).catch((error)=>{
// console.log(error)
// })
//           }else{
// document.querySelector("#myBar").style.width = '85%'
// document.querySelector('#headline-79864').innerHTML = 'Use your previous Login'
// document.querySelector("#myBar").style.width = '100%'
//       console.log('dont sent email ')
//   }
//     }
//   }
//   ).catch((error)=>{
//   console.log(error)
//   });
// }).catch((error)=>{
// console.log(error)
// })
//   </script>