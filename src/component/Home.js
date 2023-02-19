import {brief} from "../data"
function Home() {
    return (
        <div id="Home" className="Home container">
            <div class="row">
                <div class="col align-self-start col">
                    <div className="Home-introduce">
                        <span>{"Hey,"}<br/>{"I'm Yiru Wu"}</span>
                    </div>
                    <div className="Home-education">
                        <span>{"University of Waterloo"}</span><br/>
                        <span>{"Computer Engineering"}<br/>{"(Sep 2018 - present)"}</span>
                    </div>
                </div>
                <div className="col align-self-center Home-image col-5">
                    <img src={require('../yiruImage.png')} alt="yiru"/>
                </div>
                <div className="col align-self-end Home-brief col">
                    <span>About Me</span>
                    <p>{brief()}</p>
                </div>

            </div>
        </div>
    );
}

export default Home;