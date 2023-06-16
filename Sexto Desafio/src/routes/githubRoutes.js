import { Router } from "express";
import passport from "passport";
import { githubResponse } from "../controllers/githubController.js";

const router = Router();

router.get('/register', passport.authenticate('github', { scope: ['profile', 'email'] }));

router.get('/profile', passport.authenticate('github', { scope: ['profile', 'email'] }), githubResponse);

export default router;