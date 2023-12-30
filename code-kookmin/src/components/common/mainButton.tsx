// MainButton.tsx

import React from 'react';
import '../../styles/mainButton.css';

type ButtonTypes = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export interface CustomButtonProps extends ButtonTypes {
    onClick?: () => void; // onClick을 optional로 변경
    children: React.ReactNode;
}

const MainButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
    ({ onClick, className, children, ...props }, ref?: React.Ref<HTMLButtonElement>) => {
        const classNames = [className, 'custom-btn'].filter((v) => Boolean(v)).join(' ') || undefined;

        const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
            // 추가적인 클릭 이벤트 처리

            // props로 전달된 onClick 함수 호출
            if (onClick) {
                onClick();
            }

        };

        return (
            <button ref={ref} type="button" className={classNames} onClick={handleClick} {...props}>
                {children}
            </button>
        );
    }
);

export default MainButton;
