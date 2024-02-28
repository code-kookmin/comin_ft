import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from '../components/layouts/SideBar';
import '../styles/myPage.css';
import ResetPWForm from '../components/forms/ResetPWForm';

const ResetPWPage: React.FC = () => {
    const navigate = useNavigate();
    const { token } = useParams(); // 이 부분은 비밀번호 재설정 링크에서 전달받은 토큰을 가져오도록 수정

    const handleResetPW = (currentPW: string, newPW: string) => {
        // 여기에서 비밀번호 초기화 또는 관련 로직을 처리
        console.log('Current PW:', currentPW);
        console.log('New PW:', newPW);
        // 성공적으로 비밀번호가 변경되면 메인페이지로 이동
        navigate('/');
    };

    return (
        <div className="mypage-body">
            <Sidebar activeItem={'resetPW'} onItemClick={() => {}} />
            <div className="mypage-content">
                <div className="mypage-title">비밀번호 변경</div>
                <div className="mypage-content-form">
                    <ResetPWForm onResetPW={handleResetPW} />
                </div>
            </div>
        </div>
    );
};

export default ResetPWPage;
