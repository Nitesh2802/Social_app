import express from "express";
//import {  adminLogin, adminDashboard ,adminRegister} from "../controllers/admin.controller.js";
//import { verifyJWT } from "../middlewares/auth.middleware.js";
import {adminDashboard} from "../controllers/admin.controller.js";

const router = express.Router();

// Handle the registration logic
//router.route("/admin-register").post(adminRegister);
//router.route("/admin-login").post(adminLogin);

// Admin dashboard route (protected)
router.route("/admin-dashboard").get(adminDashboard);

export default router;
