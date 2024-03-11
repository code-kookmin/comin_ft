import React from 'react';
import LoginForm from '../components/forms/LoginForm';
import '../styles/loginPage.css';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
    const navigate = useNavigate();

    const handleLogin = (values: any) => {
        // 로그인 성공 시 추가 작업

        console.log('로그인 성공!');
        console.log(values);
        // 홈페이지로 리다이렉트
        navigate('/');
    };

    return (
        <div className="login-body">
            <div className="login-title">로그인</div>
            <div className="login-content">
                <LoginForm onLogin={handleLogin} />
            </div>
        </div>
    );
};

export default LoginPage;
