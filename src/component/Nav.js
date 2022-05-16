import {AiOutlineGithub, AiOutlineLinkedin} from "react-icons/ai";
import { IconContext } from "react-icons";
import { NavHashLink } from 'react-router-hash-link';

function Nav() {
    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -document.getElementById("Nav").clientHeight;
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }
    function NavLink(prop){
        return(
            <li><NavHashLink smooth to={"/#" + prop.name} scroll={el => scrollWithOffset(el)}>
                <p className="Nav-link">{prop.name}</p>
            </NavHashLink></li>
        )
    }
    return (
        <nav id="Nav" className="Nav col-12">
            <h1 className="Nav-logo">{"Yiru"}</h1>
            <ul className="Nav-bar nav pt-sm-2 justify-content-end"> 
                <NavLink name={"Home"}/>
                <NavLink name={"Work"}/>
                <NavLink name={"Education"}/>
                <NavLink name={"Project"}/>
                <NavLink name={"Contact"}/> 
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