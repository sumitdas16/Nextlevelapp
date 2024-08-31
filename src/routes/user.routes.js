import {Router} from "express"
import {loginUser, logOutUser ,refreshAccessToken, registerUser} from "../controllers/user.controllers.js"
import {upload} from "../middlewares/multer.middleware.js"
import { verifyJWT } from "../middlewares/auth.middleware.js";


const router = Router();

router.route("/register").post(
    upload.fields([
        {
            name : "avatar",
            maxCount : 1
        },
        {
            name : "coverImage",
            maxCount : 2

        }
    ]),
    registerUser
)

router.route("/login").post(loginUser);

// secured routes

router.route("/logout").post( verifyJWT,logOutUser)
router.route("/refreshtoken").post(refreshAccessToken)

export default router
