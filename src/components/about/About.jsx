import "./about.scss";


const About = () => {
  return (
  <div className="about" id="about">
    <div className="left">
        <div className="imgContainer">
            <img src="assets/project.png" alt="" />
        </div>
    </div>
    <div className="right">
        <div className="wrapper">
            <h1>About me</h1>
            <p>I am an ICT professional, passionate about software engineering and web development and ready for a new adventure.
              The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
              making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
              and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years,
              sometimes by accident, sometimes on purpose (injected humour and the like).</p>

            
        </div>

    </div>            
</div>
)};


export default About;