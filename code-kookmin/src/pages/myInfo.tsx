import React, { useState } from 'react';
import Sidebar from '../components/layouts/SideBar';
import { useNavigate } from 'react-router-dom';
import '../styles/myPage.css';
import MyInfoForm from '../components/forms/MyInfoForm';

const MyInfo: React.FC = () => {
    // 페이지에서 초기 데이터를 가져오는 로직
    const fetchInitialData = () => {
        // ... API 호출 또는 상태 관리를 통한 데이터 로딩 로직
        return {
            nickname: '수연',
            id: 'suwith',
            baekjoonId: 'suwith',
            birthdate: '2002-07-09',
            email: 'suwith@kookmin.ac.kr',
            externalLink: 'www.naver.com',
            affiliation: '국민대학교',
            profileMessage: 'Hello0000000000',
        };
    };

    // 초기 데이터 가져오기
    const initialData = fetchInitialData();

    // 데이터 업데이트 및 저장 로직
    const handleSave = (formData: any) => {
        // ... API 호출 또는 상태 관리를 통한 데이터 저장 로직
        console.log('Form data submitted:', formData);
    };

    return (
        <div className="mypage-body">
            <Sidebar activeItem={'myInfo'} onItemClick={() => {}} />
            <div className="mypage-content">
                <div className="mypage-title">내 정보</div>
                <div className="mypage-content-form">
                    <MyInfoForm initialValues={initialData} onSubmit={handleSave} />
                </div>
            </div>
        </div>
    );
};

export default MyInfo;
