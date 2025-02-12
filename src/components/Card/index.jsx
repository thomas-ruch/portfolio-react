import { useState, useEffect } from "react";
import Tag from "../Tag";
import DropBox from "../DropBox";
import FeatureBadge from "../FeatureBadge";

function Card({
  id,
  title,
  subtitle,
  cover,
  coverSmall,
  description,
  tags,
  urlGit,
  urlSite,
  issues,
  solutions,
  skills,
}) {
  const [currentCover, setCurrentCover] = useState(
    window.innerWidth <= 768 ? coverSmall : cover
  );

  useEffect(() => {
    const handleResize = () => {
      setCurrentCover(window.innerWidth <= 768 ? coverSmall : cover);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [cover, coverSmall]);

  return (
    <li className="card">
      <div className="card-left">
        <img src={currentCover} alt={`${title} cover`} />

        <div className="card-infos">
          <div>
            <h4>{title}</h4>
            <span className="subtitle">{subtitle}</span>
          </div>
          <div className="card-tags">
            {tags.map((elem, index) => (
              <Tag key={index} tag={elem} />
            ))}
          </div>
        </div>
      </div>
      <div className="gradient"></div>
      <div className="card-right">
        {description.map((elem, index) => (
          <p key={index}>{elem}</p>
        ))}
        <div className="card-links">
          <FeatureBadge
            fa_icon="fa-brands fa-github fa-2x"
            link={urlGit}
            ariaLabel="Code GitHub"
          />
          {urlSite && (
            <FeatureBadge
              fa_icon="fa-solid fa-desktop fa-2x"
              link={urlSite}
              ariaLabel="Site internet"
            />
          )}
        </div>
        <DropBox title="Problématiques du projet" content={issues} />
        <DropBox title="Solutions proposées" content={solutions} />
        <DropBox title="Compétences développées" content={skills} />
      </div>
    </li>
  );
}

export default Card;
