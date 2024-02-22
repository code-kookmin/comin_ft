import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import MainButton from '../common/MainButton';
import '../../styles/findPWForm.css';
import { commonValidationRules, signupValidationRules } from './validationRules';

interface FindPWFormProps {
    onResetPassword: (email: string) => void; // 부모 컴포넌트에서 전달받을 콜백 함수
}

interface FindPWFormValues {
    email: string;
}

const FindPWFormSchema = Yup.object({
    ...commonValidationRules,
});

const FindPWForm: React.FC<FindPWFormProps> = ({ onResetPassword }) => {
    const formik = useFormik<FindPWFormValues>({
        initialValues: {
            email: '',
        },
        validationSchema: FindPWFormSchema,
        onSubmit: (values) => {
            // 이메일을 부모 컴포넌트로 전달하여 비밀번호 재설정 링크를 전송
            onResetPassword(values.email);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className="findPW-form">
            <div>
                <label htmlFor="email">이메일</label>
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

            <MainButton type="submit" className="reset-password-button">
                비밀번호 재설정 링크 받기
            </MainButton>
        </form>
    );
};

export default FindPWForm;
