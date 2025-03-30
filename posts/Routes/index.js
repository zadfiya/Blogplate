const router = require('express').Router();

const {createPost, getPosts} = require("../Controller/Post")

router.get(  "/all",(req,res)=>getPosts(req,res));
router.post( "/create",(req,res)=>createPost(req,res));

module.exports = router;