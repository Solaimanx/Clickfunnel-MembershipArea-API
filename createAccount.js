


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





