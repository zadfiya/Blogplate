const express = require("express")

const app = express();
const postRoutes = require("./Routes/index")
app.use("/posts",postRoutes);

app.listen(3000,()=>{
    console.log("running")
})