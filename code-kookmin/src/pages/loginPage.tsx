import React from 'react';
import LoginForm from '../components/forms/LoginForm';
import '../styles/loginPage.css';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Cookies from 'js-cookie';
import MainButton from '../components/common/MainButton';
import { commonValidationRules } from '../components/forms/validationRules';
import { useAuth } from '../components/AuthContext';

// 더미 데이터베이스
const dummyDatabase = {
    users: [
        {
            userId: 'user1',
            password: 'password1',
            name: 'kim',
            birthday: '20230405',
            githubName: 'aaa',
            baekjoonName: 'adfafa',
        },
        {
            userId: 'user2',
            password: 'password2',
            name: 'park',
            birthday: '20230405',
            githubName: 'aaa',
            baekjoonName: 'adfafa',
        },
        // ... 더 많은 사용자 데이터
    ],
};
interface FormValues {
    userId: string;
    password: string;
    rememberMe: boolean;
}

interface FormErrors {
    userId?: string;
    password?: string;
}

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
