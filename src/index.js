import express, { Router } from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

import connectDatabase from "./database/index.js";
import router from "./routes/index.js";

const dotenvRes = dotenv.config({ silent: true });

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

router(app);

const port = process.env.PORT || 5000;

app.listen(port, async () => {
  await connectDatabase();
  console.log(`Server is running at port ${port}`);
});
