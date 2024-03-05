import { faCircleUp } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass, faPen, faSortUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PostItem from "../../components/community/PostItem";
import { Category, category, postlistEx } from "../../components/community/communityProps";
import { PostListProps } from "../../components/community/communityProps";

function CommunityPostList() {
  let [postlist, setPostlist] = useState<PostListProps[]>(postlistEx);

  //url 받아서 커뮤니티 주제 찾기
  const location = useLocation();
  const path = location.pathname;
  const communityTitle = decodeURIComponent(path.split('/').pop() || '');


  //urlName으로 name 찾기
  function getNameFromUrlName(urlName: string): string | undefined {
    const foundCategory: Category | undefined = category?.find(category => category.urlName === urlName);
    return foundCategory ? foundCategory.name : undefined;
  }

  function getPosts() {
    communityTitle == 'community'
      ? axios.get('/community/all')//모든 글 가져오기
        .then((result) => {
          setPostlist(result.data);
        })
      : axios.get(`/community/${communityTitle}`)//필요한 게시판의 글들만 가져오기
        .then((result) => {
          setPostlist(result.data);
        });
  }
  useEffect(() => {
    // getPosts();
    console.log(location)
  }, [])

  return (
    < main className='community-main' >
      <div className='community-title-sort'>
        <div className='community1'>
          {communityTitle == 'community'
            ? <a href={`/community`}>최신 글</a>
            : <a href={`/community/${communityTitle}`}>{getNameFromUrlName(communityTitle)}</a>
          }
          <a href="/community/write"><FontAwesomeIcon icon={faPen} /></a>
        </div>
        <div className='community2'>
          <div className='community-sort'>
            <a>
              <FontAwesomeIcon icon={faCircleUp}></FontAwesomeIcon>
              <strong className='community-sort-text'>Latest</strong>
            </a>
          </div>
          <CommunitySearch />
        </div>
      </div>
      <ul className='community-posts'>
        {
          postlist?.map((value, index) => (
            // PostItem 컴포넌트를 사용하여 각 게시글을 렌더링합니다.
            <PostItem key={index} id={value.id} post={value.post} />
          ))
        }
      </ul>

    </main >
  )
}

function CommunitySearch() {
  return (
    <form className='community-search' method="POST" action="/community-search">
      <select className="community-click" name="search_target">
        <option value="title_content" selected>제목+내용</option>
        <option value="title">제목</option>
        <option value="content">내용</option>
        <option value="user_name">작성자</option>
      </select>
      <input name="search" placeholder="검색" type="text"></input>
      <button type='submit' className='community-click'>
        <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
      </button>
    </form>
  )
}

export default CommunityPostList;