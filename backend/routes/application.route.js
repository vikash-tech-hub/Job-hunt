import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import {
    applyJob,
    getApplicants,
    getAppliedJobs,
    updateStatus
} from "../controllers/application.controller.js";

const router = express.Router();

// Apply for a job
// Apply for a job → should be POST
router.route("/apply/:id").post(isAuthenticated, applyJob);

// Get all jobs applied by the logged-in user
router.route("/get").get(isAuthenticated, getAppliedJobs);

// Get all applicants for a job
router.route("/:id/applicants").get(isAuthenticated, getApplicants);

// Update status of application
router.route("/status/:id/update").put(isAuthenticated, updateStatus);


export default router;

