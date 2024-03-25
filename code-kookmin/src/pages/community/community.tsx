import '../../styles/community.css';
import 'react-quill/dist/quill.snow.css';
import { Route, Routes } from 'react-router-dom';
import CommunityDetail from './communityDetail';
import CommunityWrite from './communityWrite';
import CommunitySidebar from '../../components/community/Sidebar';
import CommunityHeader from '../../components/community/Header';
import CommunityPostList from './communityPostList';
import { category, postEx, PostUpdateProps } from '../../components/community/communityProps';
import CommunityUpdate from './communityUpdate';
import { useState } from 'react';

function Community() {
  const categoryURL = category.map((item) => item.urlName);

  let [postUpdate, setPostUpdate] = useState<PostUpdateProps>(postEx[0]);

  return (
    <div className="community-body">
      <CommunityHeader />
      <div id='community-contents'>
        <CommunitySidebar />
        <div>
          <Routes>
            <Route path='/' element={<CommunityPostList />} />

            {
              categoryURL?.map((id) => {
                return (
                  <Route path={`/${id}`} element={<CommunityPostList />} />
                )
              })
            }

            <Route path=':id' >
              <Route index element={<CommunityDetail />} />
              <Route path='update' element={<CommunityUpdate post={postUpdate}/>} />
            </Route>

            <Route path='/write' element={<CommunityWrite />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Community;
