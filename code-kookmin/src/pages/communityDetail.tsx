import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState } from "react";

function CommunityDetail() {

    interface Post {
      id: number;
      post: {
        title: string,
        category_id: string,
        date: string,//나중에 Date형식으로 변환
        user_id: string,
        views: number,
        detail: string,
        like: number,
        comments: {
          user_id: string,
          date: string,
          detail: string,
          like: number,
        }[],
      };
    }
  
    let postEx = {
      id: 123,
      post: {
        title: '아니 이거 머임?',
        category_id: '문제추천',
        date: '23.09.24',
        user_id: "유저아이디1",
        views: 30,
        detail: "이코드어케짜냐고 100번물었다",
        like: 4,
        comments: [{
          user_id: "댓글작성자1",
          date: '23.09.24',
          detail: "이케이케하면댐",
          like: 123
        },
        {
          user_id: "댓글작성자2",
          date: '23.09.26',
          detail: "그걸왜못함ㅋㅋ",
          like: 126
        }]
      }
    }
  
    let [postDetail, setPostDetail] = useState<Post>(postEx);
  
    function getPostDetail() {
      axios.get('/community/getpostdetail')
        .then((result) => {
          setPostDetail(result.data);
        });
    }
  
  
    return (
      <div className="community-body">
  
        {/* 커뮤니티 글 상세 시작 */}
        <main className='community-main'>
          <div className='community-post'>
            <h1>{postDetail.post.title}</h1>
            <div className='community-post-title-detail'>
              <div className='community-posts-etc'>
                <span>{postDetail.post.category_id}</span>
                <span>&nbsp; {postDetail.post.date}</span>
                <span>&nbsp; {postDetail.post.user_id}</span>
              </div>
              <div className='community-posts-etc'>
                <span>조회수 {postDetail.post.views}</span>
                <span>&nbsp; 댓글 {postDetail.post.comments.length}</span>
                <span>&nbsp; 추천 {postDetail.post.like}</span>
              </div>
            </div>
          </div>
  
          <div className='community-post'>
            <p>{postDetail.post.detail}</p>
          </div>
  
          <div className='community-post-like'>
            <button className='community-click'>
              <FontAwesomeIcon icon={faThumbsUp} />
              <span>개추</span>
              <span>{postDetail.post.like}</span>
            </button>
            <button className='community-click'>
              <FontAwesomeIcon icon={faThumbsDown} />
              <span>비추</span>
              <span></span>
            </button>
          </div>
  
          {/* 댓글 */}
          <div>
            <div className='community-post-comments-header'>
              <span>{postDetail.post.comments.length} comments</span>
              <div>
                <select className='community-click'>
                  <option>최신순</option>
                  <option>추천순</option>
                </select>
              </div>
            </div>
  
            <ul className='community-post-comments'>
              {postDetail.post.comments.map((value, index) => {
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
  
          </div>
        </main>
  
        {/* 커뮤니티 컨텐츠들 끝 */}
      </div>
    );
  }

  export default CommunityDetail;