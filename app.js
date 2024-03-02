const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const createError = require("http-errors");
const { errorResponse } = require("./Controllers/responseController");
const danGradeRouter = require("./Routes/danGradeRouter");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/dan-grades", danGradeRouter);

app.get("/", (req, res) => {
  res.send("Wadokai is running...");
});

// 404 Error Handler
app.use((req, res, next) => {
  next(createError(404, "Route not found"));
});

// Global Error Handler
app.use((err, req, res, next) => {
  return errorResponse(res, {
    statusCode: err.status,
    message: err.message,
    stack: err.stack,
  });
});

module.exports = app;
