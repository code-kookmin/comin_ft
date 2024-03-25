import React from 'react';
import './App.css';
import Layout from './components/layouts/Layout';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/homePage';
import LoginPage from './pages/loginPage';
import FindPWPage from './pages/findPWPage';
import SignupPage from './pages/signupPage';
import Community from './pages/community/community';
import MyInfo from './pages/myInfo';
import MyActivity from './pages/myActivity';
import ResetPW from './pages/resetPW';
import RecommendRouter from './pages/recommendRouter';
import AdminUser from './pages/adminUser';
import AdminCommunity from './pages/adminCommnity';
import RankingRouter from './pages/rankingRouter';

export const DOMAIN_NAME = "http://localhost:8080"

function App() {
    return (
        <>
            {
                <Layout>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/findPW" element={<FindPWPage />} />
                        <Route path="/signup" element={<SignupPage />} />
                        <Route path="/myInfo" element={<MyInfo />} />
                        <Route path="/myActivity" element={<MyActivity />} />
                        <Route path="/resetPW" element={<ResetPW />} />
                        <Route path="/admin/user" element={<AdminUser />} />
                        <Route path="/admin/community" element={<AdminCommunity />} />

                        {/* 동연 작업 */}
                        <Route path='/community' element={<Community />} />
                        <Route path='/community/*' element={<Community />} />
                        <Route path='/recommend' element={<RecommendRouter />} />
                        <Route path='/recommend/*' element={<RecommendRouter />} />
                        <Route path='/ranking' element={<RankingRouter />} />
                    </Routes>
                </Layout>
            }
        </>
    );
}

export default App;
