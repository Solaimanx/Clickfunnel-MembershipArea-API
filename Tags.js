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

const englishBy = (name, email) => {
  const data = new FormData();
  data.append("contact[email]", email);
  data.append("contact[name]", name);

  const config = {
    method: "post",
    url: "https://www.english21days.co.il/thank-you1617910678849",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Cookie:
        "_etison_sessions_dcs_v2=7cbc9344ad4835ed32385e2e9fdf970c; __cf_bm=OCBO7w7ThqVRgbaFWU6dwoQf.ge0UpN_Mqt3rjBSu9g-1635610043-0-AUMtgj1lZN01H11G1N58XKQYWr6OVMk1zio7owBllg+txOOyttwblfNqUQtuLk56EckkABYK86qRbj6BxBS9EU+vyltk05F38PJlRu1xRjBI",
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

const smallTalk = async (name, email) => {
  const data = new FormData();
  data.append("contact[email]", email);

  const config = {
    method: "post",
    url: "https://www.english21days.co.il/thank-you1673812934818",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Cookie:
        "_etison_sessions_dcs_v2=5ade8e7e3123879d38fa4325e894922b; __cf_bm=csnZ9yeFZuFmvHbve90hUZ3z1FjJZhW7hlhzHgPpeLo-1673900333-0-AS/qLOOncO3ov9LkHfo6yr2qhtrK8ZuVqQbE3SqWRaudHoI18WlX9YD85wL2o7PUwYBh8gRURyLbh6th3aD7XoOD1sTJX9uEYx1PudeWO2xW",
      ...data.getHeaders(),
    },
    data: data,
  };

  try {
    const res = await axios(config);
    if (res.status) {
      console.log(res.status);
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = { pro, englishBy, smallTalk };
