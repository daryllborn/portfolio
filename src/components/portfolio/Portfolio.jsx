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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>

              <ul>
                Tech used:
                <li>-------------------------</li>
                <li>> Node.js</li>
                <li>> MongoDB</li>
                <li>> React</li>
                <li>> Sass</li>
                <li>> Socket.io</li>
                <li>> WebRTC</li>
              </ul>
            </div>
            <div className="links">
              <div className="github">
                <GitHubIcon />
                <a
                  href="https://github.com/daryllborn?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                >code
                </a>
              </div>
              <div className="demo">
                <PreviewIcon />
                <a
                  href="https://github.com/daryllborn?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                >demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
