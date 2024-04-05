import React, { useState, FormEvent } from 'react';
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
    const { login } = useAuth();
    const [values, setValues] = useState<FormValues>({ userId: 'user1', password: 'password1', rememberMe: false });
    const [errors, setErrors] = useState<FormErrors>({});

    const validateForm = (): boolean => {
        const errors: FormErrors = {};
        if (!values.userId) errors.userId = '아이디를 입력해주세요.';
        if (!values.password) errors.password = '비밀번호를 입력해주세요.';
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        if (validateForm()) {
            handleLogin(values);
            // 폼 검증 성공 시 로직
            console.log('폼 제출 성공:', values);
        }
    };
    const handleLogin = (values: any) => {
        const { userId, password } = values;
        const user = dummyDatabase.users.find((user) => user.userId === userId && user.password === password);

        if (user) {
            login(user);
            // 로그인 성공 시 수행되어야 할 작업 추가
            console.log('로그인 성공!');
            navigate('/');
        } else {
            console.log('로그인 실패');
        }
    };

    return (
        <div className="login-body">
            <div className="login-title">로그인</div>
            <div className="login-content">
                <form onSubmit={handleSubmit} className="login-form">
                    <div>
                        <label htmlFor="userId">아이디</label>
                        <input type="text" id="userId" name="userId" value={values.userId} onChange={handleChange} />
                        {errors.userId && <div className="error-message">{errors.userId}</div>}
                    </div>

                    <div>
                        <label htmlFor="password">비밀번호</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                        />
                        {errors.password && <div className="error-message">{errors.password}</div>}
                    </div>

                    <div className="remember-me">
                        <input
                            type="checkbox"
                            id="rememberMe"
                            name="rememberMe"
                            onChange={handleChange}
                            checked={values.rememberMe}
                        />
                        <label htmlFor="rememberMe">로그인 유지</label>
                    </div>
                    <div className="forgot-password">
                        <a href="/findPW">비밀번호를 잃어버리셨나요?</a>
                    </div>

                    <MainButton type="submit" className="login-button">
                        로그인
                    </MainButton>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
