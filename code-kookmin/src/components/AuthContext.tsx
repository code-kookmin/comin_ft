import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

// 사용자 데이터 타입 정의
interface User {
    userId: string;
    password: string;
    name: string;
    birthday: string;
    githubName: string;
    baekjoonName: string;
}

// AuthContext에 들어갈 값의 타입 정의
interface AuthContextType {
    user: User | null;
    login: (userData: User) => void;
    logout: () => void;
}

// AuthContext 생성. 초기값은 null이지만, 타입은 AuthContextType을 따릅니다.
const AuthContext = createContext<AuthContextType | null>(null);

// useAuth 훅을 사용하여 AuthContext를 쉽게 사용할 수 있도록 합니다.
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

// AuthProvider 컴포넌트의 props 타입 정의
interface AuthProviderProps {
    children: ReactNode;
}

// AuthProvider 컴포넌트 구현
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const navigate = useNavigate();

    const login = (userData: User) => {
        setUser(userData);
    };

    const logout = () => {
        setUser(null);
        navigate('/');
    };

    return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};
