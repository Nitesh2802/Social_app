import express, { urlencoded } from "express"; 
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}));

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

import adminRouter from "./routes/admin.route.js";
import userRouter from "./routes/user.route.js";

app.use("/api/v1/ad", adminRouter);
app.use("/api/v1/us", userRouter);

export default app;
