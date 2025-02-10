import Gallery from "../../components/Gallery";
import FeatureBadge from "../../components/FeatureBadge";
import skills from "../../datas/skills.json";
import portrait from "../../assets/portrait.webp";

function Home() {
  return (
    <div id="home-main">
      <section id="home-title">
        <div className="inner-section">
          <section className="title-perso">
            <img src={portrait} alt="Thomas Ruch" className="title-portrait" />
            <div className="title-infos">
              <h1>Thomas Ruch</h1>
              <h2>Développeur Frontend</h2>
              <p>
                <i class="fa-solid fa-location-pin fa-lg"></i> Basé en Alsace.
              </p>
              <p>
                <i class="fa-solid fa-envelope fa-lg"></i>{" "}
                <a href="mailto:thomasruch@free.fr">thomasruch@free.fr</a>
              </p>
              <p>
                <i class="fa-solid fa-dice-d6 fa-lg"></i> Code et meeples, même
                passion.
              </p>
              <div class="social-links">
                <FeatureBadge
                  fa_icon="fa-brands fa-github fa-2x"
                  link="https://github.com/thomas-ruch"
                />
                <FeatureBadge
                  fa_icon="fa-brands fa-linkedin fa-2x"
                  link="https://www.linkedin.com/in/thomas-ruch-51a540316/"
                />
              </div>
            </div>
          </section>
        </div>
      </section>
      <section id="home-gallery">
        <div className="inner-section">
          <h3>Projets</h3>
          <Gallery />
        </div>
      </section>
      <section id="home-about">
        <div className="inner-section">
          <h3>A propos</h3>
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
          <h3>Compétences</h3>
          <div className="list-skills">
            {skills.map(({ id, title, fa_icon }) => (
              <FeatureBadge key={id} title={title} fa_icon={fa_icon} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
