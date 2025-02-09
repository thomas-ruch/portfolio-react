import Tag from "../Tag";
import DropBox from "../DropBox";

function Card({
  id,
  title,
  subtitle,
  cover,
  description,
  tags,
  url,
  difficulties,
  skills,
}) {
  const openUrl = () => {
    window.open(url, "_blank");
  };

  return (
    <li className="card">
      <div className="card-left">
        <img src={cover} alt={`${title} cover`} />
        <div className="card-infos">
          <div>
            <h3>{title}</h3>
            <span>{subtitle}</span>
          </div>
          <button onClick={openUrl}>
            <i className={"fa-brands fa-github fa-2x"}></i>
          </button>
          <div className="card-tags">
            {tags.map((elem, index) => (
              <Tag key={index} tag={elem} />
            ))}
          </div>
        </div>
      </div>
      <div className="gradient"></div>
      <div className="card-right">
        <p>{description}</p>
        <DropBox title="Difficultés rencontrées" content={difficulties} />
        <DropBox title="Compétences acquises" content={skills} />
      </div>
    </li>
  );
}

export default Card;
