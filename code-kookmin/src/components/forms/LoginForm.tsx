import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../../styles/loginForm.css';
import MainButton from '../common/MainButton';
import { commonValidationRules } from './validationRules';

interface LoginFormProps {
    onLogin: (values: LoginFormValues) => void;
}

interface LoginFormValues {
    userId: string;
    password: string;
    rememberMe: boolean;
}

const loginFormSchema = Yup.object({
    ...commonValidationRules,
});

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
    const formik = useFormik<LoginFormValues>({
        initialValues: {
            userId: '',
            password: '',
            rememberMe: false,
        },
        validationSchema: loginFormSchema,
        onSubmit: (values) => {
            onLogin(values);
            console.log(values);
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
                    onBlur={formik.handleBlur}
                    checked={formik.values.rememberMe}
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
    );
};

export default LoginForm;
