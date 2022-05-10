import 'react-vertical-timeline-component/style.min.css';
import {project} from "../data";
function Project(){
    function HandleLink(props){
        const source = props.source;
        if(source){
            return <a className="Project-source" target="_blank" rel="noreferrer" href={source}><span>VIEW SOURCE CODE</span></a>
        }
        return;
    }
    return (
        <div className="Project p-5">
            <div className="module-heading fs-2 mb-2">
                <span>{"Projects"}</span>
            </div>
            <div className="container">
                {project().map((item) =>
                    <div key={item.key}>
                        <div className="Project-tag mb-3">
                            {item.skills.map((skill) => 
                                <div key={item.key}>{skill}</div>
                            )}
                        </div> 
                        <h3>{item.field}</h3>
                        <p>{item.breif} </p>
                        <HandleLink source={item.source}/>                     
                    </div>
                )}
            </div> 
         </div>
    );
}
export default Project;