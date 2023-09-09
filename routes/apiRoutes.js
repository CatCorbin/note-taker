const router = require("express").Router();
const { v4: uuid } = require("uuid");
const fs = require("fs");
const { json } = require("express");

router.get("/api/notes", async (req, res) => {
    const dbJson = await json.parse(fs.readFileSync("db/db.json"))
    res.json(dbJson)
});

router.post("/api/notes", async (req,res) => {
    const dbJson = await JSON.parse(fs.readFileSync("db/db.json"))
    const newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuid(),
    };
    dbJson.push(newNote);
    fs.writeFile("db/db.json", JSON.stringify(dbJson));
    res.json(dbJson);
});

module.exports = router;