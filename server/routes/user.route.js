import express from "express";
import {
  joinWaitList,
  login,
  signup,
  updateUser,
} from "../controllers/user.controller.js";
import { auth } from "../middlewares/auth.js";

import multer from "multer";
const upload = multer({ dest: "uploads/" });

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/join-waiting-list", joinWaitList);

router.post("/update-user", auth, upload.single("avatar"), updateUser);

export default router;
