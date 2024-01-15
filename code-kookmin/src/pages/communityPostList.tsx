import { faCircleUp } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass, faPen, faSortUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function CommunityPostList() {

    interface Postlist {
      id: number;
      post: {
        title: string,
        category_id: string,
        user_id: string,
        date: string,//나중에 Date형식으로 변환
        like: number,
        comments: number
        // img: ???
      };
    }
  
    let postlistEx = [
      {
        id: 123,
        post: {
          title: '제목1',
          category_id: "문제추천",
          user_id: "유저아이디1",
          date: '23.09.24',
          like: 3,
          comments: 12
        },
      },
      {
        id: 124,
        post: {
          title: '제목2',
          category_id: "자유",
          user_id: "유저아이디2",
          date: '23.09.25',
          like: 5,
          comments: 19
        },
      },
    ]
  
    let [postlist, setPostlist] = useState<Postlist[]>(postlistEx);
  
    //url 받아서 커뮤니티 주제 찾기
    const location = useLocation();
    const path = location.pathname;
    const parts = path.split('/');
    let communityTitle = decodeURIComponent(parts[parts.length - 1]);
    // let [communityTitle, setCommunityTitle] = useState<String>(lastPart)
  
    function getPosts() {
      axios.get('/community/getposts')
        .then((result) => {
          setPostlist(result.data);
        });
    }
    useEffect(() => {
      console.log(location)
    }, [])
  
    return (
      < main className='community-main' >
        <div className='community-title-sort'>
          <div className='community1'>
            {communityTitle == 'community'
              ? <a href={`/community`}>최신 글</a>
              : <a href={`/community/${communityTitle}`}>{communityTitle}</a>
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
  
            <form className='community-search' method="POST" action="/community-search">
              <select className="community-click" name="search_target">
                <option value="title">제목</option>
                <option value="content">내용</option>
                <option value="title_content" selected>제목+내용</option>
                <option value="user_name">작성자</option>
              </select>
              <input name="search" placeholder="검색" type="text"></input>
              <button type='submit' className='community-click'>
                <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
              </button>
            </form>
          </div>
  
        </div>
        <ul className='community-posts'>
          {
            postlist?.map((value, index) => {
              return (
                <li>
                  <span className='community-posts-like'>
                    <FontAwesomeIcon icon={faSortUp} />
                    <span>{value.post.like}</span>
                  </span>
                  <div className='community-posts-main'>
                    <a className='community-posts-title' href={`/community/${value.post.category_id}/${value.id}`}>
  
                      <span>{value.post.title}</span>
                      <span>[{value.post.comments}]</span>
                    </a>
                    <div className='community-posts-etc'>
                      <span>{value.post.category_id}</span>
                      <span>&nbsp; {String(value.post.date)}</span>
                      <span>&nbsp; {value.post.user_id}</span>
                    </div>
                  </div>
                  <a className='community-posts-image'>
                    <img></img>
                  </a>
                </li>
              )
            })
          }
        </ul>
  
      </main >
    )
  }

  export default CommunityPostList;