import React, { useState } from 'react';
import Sidebar from '../components/layouts/SideBar';
import { useNavigate } from 'react-router-dom';
import '../styles/myPage.css';
const MyActivity: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="mypage-body">
            <Sidebar activeItem={'myActivity'} onItemClick={() => {}} />
            <div >내 활동 페이지 내용</div>
        </div>
    );
};
export default MyActivity;
