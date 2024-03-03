import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { tierSVGMap } from "../components/ranking/rankingListContents";

const SmallList = () => {

    interface Question {
        id: number;
        tier: number;
        title: string;
        tag: string[];
        solver: number;
        submit: number;
        correct: number;
    }

    let [list, setList] = useState<Question[]>([
        {
            id: 1293,
            tier: 8,
            title: '큰 수 계산',
            tag: ['그래프 이론'],
            solver: 3,
            submit: 1912,
            correct: 59,
        }, {
            id: 1294,
            tier: 30,
            title: '문자열 장식',
            tag: ['그래프 탐색'],
            solver: 3,
            submit: 1912,
            correct: 59,
        }, {
            id: 1295,
            tier: 18,
            title: '폭탄 받아라',
            tag: ['너비 우선 탐색'],
            solver: 3,
            submit: 1912,
            correct: 59,
        },
    ])

    function getQuestion() {
        axios.get('/recommend/all')
            .then((result) => {
                setList(result.data);
            });
    }

    return (
        <div>
            <div className="smalllist-main">
                <table>
                    <tr className="smalllist-header">
                        <th className="smalllist-header-14">#</th>
                        <th className="smalllist-header-10">난이도</th>
                        <th className="smalllist-header-57">문제 제목</th>
                        <th className="smalllist-header-57">문제 태그</th>
                        <th className="smalllist-header-10">푼 사람</th>
                        <th className="smalllist-header-10">제출</th>
                        <th className="smalllist-header-14">정답 비율</th>
                    </tr>

                    {
                        list.map((value, i) => {
                            return (
                                <tr className="smalllist-item">
                                    <td className="smalllist-td-14">
                                        <div className="smalllist-td">{value.id}</div>
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
                                    <td className="smalllist-td-57"><Link className="smalllist-td" to={`https://www.acmicpc.net/problem/${value.id}`}>{value.title}</Link></td>
                                    <td className="smalllist-td-57"><div className="smalllist-td">{value.tag}</div></td>
                                    <td className="smalllist-td-10"><div className="smalllist-td">{value.solver}</div></td>
                                    <td className="smalllist-td-10"><div className="smalllist-td">{value.submit}</div></td>
                                    <td className="smalllist-td-14"><div className="smalllist-td">{value.correct} / {value.submit}</div></td>
                                </tr>
                            )
                        }
                        )}
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
export default SmallList;