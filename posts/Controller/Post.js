const posts = []
const {randomBytes} = require("crypto")
const os = require('os')
const createPost = async(req,res)=>{
    const {title} = req.body;
    const postObj = {
        id:randomBytes(5).toString('hex'), title
    }
    posts.push(postObj);
    return await res.status(200).json({success:true, location: `http://${req.headers.host}/posts/get/${postObj.id}`});
    return res.status(200).json({});
}

const getPosts = async (req,res) =>{
    return await res.status(200).json({posts});
}
const getPost = async (req,res) =>{
    const {id} = req.params
    const post = posts.find(item=>item.id == id);
    return await res.status(post?200:404).json({post});
}

module.exports = {createPost, getPosts, getPost};