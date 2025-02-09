import Card from "../Card";
import projects from "../../datas/projects.json";

function Gallery() {
  return (
    <ul className="gallery">
      {projects.map(
        ({
          id,
          title,
          subtitle,
          cover,
          description,
          tags,
          url,
          difficulties,
          skills,
        }) => (
          <Card
            key={id}
            id={id}
            title={title}
            subtitle={subtitle}
            cover={cover}
            description={description}
            tags={tags}
            url={url}
            difficulties={difficulties}
            skills={skills}
          />
        )
      )}
    </ul>
  );
}

export default Gallery;
