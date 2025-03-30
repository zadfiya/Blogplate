const router = require('express').Router();

const {createPost, getPosts, getPost} = require("../Controller/Post")

router.get( "/all",(req,res)=>getPosts(req,res));
router.get("/get/:id", (req,res)=>getPost(req,res));
router.post("/create",(req,res)=>createPost(req,res));

module.exports = router;