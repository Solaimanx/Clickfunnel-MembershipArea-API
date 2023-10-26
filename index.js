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
const { generatePassword } = require("./utils");
const {
  sendSuccessEmail,
  sendSuccessEmailThanks,
  sendSuccessEmailHealth,
} = require("./sendEmail");

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

app.get("/", (req, res) => {
  res.send({
    server: "up",
    note: "working",
  });
});

/// adding basic and pro tags
app.get("/add-basic-pro/:name/:email", async (req, res, next) => {
  const { name, email } = req.params;
  console.log(name);

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
          addTag.pro(name, email);
        });
        schedule.scheduleJob(dateFive, function () {
          addTag.pro(name, email);
        });

        const password = generatePassword();
        return res.status(200).json({ password: password });
      }
      console.log(response.status);
    })
    .catch(function (error) {
      console.log(error);
      return res.status(500).json({ error });
    });
});

/// adding basic and pro and small talk tags
app.get("/add-basic-pro-smalltalk/:name/:email", async (req, res, next) => {
  const { name, email } = req.params;
  console.log(name);

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
    .then(async function (response) {
      if (response.status == 200) {
        await addTag.smallTalk(name, email);
        const twomins = new Date().getTime() + 2 * 60 * 1000;
        const dateTwo = new Date(twomins);

        const fivemins = new Date().getTime() + 5 * 60 * 1000;
        const dateFive = new Date(fivemins);

        schedule.scheduleJob(dateTwo, function () {
          addTag.pro(name, email);
          addTag.smallTalk(name, email);
        });
        schedule.scheduleJob(dateFive, function () {
          addTag.pro(name, email);
          addTag.smallTalk(name, email);
        });

        const password = generatePassword();

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
  const { name, email } = req.params;
  console.log(name);

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

        const password = generatePassword();

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
  const { email, name, password } = req.params;
  const isSend = await sendSuccessEmail({
    email,
    name,
    password,
  });
  if (isSend == 200) {
    return res.status(200).json({ message: "success" });
  } else {
    return res.status(422).json({ err: "error" });
  }
});

//send email for health course
app.get(
  "/send-success-email-health/:name/:email/:password",
  async (req, res) => {
    const { email, name, password } = req.params;

    const isSend = await sendSuccessEmailHealth({
      email,
      name,
      password,
    });
    if (isSend == 200) {
      return res.status(200).json({ message: "success" });
    } else {
      return res.status(422).json({ err: "error" });
    }
  }
);

//send email
app.get(
  "/send-success-email-thanks/:name/:email/:password",
  async (req, res) => {
    const { email, name, password } = req.params;

    const isSend = await sendSuccessEmailThanks({
      email,
      name,
      password,
    });
    if (isSend == 200) {
      return res.status(200).json({ message: "success" });
    } else {
      return res.status(422).json({ err: "error" });
    }
  }
);

//send email 2nd time after waiting 15 mins
app.get("/forgot-password/:rawemail", async (req, res) => {
  const { rawemail } = req.params;

  const currectTime = new Date().getTime() + 1 * 60 * 1000;
  const waiting = new Date(currectTime);

  schedule.scheduleJob(waiting, async function () {
    const email = rawemail;

    const msg = {
      to: email,
      from: " אסף (פלואו לימוד אנגלית)  <info@english21days.co.il>",
      subject: `פרטי הגישה שלך `,
      html: `
    <table style="  direction:rtl ; text-align:right ; width:100%;border-spacing:0px;border-collapse:collapse;border-width:medium;border-style:none" role="presentation">
                                  <tbody>
                                  <tr>
                                  <td style="padding:0px;width:100%" width="100%" valign="top">
                                    <div>
                                      <div style="font-size:16px">
                                        <div>
                                          <div>הי!</div>
                                          <div><br>
                                            לאחרונה ביקשת לשנות
                                            סיסמא לחשבונך.<br>
                                            <br>
                                            במידה וכבר שינית את
                                            הסיסמא, <br>
                                            פשוט תיכנס מכאן עם המייל
                                            והסיסמא שיצרת:<br>
                                            <a href="https://www.english21days.co.il/course33523349" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.english21days.co.il/course33523349&amp;source=gmail&amp;ust=1636575999458000&amp;usg=AFQjCNEF7xl87vTFe_um9yW-jR9TvcS_Vg">https://www.english21days.co.<wbr>il/course33523349</a><br>
                                            (כדאי לשמור את הקישור
                                            הזה במועדפים שיהיה לך קל
                                            למצוא)<br>
                                            <br>
                                            במידה ועדיין לא שינית את
                                            הסיסמא,<br>
                                            ניתן לעשות זאת <a href="https://www.english21days.co.il/thank-you-basic-plankz1yvwq9" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.english21days.co.il/thank-you-basic-plankz1yvwq9&amp;source=gmail&amp;ust=1636575999458000&amp;usg=AFQjCNF3Ig2WYhHdQCSwVc63BWr3xE7OeA">מכאן</a>.<br>
                                          </div>
                                          <div><br>
                                          </div>
                                          <div><br>
                                            מאחל לך לימוד נעים
                                            ומהנה,<br>
                                            אסף</div>
                                          <div>&nbsp;</div>
                                        </div>
                                      </div>
                                    </div>
                                    <div><span>
                                        <table style="float:none;text-align:right;border-spacing:0px;border-collapse:collapse;border-width:medium;border-style:none" role="presentation" width="100%" align="right">
                                          <tbody>
                                            <tr>
                                              <td style="padding:0px 0px 0px 0px" align="right"> <img src="https://images.clickfunnels.com/b3/76412fd32440a6b709eb54a031921d/assaf-s.png" style="display:block;width:136px;height:150px;max-width:100%" alt="" width="136" height="150" class="CToWUd"> </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </span></div>
                                    <div>
                                      <div style="font-size:16px">
                                        <div>
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
    
    `,
    };

    await sgMail.send(msg, function (err, info) {
      if (err) {
        console.log(`Email Not Sent Error Occured => ${err}`);
      } else {
        console.log(`Email was Sent`);
      }
    });
  });

  return res.status(200).json({ message: "success" });
});

app.get("/password", (req, res) => {
  const password = generatePassword();
  return res.status(200).json({ password: password });
});

app.get("/membership-password", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "https://go.triola.co.il");
  const password = generatePassword();
  return res.status(200).json({ password: password });
});

app.listen(process.env.PORT, function () {
  console.log(`server is running ${process.env.PORT}`);
});
