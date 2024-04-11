import axios from 'axios';
import { useEffect, useState } from 'react';
import userImg from '../../assets/user1.jpg';
import { DOMAIN_NAME } from '../../App';

interface WinnerProps {
    winnerUser: {
        userId: string;
        password: string;
        name: string;
        birthday: string;
        githubName: string;
        baekjoonName: string;
    }[];
}

const WinnerMsg: React.FC<WinnerProps> = ({ winnerUser }) => {
    let [list, setList] = useState<WinnerProps[]>([]);

    //랭킹 api에서 1,2,3등 가져오기
    function getWinner() {
        axios.get(`${DOMAIN_NAME}/problem/recommendation`).then((result) => {
            console.log(result.data);
            setList(result.data);
        });
    }
    return (
        <>
            <ul className="community-post-comments">
                {winnerUser.map((value, index) => {
                    return (
                        <li>
                            <div className="fist-winner">
                                <span>
                                    <img src={userImg}></img>
                                </span>
                            </div>
                            <div className="second-winner"></div>
                            <div className="third-winner"></div>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default WinnerMsg;
