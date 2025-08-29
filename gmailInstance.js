if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const { google } = require("googleapis");

function encodeHeader(name) {
  return `=?UTF-8?B?${Buffer.from(name, "utf-8").toString("base64")}?=`;
}
const gmail = async ({
    to,
    subject,
    message
})=>{
  const key = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY);
   const auth = new google.auth.JWT(
      key.client_email,
      null,
      key.private_key,
      ['https://www.googleapis.com/auth/gmail.send'], // Gmail API readonly scope
      "info@english21days.co.il" // impersonated user
    );
    await auth.authorize()
    const gmail = google.gmail({ version: "v1", auth });
    const senderName = encodeHeader("אסף (פלואו לימוד אנגלית)");

  const RawMessage = [
    `From: ${senderName}  <info@english21days.co.il>`,
    `To: ${to ? to : 'info@ericniceberg.com'}`,
    `Subject: ${encodeHeader(subject)} `,
    "MIME-Version: 1.0",
    "Content-Type: text/html; charset=UTF-8",
      "",
  message,
  ].join("\n");

  const encodedMessage = Buffer.from(RawMessage)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");

  const res = await gmail.users.messages.send({
    userId: "me",
    requestBody: { raw: encodedMessage },
  });

  console.log("Email sent! Sub:", subject);

}


module.exports = gmail