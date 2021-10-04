import './intro.scss'
import { init } from 'ityped'
import { useEffect, useRef } from 'react'

export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
        init(
            textRef.current, {
                showCursor: true,
                backDelay: 1500,
                strings: ["React", "Node", "MERN", "Fullstack"],
            }    
        );
    },[]);


    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/man.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hello World, I'm</h2>
                    <h1>Daryll Born</h1>
                    <h3><span ref={textRef} ></span>Developer</h3>
                    <img src="assets/MERN-logo2.png" alt="" /> 
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" /> 
                </a>
            </div>            
        </div>
    )
}
