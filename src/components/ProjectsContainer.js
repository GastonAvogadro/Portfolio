import { Fade } from "react-awesome-reveal";
import ProjectsList from './ProjectsList';

const ProjectsContainer = () => {
    return (
        <section className="projectsContainer" id="projects">
            <Fade delay={300} direction="down" triggerOnce>
                <div className="projectsTitle">
                    <h3>Projects</h3>
                </div>
            </Fade>
            <article className="projectsList">
                <ProjectsList />
            </article>
        </section>
    );
};

export default ProjectsContainer;
