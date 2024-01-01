import { faFigma, faSquareGithub, faSquareInstagram } from "@fortawesome/free-brands-svg-icons"
import { faSquarePen } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import logo from '../../assets/logo-white.png';
import notion from '../../assets/notion-icon.png'
import './footer.css'
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <footer>
                {/* 푸터 컴포넌트 */}
                <div className="footer">
                    <div>
                        <Link to="/">
                            <img src={logo} />
                        </Link>
                    </div>
                    <div className="footer-about">
                        <h1>CODEKOOKMIN은 여러분들께 편의를 제공하기 위해 노력합니다.</h1>
                    </div>
                    <div className="footer-members">
                        <IntroduceMember2
                            position='프론트엔드개발'
                            name1='김동연'
                            email1='angrybird2600@gmail.com'
                            blog1="https://github.com/0yeonnnn0"
                            name2='박수연'
                            email2='suwith@kookmin.ac.kr'
                            blog2="https://github.com/suwith"
                        />
                        <IntroduceMember2
                            position='백엔드개발'
                            name1='김용민'
                            email1='louie9798@naver.com'
                            blog1=" https://github.com/kym8821"
                            name2='박종혁'
                            email2='advlls@gmail.com'
                            blog2="404"
                        />
                    </div>
                    <div className="footer-links">
                        <a
                            href='https://github.com/code-kookmin'
                            target="_blank"
                        >
                            <FontAwesomeIcon icon={faSquareGithub} size='2x' />
                        </a>
                        <a className="footer-notion" href="https://www.notion.so/2023-2-KOSS-768cb4c64e584baabaa72ee003de8ebe?pvs=4">
                            <img src={notion}></img>
                        </a>
                        <a href="https://www.figma.com/file/rJg3BwvtW6TjWvk9M9QRJB/Idea-Board?type=whiteboard&node-id=0%3A1&t=PjBXJ8GlRJfo9bY3-1" target="_blank">
                            <FontAwesomeIcon icon={faFigma} size='2x' />
                        </a>
                    </div>
                </div>
            </footer>
        </>
    )
}

interface FooterProps {
    position: string;
    name1: string;
    email1: string;
    blog1: string;
    name2: string;
    email2: string;
    blog2: string;

}

const IntroduceMember2: React.FC<FooterProps> = ({ position, name1, email1, blog1, name2, email2, blog2 }) => {
    return (
        <div className="footer-members-detail">
            <div className="footer-members-position">{position}</div>
            <div className="footer-members-privacy">
                <a className="footer-members-name" href={blog1} target="_blank">{`${name1}`}</a>
                <div className="footer-members-name">{`: ${email1}`}</div>
            </div>
            <div className="footer-members-privacy">
                <a className="footer-members-name" href={blog1} target="_blank">{`${name2}`}</a>
                <div className="footer-members-name">{`: ${email2}`}</div>
            </div>
        </div>
    )
}

export default Footer