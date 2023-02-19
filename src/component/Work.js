import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import work, {education} from "../data";
import {MdOutlineWork, MdOutlineSchool} from "react-icons/md";
function Work(){
    return (
        <div id="Work" className="Work p-5">
            <div className="module-heading fs-2 mb-5">
                <span>{"Work Experience & Education"}</span>
            </div>
            <VerticalTimeline>
            {work.map((item) => 
                <VerticalTimelineElement
                key={item.key}
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(255, 255, 255)', fontFamily: 'Inria Sans'}}
                contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}
                date={item.duration}
                iconStyle={{ background: 'rgb(102, 178, 255)', color: '#fff' }}
                icon={<MdOutlineWork />}
                >
                    <h3 className="vertical-timeline-element-title">{item.title}</h3>
                    <h4 className="vertical-timeline-element-subtitle">{item.company}</h4>
                    <p>{item.skills}</p>
                    <p>{item.details}</p>
                </VerticalTimelineElement>
            )}
            <div id="Education">
            {education().map((item) =>
                <VerticalTimelineElement
                key={item.key}
                className="vertical-timeline-element--education"
                date={item.duration}
                contentStyle={{fontFamily: 'Inria Sans'}}
                iconStyle={{ background: 'rgb(126, 196, 157)', color: '#fff'}}
                icon={<MdOutlineSchool />}
                >
                    <h3 className="vertical-timeline-element-title">{item.field}</h3>
                    <h4 className="vertical-timeline-element-subtitle">{item.subline}</h4>
                    <p>{item.details}</p>
                </VerticalTimelineElement>
            )}
            </div>
            </VerticalTimeline>
        </div>
    );
}
export default Work;