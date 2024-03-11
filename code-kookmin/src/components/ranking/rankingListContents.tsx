import React from "react";
import { Link } from "react-router-dom";
import { Ranking } from "./rankingSmallList";

interface RankingListContentsProps {
    list: Ranking[];
}

const RankingListContents: React.FC<RankingListContentsProps> = ({ list }) => {
    return (
        <>
            {list.map((value, index) => (
                <tr className="smalllist-item" key={index}>
                    <td className="smalllist-td-14">
                        <div className="smalllist-td">{index + 1}</div>
                    </td>
                    <td className="smalllist-td-14">
                        <div className="smalllist-td">{value.user_id}</div>
                    </td>
                    <td className="smalllist-td-10">
                        <div className="smalllist-td">{value.tier}</div>
                    </td>
                    <td className="smalllist-td-57">
                        <Link className="smalllist-td" to={`/${value.user_id}`}>{value.bio}</Link>
                    </td>
                    <td className="smalllist-td-57">
                        <div className="smalllist-td">{value.lp}</div>
                    </td>
                    <td className="smalllist-td-10">
                        <div className="smalllist-td">{value.correct}</div>
                    </td>
                    <td className="smalllist-td-10">
                        <div className="smalllist-td">{value.submit}</div>
                    </td>
                    <td className="smalllist-td-14">
                        <div className="smalllist-td">{value.correct} / {value.submit}</div>
                    </td>
                </tr>
            ))}
        </>
    );
};

export default RankingListContents;
