import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

interface PageTitleProps {
    pagename: string,
    url: string,
    sort1: string,
    sort2: string
}

const PageTitle: React.FC<PageTitleProps> = ({ pagename, url, sort1, sort2 }) => {

    return (
        <div className="pagetitle">
            <div className="pagetitle-header">
                <Link className="pagetitle-title" to={url}>{pagename}</Link>
                <FontAwesomeIcon className="pagetite-question" icon={faCircleQuestion} />

            </div>
            <div className="pagetitle-sort">
                <div className="pagetitle-menu pagetitle-menu-selected"><span>{sort1}</span></div>
                <Link className="pagetitle-menu" to={'notiers'}><span>{sort2}</span></Link>
            </div>
        </div>
    )
}

export default PageTitle;