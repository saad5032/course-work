import {Link} from "react-router-dom"
import linkdein from './images/linkdein.webp'
import github from './images/github-logo.png'
import insta from './images/Instagram.webp'

function Navbar(){

    return(
        <>
            <div class="navbar">
                <div className="leftpart">
                    <Link to="/" className="meaning">I am Home Mom</Link>
                    {/* clicking Contact we can go to this path /contact which is our contact page */}
                    <Link to="/contact" className="contact">Contact</Link>  
                    <Link to="/about" className="about">About me</Link>
                </div>
             
                <div className="rightpart">
                    <Link to="https://www.linkedin.com/in/saaduddin-syed-9014201b5/" target="_blank" ><img src={linkdein} alt="test" className="img1" /></Link>
                    <Link to="https://github.com/saad5032" target="_blank" ><img src={github} alt="test" className="img2" /></Link>

                </div>
            </div>
        </>
    )
}

export default Navbar;
