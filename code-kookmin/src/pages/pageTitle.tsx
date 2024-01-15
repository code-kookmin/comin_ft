import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

interface PageTitleProps {
    pagename: string,
    url: string,
}

const PageTitle: React.FC<PageTitleProps> = ({ pagename, url }) => {

    return (
        <div className="pagetitle">
            <div className="pagetitle-header">
                <Link className="pagetitle-title" to={url}>{pagename}</Link>
                <FontAwesomeIcon className="pagetite-question" icon={faCircleQuestion} />

            </div>
            <div className="pagetitle-sort">
                <div className="pagetitle-menu pagetitle-menu-selected"><span>전체 보기</span></div>
                <Link className="pagetitle-menu" to={'notiers'}><span>티어 매기기</span></Link>
            </div>
        </div>
    )
}

export default PageTitle;