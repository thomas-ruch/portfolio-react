import Card from "../Card";
import projects from "../../datas/projects.json";

function Gallery() {
  return (
    <ul className="gallery">
      {projects.map(({ id, title, cover, description, tags, url }) => (
        <Card
          key={id}
          id={id}
          title={title}
          cover={cover}
          description={description}
          tags={tags}
          url={url}
        />
      ))}
    </ul>
  );
}

export default Gallery;
