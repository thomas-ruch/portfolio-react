import Tag from "../Tag";
import DropBox from "../DropBox";

function Card({
  id,
  title,
  subtitle,
  cover,
  description,
  tags,
  urlGit,
  urlSite,
  issues,
  solutions,
  skills,
}) {
  const openUrl = (link) => {
    window.open(link, "_blank");
  };

  return (
    <li className="card">
      <div className="card-left">
        <img src={cover} alt={`${title} cover`} />
        <div className="card-infos">
          <div>
            <h3>{title}</h3>
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
        <button title="Lien GitHub" onClick={() => openUrl(urlGit)}>
          <i className={"fa-brands fa-github fa-2x"}></i>
        </button>
        {urlSite && (
          <button title="Lien vers le site" onClick={() => openUrl(urlSite)}>
            <i className="fa-solid fa-desktop fa-2x"></i>
          </button>
        )}
        <DropBox title="Problématiques rencontrées" content={issues} />
        <DropBox title="Solutions proposées" content={solutions} />
        <DropBox title="Compétences développées" content={skills} />
      </div>
    </li>
  );
}

export default Card;
