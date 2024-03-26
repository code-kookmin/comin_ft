import { DOMAIN_NAME } from "../../App";

function CommentPost() {
    return (
        <div className="comment-post">
            <img src={'123'}></img>
            <form className="comment-post-form" method="post" action={`${DOMAIN_NAME}/게시글id?/reply`}> 
                <input className="comment-write" placeholder="댓글을 작성해주세요" />
                <button className='comment-post-button' type="submit">
                    <span>등 록</span>
                </button>
            </form>
        </div>
    )
}

export default CommentPost;