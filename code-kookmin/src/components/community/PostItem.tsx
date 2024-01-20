// PostItem.tsx

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp } from "@fortawesome/free-solid-svg-icons";

interface PostItemProps {
    id: number;
    post: {
        title: string;
        category_id: string;
        user_id: string;
        date: string;
        like: number;
        comments: number;
        // img: ???
    };
}

const PostItem: React.FC<PostItemProps> = ({ id, post }) => {
    return (
        <li>
            <span className='community-posts-like'>
                <FontAwesomeIcon icon={faSortUp} />
                <span>{post.like}</span>
            </span>
            <div className='community-posts-main'>
                <a className='community-posts-title' href={`/community/${post.category_id}/${id}`}>
                    <span>{post.title}</span>
                    <span>[{post.comments}]</span>
                </a>
                <div className='community-posts-etc'>
                    <span>{post.category_id}</span>
                    <span>&nbsp; {String(post.date)}</span>
                    <span>&nbsp; {post.user_id}</span>
                </div>
            </div>
            <a className='community-posts-image'>
                {/* img 태그에 대한 설정이 필요하면 여기에 추가 */}
                {/* 예: <img alt='게시글 이미지' src={post.img} /> */}
            </a>
        </li>
    );
};

export default PostItem;
