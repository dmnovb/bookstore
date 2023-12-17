import express from "express";
import config from "config";
import logger from "./utils/logger";
import connect from "./utils/connect";
import routes from "./routes";
import cors from "cors";
import cookieParser from "cookie-parser";

const port = config.get<number>("port");
const app = express();
app.use(express.json());

app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(cookieParser());

app.listen(port, async () => {
  logger.info(`App is running at http://localhost:${port}`);
  await connect();
  routes(app);
});
