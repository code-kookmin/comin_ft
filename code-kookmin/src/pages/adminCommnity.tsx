import React, { useState } from 'react';
import Sidebar from '../components/layouts/SideBar';
import '../styles/myPage.css';

const AdminCommunity: React.FC = () => {
    // 페이지에서 초기 데이터를 가져오는 로직
    const fetchInitialData = () => {
        // ... API 호출 또는 상태 관리를 통한 데이터 로딩 로직
        return {
            id: 'suwith',
            baekjoonId: 'suwith',
            nickname: '수연',
            state: '정상',
        };
    };

    // const columns = [
    //     { name: 'id', label: '번호', options: { sort: true } },
    //     { name: 'title', label: '제목', options: { sort: true } },
    //     { name: 'writer', label: '작성자', options: { sort: true } },
    // ];

    // 초기 데이터 가져오기
    const initialData = fetchInitialData();

    // 데이터 업데이트 및 저장 로직
    const handleSave = (formData: any) => {
        // ... API 호출 또는 상태 관리를 통한 데이터 저장 로직
        console.log('Form data submitted:', formData);
    };

    return (
        <div className="mypage-body">
            <Sidebar activeItem={'admin/community'} onItemClick={() => {}} />
            <div>내 활동 페이지 내용</div>
        </div>
    );
};

export default AdminCommunity;
