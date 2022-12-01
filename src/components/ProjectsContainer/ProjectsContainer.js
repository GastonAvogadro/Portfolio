import ProjectsList from "../ProjectsList/ProjectsList"
import './ProjectsContainer.css';

const ProjectsContainer = () => {
    return (
        <section className="projectsContainer" id="projects">
            <div className="projectsTitle">
                <h3>Projects</h3>
            </div>
            <article className="projectsList">
                <ProjectsList />
            </article>
        </section>
    );
};

export default ProjectsContainer;
