// routes/userRoutes.js
import express from "express";
import { me } from "../controllers/authController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

// Protected route
router.get("/me", verifyToken, me);

export default router;
