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
  return (
    <li className="card">
      <div className="card-left">
        <img src={cover} alt={`${title} cover`} />
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
          <FeatureBadge fa_icon="fa-brands fa-github fa-2x" link={urlGit} />
          {urlSite && (
            <FeatureBadge fa_icon="fa-solid fa-desktop fa-2x" link={urlSite} />
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
