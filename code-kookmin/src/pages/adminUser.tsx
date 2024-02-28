import React, { useState } from 'react';
import Sidebar from '../components/layouts/SideBar';
import '../styles/admin.css';
import AdminTable from '../components/common/AdminTable';
import { createTheme, ThemeProvider } from '@mui/system';
import { TextField } from '@material-ui/core';

const AdminUser: React.FC = () => {
    const headers = ['아이디', '이름', '닉네임', '상태', '관리']; // 표의 헤더를 정의합니다.
    const allRows = [
        ['user1', '홍길동', 'hong', '활성', ''],
        ['user2', '이몽룡', 'lee', '비활성', ''],
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
            setRows(allRows.filter((row) => row[1].includes(event.target.value)));
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
            <Sidebar activeItem={'admin/user'} onItemClick={() => {}} />
            <div className="admin-content">
                <div className="admin-title">회원 관리</div>
                <div className="admin-content-table">
                    <div className="admin-search">
                        <TextField
                            size="small"
                            className="search-field"
                            variant="outlined"
                            value={search}
                            onChange={handleSearch}
                        />
                    </div>
                    <AdminTable headers={headers} rows={rows} handleDelete={handleDelete} />
                </div>
            </div>
        </div>
    );
};

export default AdminUser;
