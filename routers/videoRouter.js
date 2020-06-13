import express from "express";
import routes from "../route";
import {videos} from "../controller/videoController";
import {upload} from "../controller/videoController";
import {videoDetail} from "../controller/videoController";
import {editVideo} from "../controller/videoController";
import {deleteVideo} from "../controller/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.videos, videos);
videoRouter.get(routes.upload, upload);
videoRouter.get(routes.videoDetail, videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideos, deleteVideo);

export default  videoRouter;