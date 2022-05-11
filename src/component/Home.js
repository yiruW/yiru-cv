import {brief} from "../data"
function Home() {
    return (
        <div id="Home" className="Home col-12">
            <div className="Home-introduce">
                <span>{"Hey,"}<br/>{"I'm Yiru Wu"}</span>
            </div>
            <div className="Home-education">
                <span>{"University of Waterloo"}</span><br/>
                <span>{"Computer Engineering"}<br/>{"(Sep 2018 - present)"}</span>
            </div>
            <picture>
                <source srcSet={require('../yiruImage.png')} media="(max-width: 400px)"/>
            </picture>
            <div className="Home-image col-3">
                <img src={require('../yiruImage.png')} alt="yiru"/>
            </div>
            <div className="Home-brief col-3">
             <span>About Me</span>
             <p>{brief()}</p>
            </div>
        </div>
    );
}

export default Home;