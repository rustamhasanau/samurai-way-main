import React from "react";
import s from './MyPost.module.css'
import Post from "./Post/Post";


const MyPost = () => {
    return (
        <div className={s.postBlock}>
           <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>MyPost</button>
                </div>
            </div>


            <div className={s.post}>
                <Post/>
                <Post/>

            </div>


        </div>

    );
}

export default MyPost;