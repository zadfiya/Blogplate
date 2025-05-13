const comments = {}
const {randomBytes} = require("crypto")
const addComment = async(req,res)=>{
    const {content} = req.body;
    const {id:postId} = req.params
    const commentObj = {
        id:randomBytes(5).toString('hex'), content
    }
    let postCommnets = comments[postId] || []
    comments[postId] = [...postCommnets, commentObj]
    return await res.status(200).json({success:true, location: `http://${req.headers.host}/post/${postId}/commnets`});
}

const getComments = async (req,res) =>{
    const {id:postId} = req.params
    let postCommnets = comments[postId] || []
    return await res.status(200).json({postCommnets});
}


module.exports = {addComment, getComments};