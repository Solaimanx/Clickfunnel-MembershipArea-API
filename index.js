if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const axios = require("axios").default;

const app = express();
const cors = require("cors");
app.use(express.json());
const corsOptions = {
    origin: "*",
    methods: ["GET", "PUT", "POST", "DELETE", "OPTIONS", "PATCH"],
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    credentials: true, //Credentials are cookies, authorization headers or TLS client certificates.
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
  



  app.get("/", (req, res) => {
    res.send({
      server: "up and running",
    });
  });
  




  app.listen(process.env.PORT, function () {
    console.log(`server is running ${process.env.PORT}`);
  });
  