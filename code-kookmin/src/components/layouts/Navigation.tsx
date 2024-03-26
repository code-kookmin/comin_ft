import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    return (
        <div>
            <div className="navbar">
                <Link className="navbarmenu" to={'/'}>
                    홈
                </Link>
                <Link className="navbarmenu" to={'/community'}>
                    커뮤니티
                </Link>
                <Link className="navbarmenu" to={'/recommend'}>
                    문제 추천
                </Link>
                <Link className="navbarmenu" to={'/ranking'}>
                    금주의 랭킹
                </Link>
            </div>
        </div>
    );
}

export default Navigation;
