const routes = require("express").Router();
const path = require("path");

router.get("/", (req,res) => {
    res.sendFile(path.join(__dirname))
});
 module.exports = router;