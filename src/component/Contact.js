import {HiOutlineMail} from "react-icons/hi";
import {AiOutlinePhone} from "react-icons/ai"; 
function Contact(){
    return (
        <div id="Contact" className="Contact">
            <h1 className="module-heading Contact-header">Contact Me</h1>
            <h2 className="module-heading Contact-subHeader">Let's make something great together</h2>
            <div className="Contact-methods">
                <a className="Contact-method" href="mailto:yiru.wu@uwaterloo.ca"><div className="Contact-detail"><HiOutlineMail className="Contact-icon mb-2"/><div>yiru.wu@uwaterloo.ca</div></div></a>
                <a className="Contact-method" href="tel:9059627309"><div className="Contact-detail"><AiOutlinePhone className="Contact-icon mb-2"/><div>905-962-7309</div></div></a>
            </div>
        </div>
    )
}
export default Contact;