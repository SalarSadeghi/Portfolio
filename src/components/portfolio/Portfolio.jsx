import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  webPortfolio,
  mobilePortfolio,
  contentPortfolio,
  designPortfolio,
  featuredPortfolio,
} from "../../data";

function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "web": {
        setData(webPortfolio);
        break;
      }
      case "mobile": {
        setData(mobilePortfolio);
        break;
      }
      case "content": {
        setData(contentPortfolio);
        break;
      }
      case "design": {
        setData(designPortfolio);
        break;
      }
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
            key={item.id}
            item={item}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
      </ul>
      <div className="container">
          {data.map(d => (
            <div className="item" key={d.id}>
              <img src={d.img} alt="" />
              <h3>{d.title}</h3>
          </div>
          ))}
      </div>
    </div>
  );
}

export default Portfolio;
