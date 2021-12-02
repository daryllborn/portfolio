import "./about.scss";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="left" id="about-left">
        <div className="wrapper">
          <h1 id="title">About me</h1>
          <p className="paragraph">
            I am an ICT professional, passionate about software engineering and
            web development and always looking for a challenge.
          </p>
          <br />
          <p className="paragraph">
            After completing my Bachelor of Business Administration, I held
            various positions at ICT companies ranging from corporate to start-up. 
            With the focus of my positions increasingly shifting to the technical domain.
            Thanks to my broad experience, I have acquired good communication skills and developed
            a strong technical understanding.
          </p>
          <br />
          <p className="paragraph">
            I want to continuously develop myself and am well on my way to
            grow into a complete full stack Software Engineer. In addition to my
            knowledge of Python, I focused on learning the JavaScript MERN stack
            (MongoDB, Express, React, NodeJS)
          </p>
          <br />
          <p className="paragraph">
            In my spare time I like to play chess, trade crypto or forex and
            take care of my twin boys with my lovely wife.

            <br />
            Do you want to know more? Do not hesitate to contact me!
          </p>
        </div>
      </div>
      <div className="right">
        <div className="imgContainer">
          <img src="assets/coder2.gif" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
