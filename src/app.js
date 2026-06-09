const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const serverRoute = require("./routes/serverRoute");
const userRoute = require("./routes/userRoute");
const errorMiddleware = require("./middlewares/errorMiddleware");
const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use("/", serverRoute);
app.use("/users", userRoute);
app.use(errorMiddleware);

module.exports = app;