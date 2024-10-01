const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API);

const sendSuccessEmail = async ({ email, name, password }) => {
  const link = `https://www.english21days.co.il/thank-you1691248976798?e=${email}&p=${password}`;
  const loginLink =
    "https://www.english21days.co.il/login33523348?page_id=33523349&page_key=xoy7nhsch7g0292f&login_redirect=1";

  const msg = {
    to: email,
    from: " אסף (FLOW פשוט לדבר אנגלית) <info@english21days.co.il>",
    subject: `${name}  ברוכים הבאים  `,

    html: `
    <div style=" direction:rtl ; text-align:right">
    הי ${name} !
    <br />
    <br />
ברוכים הבאים לתוכנית :-)
<br />
<br />
<b style="font-size:20px">לגישה מיידית לתוכנית <a href='${link}'>היכנס לכאן</a></b>
<br />
(אין צורך בשם משתמש וסיסמא)
<br />
<br />
<b>שים לב:</b>
<br />
<br />
ניתן גם להיכנס לתוכנית באופן ידני באופן הבא:
<br />
<br />
<a href='${loginLink}'>היכנס לעמוד הכניסה</a>
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
אסף
<br />
--
<br />
<br />
FLOW
פשוט לדבר אנגלית
<br />
<div>
        `,
    trackingSettings: {
      clickTracking: {
        enable: false, // Disable Click Tracking
        enableText: false,
      },
    },
  };
  const result = new Promise(async (resolve, reject) => {
    await sgMail.send(msg, async function (err, info) {
      if (err) {
        console.log(`Email Not Sent Error Occured => ${err}`);
        resolve(422);
      } else {
        console.log(`Email was Sent`);
        resolve(200);
      }
    });
  });

  return result;
};
const sendSuccessEmailThanks = async ({ email, name, password }) => {
  const link = `https://www.english21days.co.il/thank-you1691248976798?e=${email}&p=${password}`;
  const loginLink =
    "https://www.english21days.co.il/login33523348?page_id=33523349&page_key=xoy7nhsch7g0292f&login_redirect=1";

  const msg = {
    to: email,
    from: " אסף (FLOW פשוט לדבר אנגלית) <info@english21days.co.il>",
    subject: `${name}  ברוכים הבאים  `,

    html: `
      <div style=" direction:rtl ; text-align:right">
      הי ${name} !
      <br />
      <br />
      ברוכים הבאים ל 5000 המילים :-)
  <br />
  <br />
  <b style="font-size:20px">לגישה מיידית לתוכנית <a href='${link}'>היכנס לכאן</a></b>
  <br />
(אין צורך בשם משתמש וסיסמא)
  <br />
  <br />
  <b>שים לב:</b>
  <br />
  <br />
  במידה ושם המשתמש והסיסמא לא מופיעים באופן אוטומטי, להלן הפרטים:
<br />
<br />
<a href='${loginLink}'>היכנס לעמוד הכניסה</a>
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
  אסף
  <br />
  --
  <br />
  <br />
  FLOW
  פשוט לדבר אנגלית
  <br />
  <div>
      `,
    trackingSettings: {
      clickTracking: {
        enable: false, // Disable Click Tracking
        enableText: false,
      },
    },
  };
  const result = new Promise(async (resolve, reject) => {
    await sgMail.send(msg, async function (err, info) {
      if (err) {
        console.log(`Email Not Sent Error Occured => ${err}`);
        resolve(422);
      } else {
        console.log(`Email was Sent`);
        resolve(200);
      }
    });
  });

  return result;
};

const sendSuccessEmailHealth = async ({ email, name, password }) => {
  const link = `https://go.triola.co.il/login1685629993499?page_id=59519676&page_key=rtf3frkbrv04d21y&login_redirect=1&autofill=true&email=${email}&password=${password}`;

  const msg = {
    to: email,
    from: " נועה (הפרעות אכילה) <info@triola.co.il>",
    subject: `${name}  ברוכים הבאים  `,

    html: `
      <div style=" direction:rtl ; text-align:right">
      הי ${name} !
      <br />
      <br />
  ברוכים הבאים לקורס :-)
  <br />
  <br />
  <b style="font-size:20px">לגישה מיידית לתוכנית <a href='${link}'>היכנס לכאן</a></b>
  <br />
(אין צורך בשם משתמש וסיסמא)
  <br />
  <br />
  <b>שימי לב:</b>
  <br />
  <br />
  במידה ושם המשתמש והסיסמא לא מופיעים באופן אוטומטי, להלן הפרטים:
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
  נועה
  <br />
  --
  <br />
  <br />
  <div>
      `,
    trackingSettings: {
      clickTracking: {
        enable: false, // Disable Click Tracking
        enableText: false,
      },
    },
  };
  const result = new Promise(async (resolve, reject) => {
    await sgMail.send(msg, async function (err, info) {
      if (err) {
        console.log(`Email Not Sent Error Occured => ${err}`);
        resolve(422);
      } else {
        console.log(`Email was Sent`);
        resolve(200);
      }
    });
  });

  return result;
};

module.exports = {
  sendSuccessEmail,
  sendSuccessEmailThanks,
  sendSuccessEmailHealth,
};
