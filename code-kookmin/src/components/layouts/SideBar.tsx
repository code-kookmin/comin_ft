// Sidebar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';
interface SidebarProps {
    activeItem: string | null;
    onItemClick: (item: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeItem, onItemClick }) => {
    //admin 브랜치에서 유저 정보에 따른 관리자 페이지 컨텐츠 유무 함수 구현

    return (
        <div className="sidebar">
            <div className="sidebar-mypage">
                <h1>마이페이지</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/myInfo" className={`nav-text ${activeItem === 'myInfo' ? 'active' : ''}`}>
                                내 정보
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/myActivity"
                                className={`nav-text ${activeItem === 'myActivity' ? 'active' : ''}`}
                            >
                                내 활동
                            </Link>
                        </li>
                        <li>
                            <Link to="/resetPW" className={`nav-text ${activeItem === 'resetPW' ? 'active' : ''}`}>
                                비밀번호 변경
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="sidebar-admin">
                <h1>관리자페이지</h1>
                <nav>
                    <ul>
                        <li>
                            <Link
                                to="/admin/user"
                                className={`nav-text ${activeItem === 'admin/user' ? 'active' : ''}`}
                            >
                                회원 관리
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/admin/community"
                                className={`nav-text ${activeItem === 'admin/community' ? 'active' : ''}`}
                            >
                                커뮤니티 관리
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;
