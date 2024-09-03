const express = require("express");
const router = express.Router();
const { writeFileFunction, readFilesFunction, createFolderFunction } = require("../controllers/file.controller");

router.post("/createFolder", createFolderFunction);

router.post("/writeFiles", writeFileFunction);

router.get("/readFiles", readFilesFunction);


module.exports = router;
