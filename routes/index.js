"use strict";

const express = require("express"),
  router = express.Router();

function pug(req, res, next) {
  let locals = {
    title: "Genshin Impact",
    link: "https://genshin.gg",
    descripcion:
      "Genshin Impact es un juego de acción ARPG de mundo abierto free-to-play con una mecánica de monetización de Gacha para conseguir elementos adicionales como personajes especiales y armas. Es el tercer videojuego desarrollado por miHoYo, tras Gun GirlZ y Honkai Impact 3rd.",
  };
  res.render("index", locals);
}

function error404(req, res, next) {
  let error = new Error(),
    locals = {
      title: "Error 404",
      descripcion: "Recurso no encontrado",
      error: error,
    };
  error.status = 404;
  res.render("error", locals);
}

router
  .get("/", (req, res) => {
    res.end(
      `<h1>Terminanos la configuracion de nuestra primera app en express</h1>`
    );
  })
  .get("/pug", pug)
  .use(error404);

module.exports = router;
