import React, { useEffect, useMemo, useRef, useState } from 'react';
import '../styles/community.css';
import 'react-quill/dist/quill.snow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faCalendar, faMagnifyingGlass, faPen, faSortUp, faThumbsDown, faThumbsUp, faUser } from '@fortawesome/free-solid-svg-icons';
import { faCircleUp } from '@fortawesome/free-regular-svg-icons';
import { Route, Routes, useLocation } from 'react-router-dom';
import ReactQuill from 'react-quill';
import { RangeStatic } from 'quill';
import axios from 'axios';
import logo from '../assets/logo.png'

function Community() {

  interface Category {
    id: number;
    name: string;
    sub?: { name: string }[];
  }

  let categoryEx = [{
    id: 0o00,
    name: '정보',
    sub: [
      {
        name: '문제추천',
      },
      {
        name: '코딩 뉴스',
      },
      {
        name: '팁과 노하우',
      }
    ]
  }, {
    id: 0o01,
    name: '코딩 게시판',
    sub: [
      {
        name: 'Q&A',
      },
      {
        name: '자유',
      },
      {
        name: '언어',
      },
      {
        name: '프로젝트',
      },
      {
        name: '학부생 공부비법',
      }
    ]
  }, {
    id: 0o02,
    name: '홍보 게시판',
    sub: [
      {
        name: '대회',
      },
      {
        name: '내 문제 홍보',
      },
    ]
  }, {
    id: 0o03,
    name: '문의 게시판',
    sub: [
      {
        name: '문의하기',
      },
      {
        name: '내 문의',
      }
    ]
  },
  ]

  let [category, setCategory] = useState<Category[]>(categoryEx);

  let [categoryNameList, setCategoryNameList] = useState<string[]>();

  //카테고리 이름 담는 함수
  function setCategoryList() {
    let a: string[] = []
    category.map((value) => {
      a.push(value.name);
      value.sub?.map((subValue) => {
        a.push(subValue.name)
      })
    })
    setCategoryNameList(a);
  }

  function getCategory() {
    axios.get('/community/category')
      .then((result) => {
        setCategory(result.data);
      });
  }

  useEffect(() => {
    // getCategory(); 서버랑 합칠때 주석 품
    setCategoryList()
  }, [])

  return (
    <div className="community-body">
      <CommunityHeader />
      {/* 커뮤니티 컨텐츠들 */}
      <div id='community-contents'>
        <CommunitySidebar />
        <div>
          <Routes>
            <Route path='/' element={<CommunityPostList />} />

            {
              categoryNameList?.map((category) => {
                return (
                  <Route path={`/${category}`} >
                    <Route index element={<CommunityPostList />} />
                    <Route path=':id' element={<CommunityDetail />} />
                  </Route>
                )
              })
            }

            <Route path='/write' element={<CommunityWrite />} />
          </Routes>
        </div>
      </div>
      {/* 커뮤니티 컨텐츠들 끝 */}
    </div>
  );
}

// 기본 틀
function CommunityHeader() {

  return (
    <div className='community-header'>
      <div className='community-header-contents'>
        <div className='community-logo-name'>
          <div className="community-logo" />
          <div className='community-names'>
            <a className='community-name1' href="/community">CODE
              {/* <img src={logo}></img> */}
            </a>
            <a className='community-name2' href="/community">KOOKMIN</a>
            <a className='community-name2' href="/community"> 커뮤니티</a>
          </div>
        </div>
        <div className='community-detail'>백준 및 코딩 전반적인 내용을 올리는 게시판입니다.<br />건전한 커뮤니티 이용을 위한 가이드라인을 참고해주시길 바라며, 이를 크게 위반한 게시물에 대해선 경고 없이 삭제됨을 알려드립니다.</div>
      </div>
    </div>
  )
}

function CommunitySidebar() {

  interface Category {
    id: number;
    name: string;
    sub?: { name: string }[];
  }

  let categoryEx = [{
    id: 0o00,
    name: '정보',
    sub: [
      {
        name: '문제추천',
      },
      {
        name: '코딩 뉴스',
      },
      {
        name: '팁과 노하우',
      }
    ]
  }, {
    id: 0o01,
    name: '코딩 게시판',
    sub: [
      {
        name: 'Q&A',
      },
      {
        name: '자유',
      },
      {
        name: '언어',
      },
      {
        name: '프로젝트',
      },
      {
        name: '학부생 공부비법',
      }
    ]
  }, {
    id: 0o02,
    name: '홍보 게시판',
    sub: [
      {
        name: '대회',
      },
      {
        name: '내 문제 홍보',
      },
    ]
  }, {
    id: 0o03,
    name: '문의 게시판',
    sub: [
      {
        name: '문의하기',
      },
      {
        name: '내 문의',
      }
    ]
  },
  ]

  let [category, setCategory] = useState<Category[]>(categoryEx);

  function getCategory() {
    axios.get('/community/category')
      .then((result) => {
        setCategory(result.data);
      });
  }
  // useEffect(() => {
  //   getCategory();
  // }, [])

  return (
    <div className='community-left'>
      <div className='community-sidebar'>
        {category?.map((value, i) => {
          return (
            <div className='sidebar-menu ' key={i}>
              <a className='sidebar-title' href={`/community/${value.name}`}>
                <strong>{value.name}</strong>
                <FontAwesomeIcon icon={faAngleRight} />
              </a>
              {
                value.sub?.map((subvalue, index) => {
                  return (
                    <a className='sidebar-subtitle'>&nbsp;-&nbsp;&nbsp;&nbsp;{subvalue.name}</a>
                  )
                })
              }
            </div>
          )
        })
        }

      </div>
      <div className='community-sidebar-space'></div>
    </div>

  )
}

