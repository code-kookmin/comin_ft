import React from 'react';
import LoginForm from '../components/forms/LoginForm';
import '../styles/loginPage.css';
const LoginPage: React.FC = () => {
    const handleLogin = (values: any) => {
        // 로그인 로직 구현
        console.log('로그인 정보:', values);
    };

    return (
        <div className="body">
            <div className="title">로그인</div>
            <div className="content">
                <LoginForm onSubmit={handleLogin} />
            </div>
        </div>
    );
};

export default LoginPage;
