import Gallery from "../../components/Gallery";

function Home() {
  return (
    <div>
      <section id="home-title">
        <p>Thomas Ruch - Développeur front-end</p>
      </section>
      <section id="home-gallery">
        <Gallery />
      </section>
      <section id="home-about"></section>
      <section if="home-contact"></section>
    </div>
  );
}

export default Home;
