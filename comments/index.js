const express = require("express")
const bodyParser = require("body-parser");
const app = express();
const commentsRoutes = require("./Routes/index");
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use("/post",commentsRoutes);
app.listen(3001,()=>{
    console.log("running comment service")
})