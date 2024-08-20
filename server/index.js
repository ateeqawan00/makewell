import express from "express";
import dotenv from "dotenv";
import UserRoute from "./routes/user.route.js";
import cors from "cors";
import mongoose from "mongoose";
import { hcfRoute } from "./routes/hcfuser.route.js";
import { createTransporter } from "./services/mail/nodeMailer.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3800;
const transporter = createTransporter();

// middlewares
app.use(express.json());
app.use(cors());

// apis / routes
app.use("/", UserRoute);
app.use("/hcf", hcfRoute);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("DB Connected");
    app.listen(PORT, () => {
      console.log(`Makewell app listening on port ${PORT}`);
    });
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email Server Is Connected");
      }
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });
