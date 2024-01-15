// validationRules.ts
import * as Yup from 'yup';

export const commonValidationRules = {
    //로그인
    userId: Yup.string().required('아이디를 입력하세요'),
    password: Yup.string().required('비밀번호를 입력하세요'),
    //비밀번호 찾기
    email: Yup.string().email('유효한 이메일 주소를 입력하세요.').required('이메일을 입력하세요.'),
    // 다른 공통 유효성 검사 규칙들을 추가할 수 있습니다.
};

export const signupValidationRules = {
    nickname: Yup.string().min(2, '2자 이상을 입력하세요').required('닉네임을 입력하세요.'),
    userId: Yup.string()
        .min(4, '4자 이상을 입력하세요')
        .max(10, '10자 이하로 입력하세요')
        .matches(/^(?=.*[a-z])(?=.*[0-9]).{4,10}$/, '영문 소문자와 숫자를 조합해서 아이디를 입력해주세요')
        .required('아이디를 입력하세요.'),
    baekjoonId: Yup.string().required('백준 아이디를 입력하세요.'),
    affiliation: Yup.string(),
    password: Yup.string()
        .min(4, '8자 이상을 입력하세요')
        .max(10, '15자 이하로 입력하세요')
        .matches(/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,15}$/, '영문과 숫자를 조합해서 비밀번호를 입력해주세요')
        .required('비밀번호를 입력하세요.'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), undefined], '비밀번호가 일치하지 않습니다.')
        .required('비밀번호 확인을 입력하세요.'),
    agreeTerms1: Yup.boolean().oneOf([true], '이용약관에 동의해야 합니다.'),
    agreeTerms2: Yup.boolean().oneOf([true], '개인정보 처리방침에 동의해야 합니다.'),
};

export const resetPWValidationRules = {
    currentPW: Yup.string().required('현재 비밀번호를 입력하세요.'),
    newPW: Yup.string()
        .min(4, '8자 이상을 입력하세요')
        .max(10, '15자 이하로 입력하세요')
        .matches(/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,15}$/, '영문과 숫자를 조합해서 비밀번호를 입력해주세요')
        .required('비밀번호를 입력하세요.'),
    confirmPW: Yup.string()
        .oneOf([Yup.ref('newPW')], '비밀번호가 일치해야 합니다.')
        .required('비밀번호를 확인하세요.'),
};
