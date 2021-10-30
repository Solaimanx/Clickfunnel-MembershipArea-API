const axios = require("axios");
const FormData = require("form-data");

const pro = (name, email) => {

  const data = new FormData();
  data.append("contact[email]", email);
  data.append("contact[name]", name);

  const config = {
    method: "post",
    url: "https://www.english21days.co.il/thank-you1613545655691",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Cookie:
        "_etison_sessions_dcs_v2=7412bffb8ce7f3aafce1859f9e9c7cf4; __cf_bm=gG6WILHsgOAhlnKeXuxdEwI0_MCVtH2.T15ph_Q_rAQ-1634414353-0-AdBEA4fpHXsO1CM0I2y0VkWx0KwWKNHg1oIPxAHN10+QslrFPS8tgf+AWsWVw1DGGH91z8YDSaZU9ByE3VHRwhnezM3aP1sZ/NNuW+slF4Mw",
      ...data.getHeaders(),
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(response.status);
    })
    .catch(function (error) {
      console.log(error);
    });
};


const englishBy = (name , email )=>{
  


  const data = new FormData();
  data.append("contact[email]", email);
  data.append("contact[name]", name);

  const config = {
    method: 'post',
    url: 'https://www.english21days.co.il/thank-you1617910678849',
    headers: { 
      "Content-Type": "application/x-www-form-urlencoded",
      'Cookie': '_etison_sessions_dcs_v2=7cbc9344ad4835ed32385e2e9fdf970c; __cf_bm=OCBO7w7ThqVRgbaFWU6dwoQf.ge0UpN_Mqt3rjBSu9g-1635610043-0-AUMtgj1lZN01H11G1N58XKQYWr6OVMk1zio7owBllg+txOOyttwblfNqUQtuLk56EckkABYK86qRbj6BxBS9EU+vyltk05F38PJlRu1xRjBI', 
      ...data.getHeaders()
    },
    data : data
  };
  

  axios(config)
    .then(function (response) {
      console.log(response.status);
    })
    .catch(function (error) {
      console.log(error);
    });



}



module.exports = { pro ,englishBy };



fetch("https://www.english21days.co.il/thank-you1617910678849", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "sec-ch-ua": "\"Google Chrome\";v=\"95\", \"Chromium\";v=\"95\", \";Not A Brand\";v=\"99\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-requested-with": "XMLHttpRequest"
  },
  "referrer": "https://www.english21days.co.il/thank-you1617910678849",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "meta_web_form_id=1187827994&meta_split_id=&listname=awlist5578186&redirect=https%3A%2F%2Fwww.english21days.co.il%2Fthank-you1634999216449%2F%3Fname%3DMd%2BSolaiman%26email%3Dsolaiman321%2540gmail.com&meta_adtracking=English_by_the_way&meta_message=1&meta_required=name%2Cemail&meta_tooltip=&tag_112938890=english+by+the+way&contact%5Bname%5D=Md+Solaiman&contact%5Bfirst_name%5D=&contact%5Blast_name%5D=&contact%5Bemail%5D=solaiman321%40gmail.com&cf_affiliate_id=&webinar_delay=-63802855622282&purchase%5Bpayment_method_nonce%5D=&purchase%5Border_saas_url%5D=&contact%5Bcart_affiliate_id%5D=&userevents%5Bfunnel_id%5D=ZW5kdHFrbVlaQ3dOYmt3OStSaWRFQT09LS12NFlSNThvN0lob2VyMExlL1FXaHh3PT0%3D--df0de7e515bc7396fcef5a063650d384e179ff40&userevents%5Bpage_id%5D=eVJkSUpPSHlsQVlHMUkyRkVrWDQ1Zz09LS0vaXpVVFRWK3hRZkRvL01BK2pTa0t3PT0%3D--c8bc57d08ff82b60236a202b55ee65f0f442b119&userevents%5Bfunnel_step_id%5D=WW9HTnAyQ3hiK01SS3p3dFNlaTJvUT09LS1GdHJXWi95L3BSaEVaK2R3SnZVbElBPT0%3D--d6b920d99f1d990f1f5cc5b7d806d48b47b324db&userevents%5Buser_id%5D=SU1Kbm1LZnVvMGFadmVKK0pmV0x0dz09LS03SzBrVjljdEp0VXFWaWRiMnE4bGl3PT0%3D--1984e82d4b32bff73055d8c49145d9ace953108e&userevents%5Baccount_id%5D=eWE0eURvM2ZEMzNMQjAzWnhvTWVLUT09LS1MYTE3TVNBUnNWWFNaTUQ2WE1sUjlRPT0%3D--3c31ee1d793f91c937c5a6403f3a1406370edfca&userevents%5Bpage_code%5D=NDc3NzgzMzE%3D&userevents%5Bmode_id%5D=1&userevents%5Btime_zone%5D=America%2FChicago&userevents%5Bapp_domain%5D=app.clickfunnels.com&userevents%5Baff_sub2%5D=&userevents%5Baff_sub3%5D=&userevents%5Baff_sub%5D=&userevents%5Baffiliate_id%5D=&userevents%5Bcf_affiliate_id%5D=&userevents%5Bcontent%5D=&userevents%5Bmedium%5D=&userevents%5Bname%5D=&userevents%5Bsource%5D=&userevents%5Bterm%5D=&userevents%5Bclient_width%5D=1167&korg_b1_1850_nis=To+Udi&korg_b1_1850_nis=To+Udi",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});