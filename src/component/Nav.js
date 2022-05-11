import {AiOutlineGithub, AiOutlineLinkedin} from "react-icons/ai";
import { IconContext } from "react-icons";

function Nav() {
    return (
        <nav id="Nav" className="Nav col-12">
            <h1 className="Nav-logo">{"Yiru"}</h1>
            <ul className="Nav-bar nav pt-sm-2 justify-content-end">
                <li className="nav-item"><a className="nav-link" href="#Home">HOME</a></li>
                <li className="nav-item"><a className="nav-link" href="#Work">WORKS</a></li>
                <li className="nav-item"><a className="nav-link" href="#Education">EDUCATIONS</a></li>
                <li className="nav-item"><a className="nav-link" href="#Project">PROJECTS</a></li>
                <li className="nav-item"><a className="nav-link" href="#Contact">CONTACT ME</a></li>
                <li className="nav-item">
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