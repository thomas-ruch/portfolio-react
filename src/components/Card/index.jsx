import Tag from "../Tag";

function Card({ id, title, cover, description, tags }) {
  return (
    <li className="card">
      <img src={cover} alt={`${title} cover`} />
      <span>{title}</span>
      <span>{description}</span>
      <div>
        {tags.map((elem, index) => (
          <Tag key={index} tag={elem} />
        ))}
      </div>
    </li>
  );
}

export default Card;
