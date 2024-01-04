import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import axios from "axios";

dotenv.config();

const PORT = process.env.SERVER_PORT || 3000;
const API_URL = process.env.API_URL;
const APP_ID = process.env.APP_ID;
const APP_KEY = process.env.APP_KEY;

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Ready to proxy!");
});

app.use("/api", async (req, res) => {
  try {
    const { hostname, method, url, headers, body } = req;

    const proxyHeaders = {
      "App-Id": APP_ID,
      "App-Key": APP_KEY,
      "Content-Type": "application/json",
    };

    let axiosConfig = {
      method,
      url: `${API_URL}${url}`,
      headers: proxyHeaders,
    };

    if (method === "POST") {
      axiosConfig = {
        ...axiosConfig,
        data: body,
      };
    }

    const response = await axios(axiosConfig);

    res.status(response.status).send(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});
