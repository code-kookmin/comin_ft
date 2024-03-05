import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import Comments from "../../components/layouts/Comments";
import { PostDetailProps, postEx } from "../../components/community/communityProps";
import { useLocation } from "react-router-dom";

function CommunityDetail() {
  let [postDetail, setPostDetail] = useState<PostDetailProps>(postEx[0]);

  //url 받아서 커뮤니티 주제 찾기
  const location = useLocation();
  const path = location.pathname;
  const postURL = decodeURIComponent(path.split('/').pop() || '');

  function getPostDetail(postURL: any) {
    axios.get(`/community/${postURL}`)
      .then((result) => {
        setPostDetail(result.data);
      });
  }

  useEffect(() => {
    // getPostDetail(postURL);
    console.log(location)
  }, [])

  return (
    <div className="community-body">
      <main className='community-main'>
        <PostInfo postDetail={postDetail} />

        <div className='community-post'>
          <p>{postDetail.post.detail}</p>
        </div>

        <PostLike postDetail={postDetail} />

        <PostCommentsInfo postDetail={postDetail} />
        <Comments comments={postDetail.post.comments} />
      </main>

    </div>
  );
}

function PostInfo({ postDetail }: { postDetail: PostDetailProps }) {
  return (
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
  )
}

function PostCommentsInfo({ postDetail }: { postDetail: PostDetailProps }) {
  return (
    <div className='community-post-comments-header'>
      <span>{postDetail.post.comments.length} comments</span>
      <div>
        <select className='community-click'>
          <option>최신순</option>
          <option>추천순</option>
        </select>
      </div>
    </div>
  );
}

function PostLike({ postDetail }: { postDetail: PostDetailProps }) {
  return (
    <div className='community-post-like'>
      <button className='community-click'>
        <FontAwesomeIcon icon={faThumbsUp} />
        <span>추천</span>
        <span>{postDetail.post.like}</span>
      </button>
      <button className='community-click'>
        <FontAwesomeIcon icon={faThumbsDown} />
        <span>비추천</span>
        <span></span>
      </button>
    </div>
  );
}

export default CommunityDetail;