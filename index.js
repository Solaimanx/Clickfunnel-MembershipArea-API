if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const schedule = require("node-schedule");
const generator = require("generate-password");
const app = express();
const cors = require("cors");
const FormData = require("form-data");
const sgMail = require("@sendgrid/mail");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const corsOptions = {
  origin: "https://www.english21days.co.il",
  methods: ["GET", "PUT", "POST", "DELETE", "OPTIONS", "PATCH"],
  optionsSuccessStatus: 200,
  credentials: true,
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "X-Requested-With",
    "device-remember-token",
    "Access-Control-Allow-Origin",
    "Origin",
    "Accept",
  ],
};
app.use(cors(corsOptions));

sgMail.setApiKey(process.env.SENDGRID_API);
const addTag = require("./Tags");

/// adding basic and pro tags
app.get("/add-basic-pro/:name/:email", async (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,Content-Type, Authorization,Accept"
  );
  const { name, email } = req.params;

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
      if (response.status == 200) {
        const twomins = new Date().getTime() + 2 * 60 * 1000;
        const dateTwo = new Date(twomins);

        const fivemins = new Date().getTime() + 5 * 60 * 1000;
        const dateFive = new Date(fivemins);

        schedule.scheduleJob(dateTwo, function () {
          addTag.process(name, email);
        });
        schedule.scheduleJob(dateFive, function () {
          addTag.pro(name, email);
        });

        const password = generator.generate({
          length: 6,
          numbers: true,
        });

        return res.status(200).json({ password: password });
      }
      console.log(response.status);
    })
    .catch(function (error) {
      console.log(error);
      return res.status(500).json({ error });
    });
});

/// adding 'english by the way ' tag
app.get("/add-english-bytheway/:name/:email", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,Content-Type, Authorization,Accept"
  );
  const { name, email } = req.params;

  const data = new FormData();
  data.append("contact[email]", email);
  data.append("contact[name]", name);

  const config = {
    method: "post",
    url: "https://www.english21days.co.il/thank-you1617910678849",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Cookie:
        "_etison_sessions_dcs_v2=41e4b98a60b0d4ee7d47b6a86a0aad25; __cf_bm=_MzxvdM_pSGgGw9Zi2G9SZ1CTfhgl5qxndlWIB0qctE-1634593250-0-AbRzc1pcchHsr+BYoaUpXYRMxdmPMPkeytjpj2LjOO0ar7DxWgtKHpvLTeh7Xn2tvLoHdDE6MDHGUeEfvKK7LAaajGefPe/ov7OY9go0od3g",
      ...data.getHeaders(),
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      if (response.status == 200) {
        const twomins = new Date().getTime() + 2 * 60 * 1000;
        const dateTwo = new Date(twomins);

        const fivemins = new Date().getTime() + 5 * 60 * 1000;
        const dateFive = new Date(fivemins);

        schedule.scheduleJob(dateTwo, function () {
          addTag.englishBy(name, email);
        });
        schedule.scheduleJob(dateFive, function () {
          addTag.englishBy(name, email);
        });

        const password = generator.generate({
          length: 6,
          numbers: true,
        });

        return res.status(200).json({ password: password });
      }
      console.log(response.status);
    })
    .catch(function (error) {
      console.log(error);
      return res.status(500).json({ error });
    });
});

//send email
app.get("/send-success-email/:name/:email/:password", async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,Content-Type, Authorization,Accept"
  );
  const { email, name, password } = req.params;

  const msg = {
    to: email,
    from: "info@english21days.co.il",
    subject: `${name}  ברוכים הבאים  `,

    html: `
    <div style=" direction:rtl ; text-align:right">

    הי ${name} !

    <br />
    <br />

ברוכים הבאים לתוכנית :-)

<br />
<br />

להלן הוראות גישה לתוכנית:
<br />
<br />


נכנסים לעמוד הכניסה:
<br />
<br />

<a href="https://www.english21days.co.il/course33523349">https://www.english21days.co.il/course33523349</a>
<br />
<br />

שם משתמש:
<br />
<br />

${email}
<br />
<br />
סיסמה:
<br />
<br />
${password}
<br />
<br />


 כדאי לשמור את הפרטים האלה במקום שיהיה לך קל למצוא
<br />
<br />



שיהיה לך המון בהצלחה!!
<br />

<br />


בברכה,
<br />
אריאל
<br />
--
<br />
<br />

קונפידנס
לדבר אנגלית, לא לגמגם

<br />

<div>

    `,
  };

  await sgMail.send(msg, function (err, info) {
    if (err) {
      console.log(`Email Not Sent Error Occured => ${err}`);
      return res.status(422).json({ err });
    } else {
      console.log(`Email was Sent`);
      return res.status(200).json({ message: "success" });
    }
  });
});

app.get("/", (req, res) => {
  res.send({
    server: "up and running",
  });
});





app.listen(process.env.PORT, function () {
  console.log(`server is running ${process.env.PORT}`);
});