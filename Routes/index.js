import { Router } from "express";
import authRoutes from "./authRoutes.js";
import todoRoutes from "./todoRoutes.js";

const router = Router();


router.use('/',authRoutes);
router.use('/',todoRoutes);



export default router;