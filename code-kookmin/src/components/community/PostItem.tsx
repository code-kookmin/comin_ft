import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp } from "@fortawesome/free-solid-svg-icons";
import { PostListProps, category } from "./communityProps";

const PostItem: React.FC<PostListProps> = ({ id, post }) => {

    function getCategoryName(categoryId: number) {
        // category 배열에서 categoryId에 해당하는 카테고리를 찾습니다.
        for (let i = 0; i < category.length; i++) {
            const cat = category[i];
            for (let j = 0; j < cat.sub.length; j++) {
                if (cat.sub[j].id === categoryId) {
                    return cat.sub[j].name;
                }
            }
        }
        // 찾지 못한 경우 빈 문자열을 반환합니다.
        return '';
    }
    //받아온 post.category_id를 자체 name으로 변환시켜서 갖다주기
    const categoryName = getCategoryName(post.category_id);


    return (
        <li>
            <span className='community-posts-like'>
                <FontAwesomeIcon icon={faSortUp} />
                <span>{post.like}</span>
            </span>
            <div className='community-posts-main'>
                <a className='community-posts-title' href={`/community/${id}`}>
                    <span>{post.title}</span>
                    <span>[{post.comments}]</span>
                </a>
                <div className='community-posts-etc'>
                    <span>{categoryName}</span>
                    <span>&nbsp; {String(post.date)}</span>
                    <span>&nbsp; {post.user_id}</span>
                </div>
            </div>
            <a className='community-posts-image'>
            </a>
        </li>
    );
};

export default PostItem;
