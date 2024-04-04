import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RankingListContents from "./rankingListContents";
import { DOMAIN_NAME } from "../../App";

export interface Ranking {
    userId: string;
    tier: number;
    bio: string;
    totalSolvedWeight: number;
    totalSolved: number;
}

const RankingList = () => {
    let [list, setList] = useState<Ranking[]>([])

    function getRanking() {
        axios.get(`${DOMAIN_NAME}/user/rankings`)
            .then((result) => {
                setList(result.data);
                console.log(result.data);
            });
    }

    useEffect(() => {
        getRanking()
        // setList(rankingEx)x
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
                        th6="맞힌 문제"
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
}

const RankingTableRow: React.FC<RankingTableRowProps> = (data) => {
    const { th1, th2, th3, th4, th5, th6 } = data;

    return (
        <tr className="smalllist-header">
            <th className="smalllist-header-10">{th1}</th>
            <th className="smalllist-header-14">{th2}</th>
            <th className="smalllist-header-10">{th3}</th>
            <th className="smalllist-header-100">{th4}</th>
            <th className="smalllist-header-14">{th5}</th>
            <th className="smalllist-header-10">{th6}</th>
            {/* <th className="smalllist-header-14">{th7}</th> */}
            {/* <th className="smalllist-header-14">{th8}</th> */}
        </tr>

    )
}
export default RankingList;