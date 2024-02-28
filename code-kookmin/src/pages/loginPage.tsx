// LoginPage.tsx

import React from 'react';
import LoginForm from '../components/forms/LoginForm';
import '../styles/loginPage.css';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
    const navigate = useNavigate();

    const handleLoginSuccess = () => {
        // 로그인 성공 시 수행되어야 할 작업 추가
        console.log('로그인 성공!');

        // 홈페이지로 리다이렉트
        navigate('/');
    };

    return (
        <div className="login-body">
            <div className="login-title">로그인</div>
            <div className="login-content">
                <LoginForm onLoginSuccess={handleLoginSuccess} />
            </div>
        </div>
    );
};

export default LoginPage;
