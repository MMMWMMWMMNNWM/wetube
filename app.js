import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./route";
// import {home} from "./controller/videoController"

const app = express();

app.set("view engine", "pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmet());
app.use(morgan("dev"));

//.use -> /user route에 접속하면 , 뒤의 route를 모두 사용한다는 의미
app.use(routes.home, globalRouter);
app.use(routes.users,userRouter);
app.use(routes.videos,videoRouter);

export default app;

// import express from "express";
// import morgan from "morgan";
// import helmet from "helmet";
// import cookieParser from "cookie-parser";
// import bodyParser from "body-parser";

// const app = express();

// const PORT = 4000;

// const handleListening= ()=> console.log("Listening on: http://localhost:" + PORT);

// const handleHome = (req, res)=> res.send('Hello From Home')
//     //req, res두 객체를 호출
//     //who is requesting, what data is being sent
//     //서버는 정보를 req object로 얻는다
// /*
// //middleware -> user와 server 사이에서 처리해주는 애들, 모든 function은 middle ware 가 될 수 있음
// const betweenHome = (req, res, next) => {
//     console.log("I'm between");
//     next();//다음 function을 실행
// }
// //next ->  middleware의 connection을 관리.
// */

// const handleProfile = (req, res) => res.send('profile');
//     //web처럼 되려면 html, css file을 넘겨줘야됨.

// /*여기에 midleware 존나많이 넣어도됨
// */
// app.use(cookieParser());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(helmet());
// app.use(morgan("dev"));


// // .get: 주소창에 입력 받았을 때 실행할 사항을 나타내는 함수.
// // "" 안의 주소로 접근하면, 해당 함수 실행.
// app.get("/", handleHome);
// /*
//     여기에 middleware 넣으면 profile가기 전에만 실행됨.
// */

// app.get("/profile",handleProfile);

// //GET request에 대해 respond해야됨.
// //일반적으로 server는 get에 대해 http message로 응답.
// //GET - get information from server, query가 header에 붙어잇음
// //POST - send information(with our request) to server, 서버의 리소스를 생성, 변경

// //.listen - 서버에 포트를 할당.
// app.listen(PORT,handleListening);


