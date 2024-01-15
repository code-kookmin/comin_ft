import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const SmallList = () => {

    interface Question {
        id: number;
        tier: string;
        title: string;
        tag: string[];
        solver: number;
        submit: number;
        correct: number;
    }

    let [list, setList] = useState<Question[]>([
        {
            id: 1293,
            tier: '다3',
            title: '큰 수 계산',
            tag: ['집에가기', '무슨무슨 알고리즘'],
            solver: 3,
            submit: 1912,
            correct: 59,
        }, {
            id: 1294,
            tier: '다3',
            title: '큰 수 계산',
            tag: ['집에가기', '무슨무슨 알고리즘'],
            solver: 3,
            submit: 1912,
            correct: 59,
        }, {
            id: 1295,
            tier: '다3',
            title: '큰 수 계산',
            tag: ['집에가기', '무슨무슨 알고리즘'],
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
                        list.map((a, i) => {
                            return (
                                <tr className="smalllist-item">
                                    <td className="smalllist-td-14">
                                        <div className="smalllist-td">{a.id}</div>
                                    </td>
                                    <td className="smalllist-td-10">
                                        <div className="smalllist-td">{a.tier}</div>
                                    </td>
                                    <td className="smalllist-td-57"><Link className="smalllist-td" to={'3'}>{a.title}</Link></td>
                                    <td className="smalllist-td-57"><div className="smalllist-td">{a.tag}</div></td>
                                    <td className="smalllist-td-10"><div className="smalllist-td">{a.solver}</div></td>
                                    <td className="smalllist-td-10"><div className="smalllist-td">{a.submit}</div></td>
                                    <td className="smalllist-td-14"><div className="smalllist-td">{a.correct} / {a.submit}</div></td>
                                </tr>
                            )
                        }
                        )}
                </table>
                <div className="pagenation">
                    {
                        list.length >= 20
                            ?<button> 21~40</button>
                            : null
                    }
                </div>
            </div>
        </div>
    )
}
export default SmallList;