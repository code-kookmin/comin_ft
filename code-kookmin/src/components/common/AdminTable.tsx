import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    Checkbox,
} from '@material-ui/core';
import '../../styles/admin.css';

interface IProps {
    headers: string[];
    rows: string[][];
    handleDelete: (index: number) => void;
}

const AdminTable: React.FC<IProps> = ({ headers, rows, handleDelete }) => {
    const renderRow = (row: string[], rowIndex: number) => (
        <TableRow key={rowIndex}>
            <TableCell padding="checkbox">
                <Checkbox />
            </TableCell>
            {row.map((cell, cellIndex) => {
                if (headers[cellIndex] === '관리') {
                    // '관리' 열일 때만 버튼 렌더링
                    return (
                        <TableCell key={cellIndex}>
                            <Button>정보수정</Button>
                            <Button onClick={() => handleDelete(rowIndex)}>삭제</Button>
                        </TableCell>
                    );
                }
                return <TableCell key={cellIndex}>{cell}</TableCell>;
            })}
        </TableRow>
    );

    return (
        <TableContainer component={Paper}>
            <Table className="admin-table">
                <TableHead>
                    <TableRow>
                        <TableCell padding="checkbox">
                            <Checkbox />
                        </TableCell>
                        {headers.map((header, index) => (
                            <TableCell key={index}>{header}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>{rows.map((row, rowIndex) => renderRow(row, rowIndex))}</TableBody>
            </Table>
        </TableContainer>
    );
};

export default AdminTable;
