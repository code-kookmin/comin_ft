import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RankingListContents from "./rankingListContents";

const rankingEx = [
    {
        user_id: 'abc123',
        tier: '다3',
        bio: '큰 수 계산',
        lp: 3,
        correct: 50,
        submit: 150,
    },
    {
        user_id: 'def456',
        tier: '다3',
        bio: '큰 수 계산',
        lp: 3,
        correct: 70,
        submit: 200,
    },
    {
        user_id: 'ghi789',
        tier: '다3',
        bio: '큰 수 계산',
        lp: 3,
        correct: 40,
        submit: 100,
    },
];


export interface Ranking {
    user_id: string;
    tier: string;
    bio: string;
    lp: number;
    correct: number;
    submit: number;
}

const RankingList = () => {
    let [list, setList] = useState<Ranking[]>([])

    function getRanking() {
        axios.get('/recommend/all')
            .then((result) => {
                setList(result.data);
            });
    }

    useEffect(() => {
        // getRanking()
        setList(rankingEx)
    }, [])

    return (
        <div>
            <div className="smalllist-main">
                <table>
                    <RankingTableRow
                        th1="#"
                        th2="아이디"
                        th3="티어"
                        th4="상태 메시지"
                        th5="LP"
                        th6="맞은 문제"
                        th7="제출"
                        th8="정답비율"
                    />
                    <RankingListContents list={list} />
                </table>
                <div className="pagenation">
                    {
                        list.length >= 20
                            ? <button> 21~40</button>
                            : null
                    }
                </div>
            </div>
        </div>
    )
}

interface RankingTableRowProps {
    th1: string;
    th2: string;
    th3: string;
    th4: string;
    th5: string;
    th6: string;
    th7: string;
    th8: string;
}

const RankingTableRow: React.FC<RankingTableRowProps> = (data) => {
    const { th1, th2, th3, th4, th5, th6, th7, th8 } = data;

    return (
        <tr className="smalllist-header">
            <th className="smalllist-header-14">{th1}</th>
            <th className="smalllist-header-10">{th2}</th>
            <th className="smalllist-header-57">{th3}</th>
            <th className="smalllist-header-57">{th4}</th>
            <th className="smalllist-header-10">{th5}</th>
            <th className="smalllist-header-10">{th6}</th>
            <th className="smalllist-header-14">{th7}</th>
            <th className="smalllist-header-14">{th8}</th>
        </tr>

    )
}
export default RankingList;