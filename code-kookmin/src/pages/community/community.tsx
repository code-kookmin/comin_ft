import { useEffect, useState } from 'react';
import '../../styles/community.css';
import 'react-quill/dist/quill.snow.css';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import CommunityDetail from './communityDetail';
import CommunityWrite from './communityWrite';
import CommunitySidebar, { category } from '../../components/community/Sidebar';
import CommunityHeader from '../../components/community/Header';
import CommunityPostList from './communityPostList';

function Community() {

  interface Category {
    id: number;
    name: string;
    sub?: { name: string }[];
  }

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

  // function getCategory() {
  //   axios.get('/community/category')
  //     .then((result) => {
  //       setCategory(result.data);
  //     });
  // }

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
              category?.map((category) => {
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
