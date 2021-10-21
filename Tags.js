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
    method: "post",
    url: "https://www.english21days.co.il/thank-you1617910678849",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      'Cookie': '_etison_sessions_dcs_v2=41e4b98a60b0d4ee7d47b6a86a0aad25; __cf_bm=_MzxvdM_pSGgGw9Zi2G9SZ1CTfhgl5qxndlWIB0qctE-1634593250-0-AbRzc1pcchHsr+BYoaUpXYRMxdmPMPkeytjpj2LjOO0ar7DxWgtKHpvLTeh7Xn2tvLoHdDE6MDHGUeEfvKK7LAaajGefPe/ov7OY9go0od3g', 
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



}



module.exports = { pro ,englishBy };
