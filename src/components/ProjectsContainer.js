import { Slide } from "react-awesome-reveal";
import ProjectsList from './ProjectsList';

const ProjectsContainer = () => {
    return (
        <section className="projectsContainer" id="projects">
            <Slide direction="down" triggerOnce>
                <div className="projectsTitle">
                    <h3>Projects</h3>
                </div>
            </Slide>
            <article className="projectsList">
                <ProjectsList />
            </article>
        </section>
    );
};

export default ProjectsContainer;
