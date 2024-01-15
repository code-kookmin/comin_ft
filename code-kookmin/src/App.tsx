import React from 'react';
import './App.css';
import Layout from './components/layouts/Layout';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/homePage';
import LoginPage from './pages/loginPage';
import FindPWPage from './pages/findPWPage';
import SignupPage from './pages/signupPage';
import Community from './pages/community';
import MyInfo from './pages/myInfo';
import MyActivity from './pages/myActivity';
import ResetPW from './pages/resetPW';
import RecommendRouter from './pages/recommendRouter';


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

                        {/* 동연 작업 */}
                        <Route path='/community' element={<Community />} ></Route>
                        <Route path='/community/*' element={<Community />} ></Route>
                        <Route path='/recommend' element={<RecommendRouter />} ></Route>
                        <Route path='/recommend/*' element={<RecommendRouter />} ></Route>

                    </Routes>
                </Layout>
            }
        </>
    );
}

export default App;
