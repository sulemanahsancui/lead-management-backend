import express from "express";
import { addLead, getLeads } from "../controllers/lead.controller";

const router = express.Router();

router.post("/", addLead);
router.get("/", getLeads);

export default router;
