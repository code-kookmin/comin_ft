import { useEffect, useState } from 'react';
import '../styles/community.css';
import 'react-quill/dist/quill.snow.css';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import CommunityDetail from './communityDetail';
import CommunityWrite from './communityWrite';
import CommunitySidebar from '../components/community/Sidebar';
import CommunityHeader from '../components/community/Header';
import CommunityPostList from './communityPostList';

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

export default Community;
