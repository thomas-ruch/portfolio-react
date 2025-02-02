import Tag from "../Tag";

function Card({ id, title, cover, description, tags, url }) {
  return (
    <li className="card">
      <img src={cover} alt={`${title} cover`} />
      <div className="card-infos">
        <div>
          <h3>{title}</h3>
          <span>{description}</span>
        </div>
        <div className="card-tags">
          {tags.map((elem, index) => (
            <Tag key={index} tag={elem} />
          ))}
        </div>
      </div>
    </li>
  );
}

export default Card;
