const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const serverRoute = require("./routes/serverRoute");
const userRoute = require("./routes/userRoute");
const profissionalRoute = require("./routes/profissionalRoute");
const errorMiddleware = require("./middlewares/errorMiddleware");
const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use("/", serverRoute);
app.use("/users", userRoute);
app.use("/profissionais", profissionalRoute);
app.use(errorMiddleware);

module.exports = app;