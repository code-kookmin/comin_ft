import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/homePage.css';
import MainButton from '../components/common/MainButton';
import search from '../assets/search.png';
import WinnerMsg from '../components/common/WinnerMsg';

const user1 = {
    email: 'string',
    password: 'string',
    name: 'string',
    birthday: 'string',
    githubName: 'string',
    baekjoonName: 'string',
};

const HomePage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    // 사용자가 입력할 때마다 setSearchTerm을 통해 searchTerm을 업데이트합니다.
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    // 검색 실행 함수
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // 폼 제출에 의한 페이지 리로드 방지
        console.log(`검색어: ${searchTerm}`); // 예시로 콘솔에 검색어를 출력
        // 여기에 검색어를 사용한 검색 로직을 구현하세요.
    };

    const gotoRanking = () => {
        navigate('/ranking');
    };
    return (
        <div>
            <div>
                <h2>홈페이지</h2>
                <br></br>
                <Link className="myInfo" to={'/myInfo'}>
                    마이페이지
                </Link>
            </div>
            <div className="home-first">
                <div className="circle"></div>
                <div className="home-first-group">
                    <div className="home-first-title">알고리즘의 모든 것</div>
                    <div className="logo">
                        CODE <span>KOOKMIN</span>
                    </div>
                    <div className="home-fisrt-search">
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={handleChange}
                                placeholder="아이디나 닉네임을 검색하세요"
                            />
                            <button type="submit" className="home-first-search-button">
                                <img src={search} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="home-second">
                <div className="home-second-title">금주의 랭킹</div>
                <div className="home-second-subtitle">다음주 주인공은 여러분이 될 수 있습니다!</div>
                <div className="home-second-group">
                    <div className="home-second-left">
                        <div className="home-second-content-title">💪 THE MOST 💪</div>
                        <div className="home-second-content">
                            <span>{/* <WinnerMsg winnerUser={user1} /> */}</span>
                        </div>
                    </div>
                    <div className="home-second-right">
                        <div className="home-second-content-title">🔥 THE BEST 🔥</div>
                        <div className="home-second-content"></div>
                    </div>
                </div>
                <MainButton className="goto-ranking-button" onClick={gotoRanking}>
                    이번주 전체 랭킹 보러가기
                </MainButton>
            </div>
        </div>
    );
};

export default HomePage;
