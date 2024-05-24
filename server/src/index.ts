"use strict";

import express, { urlencoded } from "express";
import router from "./routes/user.routes";

const app = express();
const port = 8000;

app.use(express.json());
app.use(urlencoded({ extended: true }));

app.use("/", router);

app.listen(port, () => {
  console.log(`App listen on port ${[port]}`);
});
