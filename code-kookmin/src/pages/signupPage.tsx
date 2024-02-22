// SignUpPage.tsx

import React from 'react';
import SignupForm from '../components/forms/SignupForm';
import { useNavigate } from 'react-router-dom';

const SignupPage: React.FC = () => {
    const navigate = useNavigate();

    const handleSignUp = (values: any) => {
        console.log('회원가입 완료');
        // 예시: 서버로부터 회원가입이 성공적으로 이루어졌을 때
        // 사용자를 홈페이지로 리다이렉트
        navigate('/login');
    };

    return (
        <div className="login-body">
            <div className="login-title">회원가입</div>
            <div className="login-content">
                <SignupForm onSignUp={handleSignUp} />
            </div>
        </div>
    );
};

export default SignupPage;
