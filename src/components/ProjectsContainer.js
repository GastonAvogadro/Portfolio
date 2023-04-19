import { Fade } from 'react-reveal';
import ProjectsList from './ProjectsList';

const ProjectsContainer = () => {
    return (
        <section className="projectsContainer" id="projects">
            <Fade top>
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
