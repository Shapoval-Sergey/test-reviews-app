const express = require("express");
const cors = require("cors");
const app = express();
const { HttpCode } = require("./helpers/constants");
const reviewsRouter = require("./api/reviews");

app.use(cors());
app.use(express.json({ extended: true }));

app.use("/api", reviewsRouter);

app.use((req, res, next) => {
  res.status(HttpCode.NOT_FOUND).json({
    status: "error",
    code: HttpCode.NOT_FOUND,
    message: `Use api on routes ${req.baseUrl}/api/`,
    data: "Not Found",
  });
});

app.use((err, req, res, next) => {
  err.status = err.status ? err.status : HttpCode.INTERNAL_SERVER_ERROR;
  res.status(err.status).json({
    status: err.status === 500 ? "fail" : "error",
    code: err.status,
    message: err.message,
    data: err.status === 500 ? "Internal Server Error" : err.data,
  });
});

module.exports = app;
