import  express from "express";
import passport from "passport";
import { getAdminStatus, getAdminUsers, logout, myProfile } from "../controllers/user.js";
import { AuthorizeAdmin, isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

//google Authentication:----

router.get("/googlelogin", passport.authenticate("google", {
    scope:["profile"],
}));

//Login Route:---

router.get("/login",
passport.authenticate("google",{
    successRedirect : process.env.FRONTENED_URL, 
}),
 (req , res, next)=>{
    res.send("Logged In")
});
//logged in session:--
router.get("/me", isAuthenticated, myProfile)


//logged out session:---
router.get("/logout", logout);

//Admin routes :----

router.get("/admin/users", isAuthenticated,AuthorizeAdmin, getAdminUsers)

router.get("/admin/status", isAuthenticated, AuthorizeAdmin,getAdminStatus)


export default router;