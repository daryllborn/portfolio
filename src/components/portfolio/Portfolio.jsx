import "./portfolio.scss";
import { useState, useEffect } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import {
  featuredPortfolio,
  frontEndPortfolio,
  backEndPortfolio,
} from "../../data";
import GitHubIcon from "@mui/icons-material/GitHub";
import PreviewIcon from "@mui/icons-material/Preview";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "frontend",
      title: "Frontend",
    },
    {
      id: "backend",
      title: "Backend",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "frontend":
        setData(frontEndPortfolio);
        break;
      case "backend":
        setData(backEndPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((item) => (
          <div className="item">
            <img src={item.img} alt="" />
            <h3>{item.title}</h3>
            <div className="infoContainer">
              <div className="info">
                {item.desc}
              </div>
              <ul>
                Tech used:                                
                {item.skills.map((skill) => (
                  <li> > {skill}</li>
                ))} 
              </ul>
            </div>
            <div className="links">
              <div className="github">                
                <button className="button" onClick={()=> window.open(item.code, "_blank")}><GitHubIcon />Code</button>        
              </div>
              <div className="demo">
                <button className="button" onClick={()=> window.open(item.demo, "_blank")}><PreviewIcon />Demo</button>       
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
