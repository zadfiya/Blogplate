import React from 'react'
import { getRequest, postRequest } from '../../AxiosReq/Request';
const PostCreate = () =>{
    return (
        <div className='container'>
            <h2>Create Post</h2>
            <form>
                <div className='form-group'>
                    <label htmlFor='title'>Title</label>
                    <input type='text' className='form-control' id='title' placeholder='Enter title' />
                </div>
                <button className='btn btn-primary'>Submit</button>
            </form>
        </div>
    )
}
export default PostCreate;