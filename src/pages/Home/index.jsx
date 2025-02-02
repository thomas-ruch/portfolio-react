import Gallery from "../../components/Gallery";
import Skill from "../../components/Skill";
import skills from "../../datas/skills.json";

function Home() {
  return (
    <div>
      <section id="home-title">
        <div className="inner-section">
          <p>Thomas Ruch - Développeur front-end</p>
        </div>
      </section>
      <section id="home-gallery">
        <div className="inner-section">
          <h2>Projets</h2>
          <Gallery />
        </div>
      </section>
      <section id="home-about">
        <div className="inner-section">
          <h2>A propos</h2>
          <p>
            Développeur web passionné et engagé, je viens de terminer une
            formation qui m'a permis d'acquérir des compétences en développement
            front-end et back-end. Ma stack principale comprend React,
            JavaScript, HTML et CSS (SASS) pour concevoir des interfaces
            dynamiques et ergonomiques. Côté back-end, j'ai travaillé avec
            Node.js, Express et MongoDB pour créer des applications performantes
            et évolutives. J'aime relever de nouveaux défis et apprendre en
            continu pour proposer des solutions adaptées aux besoins des
            utilisateurs.
          </p>
        </div>
      </section>
      <section id="home-skills">
        <div className="inner-section">
          <h2>Compétences</h2>
          <div className="list-skills">
            {skills.map(({ id, title, fa_icon }) => (
              <Skill key={id} title={title} fa_icon={fa_icon} />
            ))}
          </div>
        </div>
      </section>
      <section id="home-contact">
        <div className="inner-section">
          <h2>Contact</h2>
        </div>
      </section>
    </div>
  );
}

export default Home;
