// SignUpForm.tsx

import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import MainButton from '../common/MainButton';
import '../../styles/signupForm.css';
import { commonValidationRules, signupValidationRules } from './validationRules';

interface SignupFormProps {
    onSignUp: (values: SignupFormValues) => void;
}

interface SignupFormValues {
    nickname: string;
    userId: string;
    baekjoonId: string;
    email: string;
    affiliation: string;
    password: string;
    confirmPassword: string;
    agreeTerms1: boolean;
    agreeTerms2: boolean;
}

const signupFormSchema = Yup.object({
    ...commonValidationRules,
    ...signupValidationRules,
});

const SignupForm: React.FC<SignupFormProps> = ({ onSignUp }) => {
    const formik = useFormik<SignupFormValues>({
        initialValues: {
            nickname: '',
            userId: '',
            baekjoonId: '',
            email: '',
            affiliation: '',
            password: '',
            confirmPassword: '',
            agreeTerms1: false,
            agreeTerms2: false,
        },
        validationSchema: signupFormSchema,
        onSubmit: (values) => {
            //회원가입 로직 구현
            onSignUp(values);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className="sign-up-form">
            <div>
                <label htmlFor="nickname">
                    닉네임<span className="required">*</span>
                </label>
                <input
                    type="text"
                    id="nickname"
                    name="nickname"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.nickname}
                />
                {formik.touched.nickname && formik.errors.nickname ? (
                    <div className="error-message">{formik.errors.nickname}</div>
                ) : null}
            </div>

            <div>
                <label htmlFor="userId">
                    아이디<span className="required">*</span>
                </label>
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
                <label htmlFor="password">
                    비밀번호<span className="required">*</span>
                </label>
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

            <div>
                <label htmlFor="confirmPassword">
                    비밀번호 확인<span className="required">*</span>
                </label>
                <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.confirmPassword}
                />
                {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                    <div className="error-message">{formik.errors.confirmPassword}</div>
                ) : null}
            </div>

            <div>
                <label htmlFor="baekjoonId">
                    백준 아이디<span className="required">*</span>
                </label>
                <input
                    type="text"
                    id="baekjoonId"
                    name="baekjoonId"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.baekjoonId}
                />
                {formik.touched.baekjoonId && formik.errors.baekjoonId ? (
                    <div className="error-message">{formik.errors.baekjoonId}</div>
                ) : null}
            </div>

            <div>
                <label htmlFor="email">
                    이메일<span className="required">*</span>
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                    <div className="error-message">{formik.errors.email}</div>
                ) : null}
            </div>

            <div>
                <label htmlFor="affiliation">소속 (학교/기업)</label>
                <input
                    type="text"
                    id="affiliation"
                    name="affiliation"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.affiliation}
                />
                {formik.touched.affiliation && formik.errors.affiliation ? (
                    <div className="error-message">{formik.errors.affiliation}</div>
                ) : null}
            </div>

            <div className="terms-checkbox">
                <div className="terms-checkbox-top">
                    <input
                        type="checkbox"
                        id="agreeTerms1"
                        name="agreeTerms1"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        checked={formik.values.agreeTerms1}
                    />
                    <label htmlFor="agreeTerms1">
                        이용약관에 동의합니다.<span className="required">*</span>
                    </label>
                </div>
                {formik.touched.agreeTerms1 && !formik.values.agreeTerms1 ? (
                    <div className="error-message">이용약관에 동의해야 합니다.</div>
                ) : null}
            </div>

            <div className="terms-checkbox">
                <div className="terms-checkbox-top">
                    <input
                        type="checkbox"
                        id="agreeTerms2"
                        name="agreeTerms2"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        checked={formik.values.agreeTerms2}
                    />
                    <label htmlFor="agreeTerms2">
                        개인정보 처리방침에 동의합니다.<span className="required">*</span>
                    </label>
                </div>
                {formik.touched.agreeTerms2 && !formik.values.agreeTerms2 ? (
                    <div className="error-message">개인정보 처리방침에 동의해야 합니다.</div>
                ) : null}
            </div>

            <MainButton type="submit" className="sign-up-button">
                회원가입
            </MainButton>
        </form>
    );
};

export default SignupForm;
