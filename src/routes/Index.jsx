import styles from "../styles/index.module.css";
import schoolLogo from "../assets/uncc_logo.png";
import about from "../assets/man_looking_confused.png";
import project from "../assets/projects_image.png";

function CourseCard() {
  return (
    <div className={styles.cards}>
      <img src={schoolLogo} alt="school logo" />
      <div className={styles.courseDescription}>
        <h2>Courses</h2>
        <p>List of all courses I have taken at UNC Charlotte</p>
      </div>
    </div>
  );
}

function AboutCard() {
  return (
    <div className={styles.cards}>
      <img src={about} alt="about" />
      <div className={styles.courseDescription}>
        <h2>About</h2>
        <p>Why did I make this</p>
      </div>
    </div>
  );
}

function ProjectsCard() {
  return (
    <div className={styles.cards}>
      <img src={project} alt="school logo" />
      <div className={styles.courseDescription}>
        <h2>Projects</h2>
        <p>List of all personal projects I have done</p>
      </div>
    </div>
  );
}

function Index() {
  return (
    <>
      <header>
        <h1 id={styles.name}>Issac's Notes</h1>
        <ul>
          <div className={styles.options}>
            <a href={"courses/"}>
              <CourseCard />
            </a>
            <a href={"projects/"}>
              <ProjectsCard />
            </a>
          </div>
        </ul>
      </header>
    </>
  );
}

export default Index;
