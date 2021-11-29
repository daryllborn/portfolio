import "./about.scss";


const About = () => {
  return (
  <div className="about" id="about">
    <div className="left" id="about-left">
        <div className="imgContainer">
            <img src="assets/project.png" alt="" />
        </div>
    </div>
    <div className="right">
        <div className="wrapper">
            <h1 id="title">About me</h1>
            <p className="paragraph">
            I am an ICT professional, passionate about software engineering and web development and ready for a new adventure.
            </p>
            <br />
            <p className="paragraph">
            Result-oriented, customer-oriented, analytical, a team player and determined. These qualities apply to me.            
            </p>  
            <br />
            <p className="paragraph">
            After completing my Commercial Economics bachelor, I held various positions at various ICT companies, with the focus increasingly shifting to the technical part.
            Thanks to my broad experience, I have acquired good communication skills and developed a strong technical understanding.
            </p>
            <br />
            <p className="paragraph"> 
            I want to continuously develop myself and have strong ambitions to grow into a complete full stack Software Engineer.
            In addition to my knowledge of Python, I focused on learning the JavaScript MERN stack (MongoDB, Express, React, NodeJS)
            </p>
            <br />
            <p className="paragraph">
             In my spare time I like to play chess, trade crypto or forex and take care of my twin boys.
             Do you want to know more? Do not hesitate to contact me!
            </p>
        </div>
    </div>        
</div>
)};


export default About;