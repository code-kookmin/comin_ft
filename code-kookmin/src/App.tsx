import React from 'react';
import './App.css';
import Layout from './components/layouts/Layout';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/homePage';
import LoginPage from './pages/loginPage';
import FindPWPage from './pages/findPWPage';
import SignupPage from './pages/signupPage';

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
                    </Routes>
                </Layout>
            }
        </>
    );
}

export default App;
