import express from "express";

import protectRoute from "../middleware/protect.route.js";
import guestRoute from "../middleware/guest.middleware.js";
import { signup, login, profile, getUsers } from "../controller/auth.controller.js";

const router = express.Router();

router.post("/signin", guestRoute, signup);
router.post("/login", guestRoute, login);
router.get("/profile", protectRoute, profile);
router.get("/users", getUsers);

export default router;