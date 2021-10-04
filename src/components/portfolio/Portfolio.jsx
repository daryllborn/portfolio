import "./portfolio.scss";
import { useState, useEffect } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import {
  featuredPortfolio,
  frontEndPortfolio,
  backEndPortfolio,
} from "../../data";
//import { Person, Mail, AccessibilityNew } from "@material-ui/icons"

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
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>React</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
