import React from 'react';
import FindPWForm from '../components/forms/FindPWForm';
import '../styles/loginPage.css';

const FindPWPage: React.FC = () => {
    const handleResetPassword = (email: string) => {
        // 비밀번호 재설정 링크 전송 로직 수행
        console.log('비밀번호 재설정 링크를', email, '로 전송합니다.');
    };

    return (
        <div className="findPW-body">
            <div className="findPW-title">비밀번호 찾기</div>
            <div className="findPW-content">
                <FindPWForm onResetPassword={handleResetPassword} />
            </div>
        </div>
    );
};

export default FindPWPage;
