import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


interface CommentsProps {
    comments: {
      user_id: string,
      date: string,
      detail: string,
      like: number,
    }[]
  }
  
  const Comments: React.FC<CommentsProps> = ({comments}) => {
  
    return (
      <>
        <ul className='community-post-comments'>
          {comments.map((value, index) => {
            return (
              <li>
                <span className='community-post-comment-like'>
                  <FontAwesomeIcon icon={faThumbsUp} className='community-click' />
                  <span>{value.like}</span>
                  <FontAwesomeIcon icon={faThumbsDown} className='community-click' />
                </span>
                <div className='community-post-comment'>
                  <div className='community-posts-etc'>
                    <span>{value.user_id}</span>
                    <span>&nbsp;{value.date}</span>
                  </div>
                  <p>{value.detail}</p>
                  <div className='community-posts-etc'>
                    <span className='community-click'>신고</span>
                    <span className='community-click'>&nbsp;삭제</span>
                  </div>
                </div>
              </li>
            )
          })
          }
        </ul>
      </>
    )
  }

  export default Comments;