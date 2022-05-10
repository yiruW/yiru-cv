import {AiOutlineGithub, AiOutlineLinkedin} from "react-icons/ai";
import { IconContext } from "react-icons";
function Nav() {
    return (
        <nav className="Nav col-12">
            <h1 className="Nav-logo">{"Yiru"}</h1>
            <ul className="Nav-bar nav pt-sm-2 justify-content-end">
                <li className="nav-item pe-sm-1"><a className="nav-link active" aria-current="page" href="#">HOME</a></li>
                <li className="nav-item pe-sm-1"><a className="nav-link" href="#">WORKS</a></li>
                <li className="nav-item pe-sm-1"><a className="nav-link" href="#">EDUCATIONS</a></li>
                <li className="nav-item pe-sm-1"><a className="nav-link" href="#">PROJECTS</a></li>
                <li className="nav-item pe-sm-1"><a className="nav-link" href="#">CONTACT ME</a></li>
                <li className="nav-item pe-sm-1">
                    <a target="_blank" rel="noreferrer" href="https://github.com/yiruW" className="nav-link-icon">
                        <IconContext.Provider value={{ color: "#000", className: "icon-link float-left" }}>
                        <div><AiOutlineGithub /></div>
                        </IconContext.Provider>
                    </a>
                </li>
                <li className="nav-item pe-sm-1">
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/yiruwu0720/" className="nav-link-icon">
                        <IconContext.Provider value={{ color: "#000", className: "icon-link float-left" }}>
                        <div><AiOutlineLinkedin /></div>
                        </IconContext.Provider>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;