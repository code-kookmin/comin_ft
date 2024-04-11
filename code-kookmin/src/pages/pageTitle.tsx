import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface PageTitleProps {
    pagename: string,
    url: string,
    sort1: string,
    sort2?: string,
    url_sort2?: string
}

const PageTitle: React.FC<PageTitleProps> = ({ pagename, url, sort1, sort2, url_sort2 }) => {
    const location = useLocation();
    const [showTooltip, setShowTooltip] = useState(false);

    const handleTooltipToggle = () => {
        setShowTooltip(!showTooltip);
    };

    // 첫 번째 Link에 대한 className 결정
    const firstLinkClassName =
        location.pathname === url
            ? 'pagetitle-menu pagetitle-menu-selected'
            : 'pagetitle-menu';

    // 두 번째 Link에 대한 className 결정
    const secondLinkClassName =
        location.pathname === `${url}/${url_sort2}`
            ? 'pagetitle-menu pagetitle-menu-selected'
            : 'pagetitle-menu';

    return (
        <div className="pagetitle">
            <div className="pagetitle-header">
                <Link className="pagetitle-title" to={url}>{pagename}</Link>
                {pagename === '금주의 랭킹'
                    ? <div
                        className="pagetitle-question-container"
                        onMouseEnter={handleTooltipToggle}
                        onMouseLeave={handleTooltipToggle}
                    >
                        <FontAwesomeIcon className="pagetitle-question" icon={faCircleQuestion} />
                        {showTooltip && (
                            <div className="pagetitle-tooltip">
                                <div className="tooltip-section">
                                    <h3>금주의 랭킹이란?</h3>
                                    <p>금주의 랭킹은 한 주 동안 푼 문제에 점수를 매기고 총 점수를 바탕으로 등수를 매기는 방식입니다.</p>
                                </div>
                                <hr className="tooltip-divider" />
                                <div className="tooltip-section">
                                    <h3>점수 선정 방식</h3>
                                    <ul>
                                        <li>브론즈: 3LP</li>
                                        <li>실버: 5LP</li>
                                        <li>골드: 7LP</li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                    : null
                }

            </div>
            <div className="pagetitle-sort">
                <Link className={firstLinkClassName} to={url}><span>{sort1}</span></Link>
                {url_sort2 && <Link className={secondLinkClassName} to={url_sort2}><span>{sort2}</span></Link>}
            </div>
        </div>
    )
}



export default PageTitle;