import express from "express";
import { WhoamiController } from "../controller/controller.js";

const router = express.Router();

// date route
router.get("/whoami", WhoamiController);

export default router;
