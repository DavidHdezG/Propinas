import express from "express";
import router from "./routes/tipPayment.routes.js";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    origin: "*"
}))
app.use("/api/tipPayments", router);

export default app;