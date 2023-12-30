import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import Cookies from 'js-cookie';
import '../../styles/LoginForm.css';
import MainButton from '../common/mainButton';

interface LoginFormProps {
    onLoginSuccess: () => void;
}

interface LoginFormValues {
    userId: string;
    password: string;
    rememberMe: boolean;
}

const LoginFormSchema = Yup.object({
    userId: Yup.string().required('아이디를 입력하세요'),
    password: Yup.string().required('비밀번호를 입력하세요'),
});

const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {
    const formik = useFormik<LoginFormValues>({
        initialValues: {
            userId: '',
            password: '',
            rememberMe: false,
        },
        validationSchema: LoginFormSchema,
        onSubmit: (values) => {
            //로그인 로직 구현

            if (values.rememberMe) {
                // 로그인 정보를 쿠키에 저장
                Cookies.set('userData', JSON.stringify({ userId: values.userId }));
            }
            // 로그인 성공 시 추가 작업
            onLoginSuccess();
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className="login-form">
            <div>
                <label htmlFor="userId">아이디</label>
                <input
                    type="text"
                    id="userId"
                    name="userId"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.userId}
                />
                {formik.touched.userId && formik.errors.userId ? (
                    <div className="error-message">{formik.errors.userId}</div>
                ) : null}
            </div>

            <div>
                <label htmlFor="password">비밀번호</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                    <div className="error-message">{formik.errors.password}</div>
                ) : null}
            </div>

            <div className="remember-me">
                <input
                    type="checkbox"
                    id="rememberMe"
                    name="rememberMe"
                    onChange={formik.handleChange}
                    checked={formik.values.rememberMe}
                />
                <label htmlFor="rememberMe">로그인 유지</label>
            </div>
            <div className="forgot-password">
                <a href="/forgot-password">비밀번호를 잃어버리셨나요?</a>
            </div>

            <MainButton type="submit" className="login-button">
                로그인
            </MainButton>
        </form>
    );
};

export default LoginForm;
