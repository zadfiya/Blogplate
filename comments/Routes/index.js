const router = require('express').Router();

const {getComments,addComment} = require("../Controller/Comment")

router.get( "/:id/comments",(req,res)=>getComments(req,res));
router.post("/:id/comments",(req,res)=>addComment(req,res));

module.exports = router;