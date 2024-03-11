import '../../styles/community.css';
import 'react-quill/dist/quill.snow.css';
import { Route, Routes } from 'react-router-dom';
import CommunityDetail from './communityDetail';
import CommunityWrite from './communityWrite';
import CommunitySidebar from '../../components/community/Sidebar';
import CommunityHeader from '../../components/community/Header';
import CommunityPostList from './communityPostList';
import { category } from '../../components/community/communityProps';

function Community() {
  const categoryURL = category.map((item) => item.urlName);

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
            
            <Route path=':id' element={<CommunityDetail />} />

            <Route path='/write' element={<CommunityWrite />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Community;