// 각종 기능
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

function CommunityWrite() {

  interface Category {
    id: number;
    name: string;
    sub?: { name: string }[];
  }

  let categoryEx = [{
    id: 0o00,
    name: '정보',
    sub: [
      {
        name: '문제추천',
      },
      {
        name: '코딩 뉴스',
      },
      {
        name: '팁과 노하우',
      }
    ]
  }, {
    id: 0o01,
    name: '코딩 게시판',
    sub: [
      {
        name: 'Q&A',
      },
      {
        name: '자유',
      },
      {
        name: '언어',
      },
      {
        name: '프로젝트',
      },
      {
        name: '학부생 공부비법',
      }
    ]
  }, {
    id: 0o02,
    name: '홍보 게시판',
    sub: [
      {
        name: '대회',
      },
      {
        name: '내 문제 홍보',
      },
    ]
  }, {
    id: 0o03,
    name: '문의 게시판',
    sub: [
      {
        name: '문의하기',
      },
      {
        name: '내 문의',
      }
    ]
  },
  ]

  let [category, setCategory] = useState<Category[]>(categoryEx);

  function getCategory() {
    axios.get('/community/category')
      .then((result) => {
        setCategory(result.data);
      });
  }

  //quill
  const inputRef = useRef<HTMLInputElement>(null);
  const quillRef = useRef<ReactQuill | null>(null);
  const [textValue, setTextValue] = useState<string>('');
  const [username, setUsername] = useState<string>('유저네임');

  const imageHandler = () => {
    console.log('에디터에서 이미지 버튼을 클릭하면 핸들러가 시작됩니다!');

    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.addEventListener('change', async () => {
      console.log('온체인지');
      const file = input.files?.[0];

      if (file) {
        const formData = new FormData();
        formData.append('img', file);

        try {
          const result = await axios.post<{ url: string }>('/note/img', formData);
          console.log('성공 시, 백엔드가 보내주는 데이터', result.data.url);
          const IMG_URL = result.data.url;

          const editor = quillRef.current?.getEditor();

          if (editor) {
            const range = editor.getSelection() as RangeStatic;
            editor.insertEmbed(range.index, 'image', IMG_URL);
          }
        } catch (error) {
          console.log('실패했어요ㅠ', error);
        }
      }
    });
  };

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          ['image'],
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        ],
        handlers: {
          image: imageHandler,
        },
      },
    };
  }, []);

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'image',
  ];

  let today = new Date();
  let year: number = today.getFullYear();
  let month: string | number = today.getMonth() + 1;
  if (month < 10) { month = 0 + String(month) };
  let date: string | number = today.getDate();
  if (date < 10) { date = '0' + String(date) };

  const checkTextLength = () => {
    if (textValue.trim().length === 0) {
      setTextValue('내용이 없습니다');
      // length가 0이면 POST 막기
    }
  };


  return (
    <div className="community-body">

      {/* 글 작성하기 */}
      <main className='community-main'>
        <div className='community-write-zone'>
          <div className="write-zone">
            <h1>게시글 작성</h1>
            <form className="write-zone-form" method="POST" action="/community/write">
              <select name="category">
                <option key="none" value="none">카테고리 없음</option>
                {
                  category.map((value, index) => {
                    return (
                      <>
                        <option key="123" value={value.name}>{value.name}</option>
                        {
                          value.sub?.map((a, i) => {
                            return (
                              <option key="123" value={a.name}>- {a.name}</option>
                            )
                          })
                        }
                      </>
                    )
                  })
                }
              </select>
              <input
                type="text"
                className="write-title"
                placeholder="제목"
                name="title"
              />
              <div className='write-contents-main'>
                <ReactQuill
                  className="write-contents"
                  ref={quillRef}
                  theme="snow"
                  placeholder="내용을 입력해주세요"
                  value={textValue}
                  onChange={setTextValue}
                  modules={modules}
                  formats={formats}
                />
                <textarea
                  className="write-contents-invisible"
                  value={textValue}
                  name="contents"
                />
              </div>

              <div className="write-contents-footer">
                <div className='write-contents-footer-detail'>
                  <div>
                    <FontAwesomeIcon icon={faUser} />
                    <input type="text" className="write-note-writer" name="writer" value={username} readOnly />
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faCalendar} />
                    <input type="text" className="write-note-write-date" name="writeDate" value={year + '.' + month + '.' + date} readOnly />
                  </div>
                </div>
                <button className="write-contents-submit community-click" type='submit' onClick={() => { checkTextLength(); }}>발행</button>
              </div>

            </form>
          </div>

        </div>

      </main>
      {/* 글 작성하기 끝 */}
    </div >
  );
}

export default Community;
