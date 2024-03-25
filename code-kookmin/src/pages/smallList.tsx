import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { tierSVGMap } from "../components/ranking/rankingListContents";
import { DOMAIN_NAME } from "../App";

const SmallList = () => {

    interface Question {
        problemId: number;
        level: number;
        titleKo: string;
        tags: string[];
        acceptedUserCount: number;
        averageTries: number;
        correct: number;
    }

    let [list, setList] = useState<Question[]>([])


    function getQuestion() {
        axios.get(`${DOMAIN_NAME}/problem/recommendation`)
            .then((result) => {
                console.log(result.data);
                setList(result.data);
            });
    }

    useEffect(() => {
        getQuestion();
    }, [])

    return (
        <div>
            <div className="smalllist-main">
                <table>
                    <tr className="smalllist-header">
                        <th className="smalllist-header-14">#</th>
                        <th className="smalllist-header-10">난이도</th>
                        <th className="smalllist-header-57">문제 제목</th>
                        <th className="smalllist-header-10">푼 사람</th>
                        <th className="smalllist-header-10">평균 제출 수</th>
                    </tr>

                    {
                        list.map((value, i) => {
                            return (
                                <tr className="smalllist-item">
                                    <td className="smalllist-td-14">
                                        <div className="smalllist-td">{value.problemId}</div>
                                    </td>
                                    <td className="smalllist-td-10">
                                        <div className="smalllist-td">
                                            <img className="tier-small" src={tierSVGMap[value.level]} alt={`Tier ${value.level}`} />
                                        </div>
                                    </td>
                                    <td className="smalllist-td-57"><Link className="smalllist-td" to={`https://www.acmicpc.net/problem/${value.problemId}`}>{value.titleKo}</Link></td>
                                    <td className="smalllist-td-10"><div className="smalllist-td">{value.acceptedUserCount}</div></td>
                                    <td className="smalllist-td-10"><div className="smalllist-td">{value.averageTries}</div></td>
                                </tr>
                            )
                        }
                        )}
                </table>
                <div className="pagenation">
                    <button onClick={() => getQuestion()}>새로고침</button>
                </div>
            </div>
        </div>
    )
}
export default SmallList;