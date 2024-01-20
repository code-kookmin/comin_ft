import { useState } from "react"
import axios from "axios"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import UnratedImg from "../assets/티어아이콘/0.svg"

//작은 크기의 리스트 컴포넌트 -> 나중에 components/common으로 이동
const SmallListDetail = () => {

    let [tooltip, setTooltip] = useState<boolean>(false)
    const setTooltipFunction = () => {
        if (tooltip == false) {
            setTooltip(true)
        } else {
            setTooltip(false)
        }
    }
    let [questionLink, setQuestionLink] = useState<string>('https://www.acmicpc.net/problem/9545')

    function getCategory() {
        axios.get('/recommend/unrated')
            .then((result) => {
                setQuestionLink(result.data);
            });
    }
    return (
        <>
            <div className="smalllistdetail-header">
                <h1>티어를 매겨주세요</h1>
                <div className="smalllistdetail-detail">아직 티어가 매겨지지 않은 문제들이 매주 5문제씩 추천됩니다. 여러분도 문제에 도전하고 solved.ac의 기여자가 되세요!</div>
                <div className="smalllistdetail-tooltip" onClick={setTooltipFunction}>어떻게 하는 거에요?</div>
                {
                    tooltip == true
                        ? <RecommendToolTip/>
                        : null
                }

            </div>

            <div className="smalllistdetail-main">
                <QuestionBoxBefore />
                <div className="smalllistdetail-main-now">
                    <div className="smalllistdetail-button"><FontAwesomeIcon className="hover-click" icon={faChevronLeft}></FontAwesomeIcon></div>

                    <QuestionBox />
                    <div className="smalllistdetail-button"><FontAwesomeIcon className="hover-click" icon={faChevronRight}></FontAwesomeIcon></div>
                </div>
                <QuestionBoxBefore />
            </div >

            <div className="smalllistdetail-footer">
                <Link to={questionLink}><button className="question-button hover-click">풀어보기</button></Link>
            </div>
        </>
    )
}

const RecommendToolTip = () => {
    return (
        <div className="smalllistdetail-tooltip-hover">
            <div>
                <h3>티어가 뭔가요?</h3>
                <span>
                    티어는 solved.ac에서 지원되는 기능으로~~ 푼 사람들이 문제의 난이도를 매기고 ~~ 함께 만들어 갈 수 있습니다.<br />
                    많은 사람들이 티어가 매겨지지 않은 문제는 피하는 경향이 있어 문제의 빈부격차가 존재합니다. <br />
                    백준의 생태계를 더 멋있게 만들어 주세요!</span>
            </div>
            <hr></hr>
            <div>
                <h3>티어는 어떻게 매기나요?</h3>
                <span>*  플래티넘 4 이상부터 가능<br />
                    티어 정리 어쩌구 저쩌구~
                    티어는 이렇게 매깁니다</span>
            </div>
        </div>
    )
}

const QuestionBox = () => {
    interface UnratedQuestion {
        title: string;
        description: string;
    }
    let [unratedQuestion, setUnratedQuestion] = useState<UnratedQuestion>(
        {
            title: '핵폭탄받아라!',
            description: '문제내용에대한내용에대한내용과내용입니다.'
        }
    )
    return (
        <div className="question-box-main">
            <div className="question-box-line"></div>
            <div className="question-box">
                <div className="question-header">
                    <span className="question-title">{unratedQuestion.title}</span>
                    <img src={UnratedImg} className="question-img"></img>
                </div>
                <div className="question-main">
                    <div className="question-main-header">문제 본문</div>
                    <div className="question-detail">{unratedQuestion.description}</div>
                </div>
            </div>
        </div>
    )
}


const QuestionBoxBefore = () => {
    interface UnratedQuestion {
        title: string;
        description: string;
    }
    let [unratedQuestion, setUnratedQuestion] = useState<UnratedQuestion>(
        {
            title: '다른문제제목!',
            description: '문제내용입니다..'
        }
    )
    return (
        <div className="question-box-main">
            <div className="question-box-line question-box-translucent"></div>
            <div className="question-box question-box-translucent">
                <div className="question-header">
                    <span className="question-title">{unratedQuestion.title}</span>
                    <img src={UnratedImg} className="question-img"></img>
                </div>
                <div className="question-main">
                    <div className="question-main-header">문제 본문</div>
                    <div className="question-detail">{unratedQuestion.description}</div>
                </div>
            </div>
        </div>
    )
}

export default SmallListDetail;