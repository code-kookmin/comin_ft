import React from "react";
import { Link } from "react-router-dom";
import { Ranking } from "./rankingSmallList";
import tier0 from "../../assets/티어아이콘/0.svg";
import tier1 from "../../assets/티어아이콘/1.svg";
import tier2 from "../../assets/티어아이콘/2.svg";
import tier3 from "../../assets/티어아이콘/3.svg";
import tier4 from "../../assets/티어아이콘/4.svg";
import tier5 from "../../assets/티어아이콘/5.svg";
import tier6 from "../../assets/티어아이콘/6.svg";
import tier7 from "../../assets/티어아이콘/7.svg";
import tier8 from "../../assets/티어아이콘/8.svg";
import tier9 from "../../assets/티어아이콘/9.svg";
import tier10 from "../../assets/티어아이콘/10.svg";
import tier11 from "../../assets/티어아이콘/11.svg";
import tier12 from "../../assets/티어아이콘/12.svg";
import tier13 from "../../assets/티어아이콘/13.svg";
import tier14 from "../../assets/티어아이콘/14.svg";
import tier15 from "../../assets/티어아이콘/15.svg";
import tier16 from "../../assets/티어아이콘/16.svg";
import tier17 from "../../assets/티어아이콘/17.svg";
import tier18 from "../../assets/티어아이콘/18.svg";
import tier19 from "../../assets/티어아이콘/19.svg";
import tier20 from "../../assets/티어아이콘/20.svg";
import tier21 from "../../assets/티어아이콘/21.svg";
import tier22 from "../../assets/티어아이콘/22.svg";
import tier23 from "../../assets/티어아이콘/23.svg";
import tier24 from "../../assets/티어아이콘/24.svg";
import tier25 from "../../assets/티어아이콘/25.svg";
import tier26 from "../../assets/티어아이콘/26.svg";
import tier27 from "../../assets/티어아이콘/27.svg";
import tier28 from "../../assets/티어아이콘/28.svg";
import tier29 from "../../assets/티어아이콘/29.svg";
import tier30 from "../../assets/티어아이콘/30.svg";

interface RankingListContentsProps {
    list: Ranking[];
}

interface TierSVGMap {
    [key: number]: string;
}
export const tierSVGMap: TierSVGMap = {
    0: tier0,
    1: tier1,
    2: tier2,
    3: tier3,
    4: tier4,
    5: tier5,
    6: tier6,
    7: tier7,
    8: tier8,
    9: tier9,
    10: tier10,
    11: tier11,
    12: tier12,
    13: tier13,
    14: tier14,
    15: tier15,
    16: tier16,
    17: tier17,
    18: tier18,
    19: tier19,
    20: tier20,
    21: tier21,
    22: tier22,
    23: tier23,
    24: tier24,
    25: tier25,
    26: tier26,
    27: tier27,
    28: tier28,
    29: tier29,
    30: tier30
};


const RankingListContents: React.FC<RankingListContentsProps> = ({ list }) => {

    return (
        <>
            {list.map((value, index) => (
                <tr className="smalllist-item" key={index}>
                    <td className="smalllist-td-10">
                        <div className="smalllist-td">{index + 1}</div>
                    </td>
                    <td className="smalllist-td-14">
                        <Link to={`https://www.acmicpc.net/user/${value.user_id}`} target="_blank"><div className="smalllist-td">{value.user_id}</div></Link>
                    </td>

                    <td className="smalllist-td-10">
                        <div className="smalllist-td">
                            {value.tier ? (
                                <img className="tier-small" src={tierSVGMap[value.tier]} alt={`Tier ${value.tier}`} />
                            ) : (
                                <div>Tier Unknown</div>
                            )}
                        </div>
                    </td>
                    <td className="smalllist-td-100">
                        <Link className="smalllist-td" to={`https://www.acmicpc.net/user/${value.user_id}`} target="_blank">{value.bio}</Link>
                    </td>
                    <td className="smalllist-td-14">
                        <div className="smalllist-td">{value.lp}</div>
                    </td>
                    <td className="smalllist-td-10">
                        <div className="smalllist-td">{value.correct}</div>
                    </td>
                </tr>
            ))}
        </>
    );
};

export default RankingListContents;