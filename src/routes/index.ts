import { AuthController, UserController } from "@controllers";
import { verifyToken } from "@middlewares";
import { Router } from "express";
import passport from "passport";


let router:Router = Router()


// Auth
router.get("/github/login", AuthController.LoginGithub)
router.get("/github/callback", passport.authenticate("github"), AuthController.CallbackGithub)
router.post("/github/refresh-token", AuthController.RefreshAccesToken)

// User
router.get("/users/me", verifyToken, UserController.GetMe)


export default router