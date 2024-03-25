import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import tier0 from "../assets/티어아이콘/0.svg";
import { Link } from "react-router-dom";
import { DOMAIN_NAME } from "../App";

interface UnratedQuestion {
    titleKo: string;
    description: string;
    problemId: number
}

const QuestionBox: React.FC<{ question: UnratedQuestion }> = ({ question }) => {
    return (
        <div className="question-box-main">
            <div className="question-box-line"></div>
            <div className="question-box">
                <div className="question-header">
                    <img className="no-tier-img" src={tier0} alt={`Tier0`} />
                    <span className="question-title">{question.titleKo}</span>
                    {/* 이미지 소스 추가 */}
                </div>
                <div className="question-main">
                    <div className="question-main-header">문제 본문</div>
                    <div className="question-detail">{question.description}</div>
                </div>
            </div>
        </div>
    );
};

const RecommendToolTip: React.FC = () => {
    return (
        <div className="smalllistdetail-tooltip-hover">
            <div>
                <h3>티어가 뭔가요?</h3>
                <span>
                    티어는 solved.ac에서 지원되는 기능으로~~ 푼 사람들이 문제의 난이도를 매기고 ~~ 함께 만들어 갈 수 있습니다.<br />
                    많은 사람들이 티어가 매겨지지 않은 문제는 피하는 경향이 있어 문제의 빈부격차가 존재합니다. <br />
                    백준의 생태계를 더 멋있게 만들어 주세요!
                </span>
            </div>
            <hr />
            <div>
                <h3>티어는 어떻게 매기나요?</h3>
                <span>
                    *  플래티넘 4 이상부터 가능<br />
                    티어 정리 어쩌구 저쩌구~<br />
                    티어는 이렇게 매깁니다
                </span>
            </div>
        </div>
    );
};

const QuestionBoxBefore: React.FC<{ question: UnratedQuestion }> = ({ question }) => {
    return (
        <div className="question-box-main">
            <div className="question-box-line question-box-translucent"></div>
            <div className="question-box question-box-translucent">
                <div className="question-header">
                    <img className="no-tier-img" src={tier0} alt={`Tier0`} />
                    <span className="question-title">{question.titleKo}</span>
                </div>
                <div className="question-main">
                    <div className="question-main-header">문제 본문</div>
                    <div className="question-detail">{question.description}</div>
                </div>
            </div>
        </div>
    );
};


const SmallListDetail: React.FC = () => {
    const [tooltip, setTooltip] = useState<boolean>(false);
    const [unratedQuestions, setUnratedQuestions] = useState<UnratedQuestion[]>([]);
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const setTooltipFunction = () => {
        setTooltip(!tooltip);
    };

    const onNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % (unratedQuestions.length));
    };

    const onPreviousClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + (unratedQuestions.length)) % (unratedQuestions.length));
    };

    async function getCategory() {
        try {
            const result = await axios.get(`${DOMAIN_NAME}/problem/recommendation`);
            setUnratedQuestions(result.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        getCategory();
    }, []);

    return (
        <>
            <div className="smalllistdetail-header">
                <h1>티어를 매겨주세요</h1>
                <div className="smalllistdetail-detail">
                    아직 티어가 매겨지지 않은 문제들이 매주 5문제씩 추천됩니다. 여러분도 문제에 도전하고 solved.ac의 기여자가 되세요!
                </div>
                <div className="smalllistdetail-tooltip" onClick={setTooltipFunction}>
                    어떻게 하는 거에요?
                </div>
                {tooltip && <RecommendToolTip />}
            </div>

            <div className="smalllistdetail-main">
                <div className="smalllistdetail-main-now">
                    <QuestionBoxBefore key={0} question={unratedQuestions[(currentIndex - 1 + unratedQuestions.length) % unratedQuestions.length] || { title: "", description: "" }} />
                    <div className="smalllistdetail-button" onClick={onPreviousClick}>
                        <FontAwesomeIcon className="hover-click" icon={faChevronLeft} />
                    </div>
                    <QuestionBox key={1} question={unratedQuestions[currentIndex] || { title: "", description: "" }} />
                    <div className="smalllistdetail-button" onClick={onNextClick}>
                        <FontAwesomeIcon className="hover-click" icon={faChevronRight} />
                    </div>
                    <QuestionBoxBefore key={2} question={unratedQuestions[(currentIndex + 1) % unratedQuestions.length] || { title: "", description: "" }} />
                </div>
            </div>


            <div className="smalllistdetail-footer">
                {unratedQuestions[currentIndex] && (
                    <Link to={`https://www.acmicpc.net/problem/${unratedQuestions[currentIndex].problemId}`}>
                        <button className="question-button hover-click">풀어보기</button>
                    </Link>
                )}
            </div>
        </>
    );
};

export default SmallListDetail;
