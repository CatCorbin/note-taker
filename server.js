const express = require("express");
const html-routes = require("./routes/html-routes");
const api-routes = require("./routes/api-routes");
const PORT = process.env.PORT || 3000

const app = express();

//middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static("public"));
app.use(html-routes);
app.use(api-routes);

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
});