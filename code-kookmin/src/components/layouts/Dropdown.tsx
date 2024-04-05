import React, { useEffect, useRef, useState } from 'react';
import './Header.css';
import { useAuth } from '../AuthContext';
import { Link } from 'react-router-dom';
import dropdown from '../../assets/dropdown.png';
const Dropdown = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const dropDownRef = useRef(null);
    const { user, logout } = useAuth();
    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="dropdown-menu">
            <div className="nickname" onClick={handleMenuToggle}>
                <span>{user?.name} </span>
                <img src={dropdown}/>
            </div>
            {isMenuOpen && (
                <div className="menu-options">
                    <ul>
                        <li>
                            <Link className="myInfo" to={'/myInfo'}>
                                마이페이지
                            </Link>
                        </li>
                        <li>
                            <span onClick={logout}>로그아웃</span>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
