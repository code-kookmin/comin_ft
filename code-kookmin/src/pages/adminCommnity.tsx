import React, { useState } from 'react';
import Sidebar from '../components/layouts/SideBar';
import '../styles/admin.css';
import AdminTable from '../components/common/AdminTable';
// import { createTheme, ThemeProvider } from '@mui/system';
import { TextField } from '@material-ui/core';

const AdminCommunity: React.FC = () => {
    const headers = ['게시판 이름', '사용여부', '그룹', '읽기 권한', '쓰기 권한', '댓글 권한', '관리']; // 표의 헤더를 정의합니다.
    const allRows = [
        ['문제 추천', '사용', '정보 게시판', '비회원', '일반회원', '일반회원', ''],
        ['문제 추천', '사용', '코딩 게시판', '비회원', '일반회원', '일반회원', ''],
        ['문제 추천', '사용', '정보 게시판', '비회원', '일반회원', '일반회원', ''],
        ['문제 추천', '사용', '정보 게시판', '비회원', '일반회원', '일반회원', ''],
        ['문제 추천', '사용', '코딩 게시판', '비회원', '일반회원', '일반회원', ''],
        ['문제 추천', '사용', '정보 게시판', '비회원', '일반회원', '일반회원', ''],
        ['문제 추천', '사용', '정보 게시판', '비회원', '일반회원', '일반회원', ''],
        ['문제 추천', '사용', '코딩 게시판', '비회원', '일반회원', '일반회원', ''],
        ['문제 추천', '사용', '정보 게시판', '비회원', '일반회원', '일반회원', ''],
        ['문제 추천', '사용', '정보 게시판', '비회원', '일반회원', '일반회원', ''],
        ['문제 추천', '사용', '코딩 게시판', '비회원', '일반회원', '일반회원', ''],
        ['문제 추천', '사용', '정보 게시판', '비회원', '일반회원', '일반회원', ''],
        // 추가적인 행을 이곳에 정의할 수 있습니다.
    ];
    const [search, setSearch] = useState('');
    const [rows, setRows] = useState(allRows);

    //회원 검색
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
        if (event.target.value === '') {
            setRows(allRows);
        } else {
            setRows(allRows.filter((row) => row[0].includes(event.target.value)));
        }
    };

    //회원 삭제
    const handleDelete = (rowIndex: number) => {
        const newRows = [...rows];
        newRows.splice(rowIndex, 1);
        setRows(newRows);
    };

    return (
        <div className="admin-body">
            <Sidebar activeItem={'admin/community'} onItemClick={() => {}} />
            <div className="admin-content">
                <div className="admin-title">커뮤니티 관리</div>
                <div className="admin-content-table">
                    <div className="admin-search">
                        <TextField size="small" variant="outlined" value={search} onChange={handleSearch} />
                    </div>
                    <AdminTable headers={headers} rows={rows} handleDelete={handleDelete} />
                </div>
            </div>
        </div>
    );
};

export default AdminCommunity;
