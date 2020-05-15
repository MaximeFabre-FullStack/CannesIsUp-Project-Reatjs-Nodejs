const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const adherentRouter = require("./routes/adherents");
const adminRouter = require("./routes/admin");
const visiteurRouter = require("./routes/visiteurs");

const app = express();
const cors_handle = require("./middleware/corsHandle");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors_handle.handle);

// routes
app.use("/adherents", adherentRouter);
app.use("/admin", adminRouter);
app.use("/visiteurs", visiteurRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err.message);
});

module.exports = app;
