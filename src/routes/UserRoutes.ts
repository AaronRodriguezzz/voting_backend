import { Router } from "express";
import { createUser, logInUser } from "../controllers/UserController";

const router = Router();

router.post('/register', createUser);
router.post('/login', logInUser);

export default router;