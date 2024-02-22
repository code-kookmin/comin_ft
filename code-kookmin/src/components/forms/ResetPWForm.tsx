// ResetPasswordForm.tsx
import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import MainButton from '../common/MainButton';
import { commonValidationRules, resetPWValidationRules } from './validationRules';

interface ResetPWFormProps {
    onResetPW: (currentPW: string, newPW: string) => void;
}

interface ResetPWFormValues {
    currentPW: string;
    newPW: string;
    confirmPW: string;
}

const resetPWFormSchema = Yup.object({
    ...commonValidationRules,
    ...resetPWValidationRules,
});

const ResetPWForm: React.FC<ResetPWFormProps> = ({ onResetPW }) => {
    const formik = useFormik<ResetPWFormValues>({
        initialValues: {
            currentPW: '',
            newPW: '',
            confirmPW: '',
        },
        validationSchema: resetPWFormSchema,
        onSubmit: (values) => {
            // 부모 컴포넌트로 현재 비밀번호와 새 비밀번호를 전달하여 변경 로직 실행
            onResetPW(values.currentPW, values.newPW);
        },
    });
    return (
        <form onSubmit={formik.handleSubmit} className="resetPW-form">
            <div>
                <label htmlFor="currentPW">현재 비밀번호</label>
                <input
                    type="password"
                    id="currentPW"
                    name="currentPW"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.currentPW}
                />
                {formik.touched.currentPW && formik.errors.currentPW ? (
                    <div className="error-message">{formik.errors.currentPW}</div>
                ) : null}
            </div>

            <div>
                <label htmlFor="newPW">새로운 비밀번호</label>
                <input
                    type="password"
                    id="newPW"
                    name="newPW"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.newPW}
                />
                {formik.touched.newPW && formik.errors.newPW ? (
                    <div className="error-message">{formik.errors.newPW}</div>
                ) : null}
            </div>

            <div>
                <label htmlFor="confirmPW">새로운 비밀번호 확인</label>
                <input
                    type="password"
                    id="confirmPW"
                    name="confirmPW"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.confirmPW}
                />
                {formik.touched.confirmPW && formik.errors.confirmPW ? (
                    <div className="error-message">{formik.errors.confirmPW}</div>
                ) : null}
            </div>

            <MainButton type="submit">비밀번호 변경</MainButton>
        </form>
    );
};

export default ResetPWForm;
