import Card from "../Card";
import projects from "../../datas/projects.json";

function Gallery() {
  return (
    <ul className="gallery">
      {projects.map(({ id, title, cover, description, tags }) => (
        <Card
          key={id}
          id={id}
          title={title}
          cover={cover}
          description={description}
          tags={tags}
        />
      ))}
    </ul>
  );
}

export default Gallery;
