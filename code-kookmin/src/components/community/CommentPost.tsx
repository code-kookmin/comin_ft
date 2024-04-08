import { DOMAIN_NAME } from "../../App";

function CommentPost() {
    return (
        <div className="comment-post">
            <img src={'유저의 이미지'}></img>
            <form className="comment-post-form" method="POST" action={`${DOMAIN_NAME}/community/comments`}> 
                <input className="comment-write" placeholder="댓글을 작성해주세요" />
                <button className='comment-post-button' type="submit">
                    <span>등 록</span>
                </button>
            </form>
        </div>
    )
}

export default CommentPost;