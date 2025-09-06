const express = require("express");
const guitarRouter = express.Router();
const { getGuitars, createGuitar, updateGuitarById, deleteGuitarById } = require("../controller/guitar.controller");

guitarRouter.get("/", getGuitars);
guitarRouter.post("/", createGuitar);
guitarRouter.put("/:id", updateGuitarById);
guitarRouter.delete("/:id", deleteGuitarById);

module.exports = guitarRouter;