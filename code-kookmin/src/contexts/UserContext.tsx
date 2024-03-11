import { createContext, useReducer, Dispatch, ReactNode } from 'react';

type UserState = { user: { nickname: string } | null };
type UserAction = { type: 'LOGIN'; payload: { nickname: string } } | { type: 'LOGOUT' };

const initialState: UserState = { user: null };
const UserContext = createContext<{ state: UserState; dispatch: Dispatch<UserAction> }>({
    state: initialState,
    dispatch: () => null,
});

const userReducer = (state: UserState, action: UserAction): UserState => {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, user: action.payload };
        case 'LOGOUT':
            return { ...state, user: null };
        default:
            return state;
    }
};

type UserProviderProps = {
    children: ReactNode;
};

const UserProvider = ({ children }: UserProviderProps) => {
    const [state, dispatch] = useReducer(userReducer, initialState);

    return <UserContext.Provider value={{ state, dispatch }}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
