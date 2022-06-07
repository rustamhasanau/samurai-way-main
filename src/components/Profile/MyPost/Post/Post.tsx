import React from "react";
import s from './Post.module.css'

const Post = () => {
    return (
        <div className={s.item}>

            <img
                src="https://1000logos.net/wp-content/uploads/2019/12/Volkswagen-Logo-1937.jpg"
                alt=""/>

            <span>LIKE</span>


        </div>

    );
}

export default Post;