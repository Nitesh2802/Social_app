import express from "express"; 
import { uploadForm, uploadData } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = express.Router();

router.route("/user").get(uploadForm);
router.route("/user").post(upload.array("images", 5), uploadData);

export default router;
