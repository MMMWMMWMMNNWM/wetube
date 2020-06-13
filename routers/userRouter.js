import express from "express";
import routes from "../route";
import {users} from "../controller/userController"
import {userDetail} from "../controller/userController"
import {editProfile} from "../controller/userController"
import {changePassword} from "../controller/userController"
const userRouter = express.Router();

userRouter.get(routes.users, users);
userRouter.get(routes.userDetail, userDetail);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);

export default userRouter;

//MVC
//Model = data
//View = how the data looks
//Controller = function shows data