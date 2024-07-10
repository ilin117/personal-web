import styles from "../styles/projects.module.css";
import integral from "../assets/integral.png";

function IntegralCalc() {
  return (
    <div className={styles.cards}>
      <img src={integral} alt="integral" />
      <div className={styles.courseDescription}>
        <h2>Integral Calculator</h2>
      </div>
    </div>
  );
}

function MemeGenerator() {
  return (
    <div className={styles.cards}>
      <img alt="memes" />
      <div className={styles.courseDescription}>
        <h2>Meme Generator</h2>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className={styles.options}>
      <a href={"https://github.com/ilin117/integral-solver"}>
        <IntegralCalc />
      </a>
      <a href={"https://github.com/ilin117/meme_web/"}>
        <MemeGenerator />
      </a>
    </div>
  );
}

export default Projects;
