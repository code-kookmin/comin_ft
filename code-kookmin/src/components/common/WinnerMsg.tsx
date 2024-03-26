import userImg from '../../assets/user1.jpg';

interface WinnerProps {
    winnerUser: {
        email: 'string';
        password: 'string';
        name: 'string';
        birthday: 'string';
        githubName: 'string';
        baekjoonName: 'string';
    }[];
}

const WinnerMsg: React.FC<WinnerProps> = ({ winnerUser }) => {
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
