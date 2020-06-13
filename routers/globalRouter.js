import express from "express";
import routes from "../route";
import {home} from "../controller/videoController";
import {search} from "../controller/videoController";
import {join} from "../controller/userController";
import {login} from "../controller/userController";
import {logout} from "../controller/userController";
const globalRouter = express.Router();

globalRouter.get(routes.home,home);
globalRouter.get(routes.join,join);
globalRouter.get(routes.login,login);
globalRouter.get(routes.logout,logout);
globalRouter.get(routes.search,search);

export default globalRouter;