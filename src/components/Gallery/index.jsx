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
          urlGit,
          urlSite,
          issues,
          solutions,
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
            urlGit={urlGit}
            urlSite={urlSite}
            issues={issues}
            solutions={solutions}
            skills={skills}
          />
        )
      )}
    </ul>
  );
}

export default Gallery;
