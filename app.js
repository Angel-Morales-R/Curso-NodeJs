"use strict";

const express = require("express"),
  path = require("path"),
  favicon = require("serve-favicon"),
  morgan = require("morgan"),
  pug = require("pug"),
  routes = require("./routes/index"),
  //${__dirname}
  faviconURL = `public/img/Genshin-favicon.png`,
  publicDir = express.static(path.join(`${__dirname}/public`)),
  viewDir = `${__dirname}/views`,
  port = process.env.PORT || 3000,
  app = express();

app
  //Configurando app
  .set("views", viewDir)
  .set("view engine", "pug")
  .set("port", port)
  //ejecutando middewares
  .use(favicon(faviconURL))
  .use(morgan("dev"))
  .use(publicDir)
  //ejecuto el middleware enrutador
  .use("/", routes);

module.exports = app;
