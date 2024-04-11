import axios from 'axios';
import { useEffect, useState } from 'react';
import userImg from '../../assets/user1.jpg';
import { DOMAIN_NAME } from '../../App';
import firstWinner from '../../assets/first-winner.png';
import secondWinner from '../../assets/first-winner.png';
import thirdWinner from '../../assets/first-winner.png';

export interface WinnerUser {
    userId: string;
    password: string;
    name: string;
    birthday: string;
    githubName: string;
    baekjoonName: string;
}

const Winners = () => {
    let [list, setList] = useState<WinnerUser[]>([]);

    //랭킹 api에서 1,2,3등 가져오기
    function getWinner() {
        axios.get(`${DOMAIN_NAME}/user/rankings/weight?pageSize=1&pageNumber=1&roundId=1`).then((result) => {
            console.log(result.data);
            setList(result.data);
        });
    }

    useEffect(() => {
        getWinner();
    }, []);

    return (
        <>
            <ul className="community-post-comments">
                {list.map((value, index) => {
                    return (
                        <li>
                            <div className="fist-winner">
                                <span>
                                    <img src={userImg}></img>
                                </span>
                                <span>{value.name}</span>
                                <span>
                                    <img src={firstWinner} />
                                </span>
                            </div>
                            <div className="second-winner">
                                <span>
                                    <img src={userImg}></img>
                                </span>
                                <span>{value.name}</span>
                                <span>
                                    <img src={secondWinner} />
                                </span>
                            </div>
                            <div className="third-winner">
                                <span>
                                    <img src={userImg}></img>
                                </span>
                                <span>{value.name}</span>
                                <span>
                                    <img src={thirdWinner} />
                                </span>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default Winners;
