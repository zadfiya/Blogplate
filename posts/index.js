const express = require("express")
const bodyParser = require("body-parser");
const app = express();
const postRoutes = require("./Routes/index");
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use("/posts",postRoutes);

app.listen(3000,()=>{
    console.log("running")
})