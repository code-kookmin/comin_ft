import { Link } from 'react-router-dom';
import './Header.css';
import Navigation from './Navigation';
import logo from '../../assets/logo.png';
import { useAuth } from '../AuthContext';

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <>
            <header className="header">
                <div className="header-top">
                    <div className="header-top-left">
                        <img src={logo} />
                    </div>
                    <div className="header-top-right">
                        {user ? (
                            <>
                                <p>안녕하세요, {user.name}님! 🎉</p>
                                <button onClick={logout}>로그아웃</button>
                            </>
                        ) : (
                            <>
                                <Link className="login" to={'/login'}>
                                    로그인
                                </Link>
                                <Link className="signup" to={'/signup'}>
                                    회원가입
                                </Link>
                            </>
                        )}
                    </div>
                </div>
                <Navigation />
            </header>
        </>
    );
};

export default Header;
