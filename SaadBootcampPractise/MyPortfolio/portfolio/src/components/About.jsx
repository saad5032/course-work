
import InterMarks from "./images/interMarks.png"
import Cmm from "./images/enggCmm.png"
import niuAdmit from "./images/niuAdmit.png"
import offerMath from "./images/offerMath.png"
import bootcamp from "./images/bootcamp.png"

function About() {

    return (


        <div className="about-container">
            <div className="leftpart">
            <h1>My journey </h1>
            <p>I am Saaduddin Syed, currently enrolled in the masters program of Computer Science at NIU. I
                was born in the city of Warangal, Telangana. I completed my primary school at St. Pauls
                English Medium School, where as my completion of high school was at Gowtham Model School in the city of Huderabad and passed with 7.8
                cgpa. Then enrolled in Intermediate at MS. Junior College as an MPC student (MPC signifies Mathematics, Physics, and Chemistry, 
                constituting the trio of fundamental subjects studied within the 10+2 Intermediate curriculum in India) where I tried my best to secure 89%. 
                My major in Engineering was Electronics and Communication where I learned and enhanced skills on 
                concepts like Embedded systems, microProcessors, Digital Signal Processing etc. I tried hard to
                secure a second rank in my department securing a G.P.A of 8.58/10. As I was about to complete my Engineering I came to know that
                Programming is an important skill to learn to boost ones career at that moment I decided to enroll in a masters Program in Computer Science 
                where I came to known about the web development where your programming with creative imagination can give you a beautiful visualization of efficient solutions 
                for the problem occuring in everyday life to human. I always had a passion to knew the complete picture behind the apps we use on daily basis and thus decided to pursue my career as a Full
                stack web developer to have the complete skillset of front and back end.</p>
            </div>

            <div className="rightpart">
                {/* <img src={InterMarks} alt="test" className="scroll" />
                <img src={Cmm} alt="test" className="scroll" /> */}

                <div className="scroll"></div>
                <div className="scroll-1"></div>
                <div className="scroll-2"></div>
                <div className="scroll-3"></div>
                <div className="scroll-4"></div>
                <div className="scroll-5"></div>
    
            </div>
        </div>


    )
}

export default About