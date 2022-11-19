import { AiOutlineLink, AiOutlineGithub } from 'react-icons/ai';
import './ProjectsContainer.css';

const ProjectsContainer = () => {
    const projects = [
        {
            name: 'Leather Life',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur sodales',
            image: 'https://picsum.photos/300',
            tech: 'HTML CSS REACT BOOTSTRAP',
            linkSite: 'url',
            linkRepo: 'url',
        },
        {
            name: 'Astro Coaching',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur sodales',
            image: 'https://picsum.photos/300',
            tech: 'HTML CSS REACT BOOTSTRAP',
            linkSite: 'url',
            linkRepo: 'url',
        },
        {
            name: 'Weather App',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur sodales',
            image: 'https://picsum.photos/300',
            tech: 'HTML CSS REACT BOOTSTRAP',
            linkSite: 'url',
            linkRepo: 'url',
        },
        {
            name: 'Portfolio',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur sodales',
            image: 'https://picsum.photos/300',
            tech: 'HTML CSS REACT BOOTSTRAP',
            linkSite: 'url',
            linkRepo: 'url',
        },
    ];

    return (
        <section className="projectsContainer">
            <div className="projectsTitle">
                <h3>Projects</h3>
            </div>
            <article className="projectsList">
                {projects.map((project) => (
                    <div className="projectCard" key={project.name}>
                        <div>
                            <img src="https://picsum.photos/300" alt={project.name} />
                        </div>
                        <div className="projectCard__links">
                            <div>
                                <a href="www.google.com.ar">
                                    <AiOutlineLink size={30} />
                                    <p>Link</p>
                                </a>
                            </div>
                            <div>
                                <a href="www.google.com.ar">
                                    <AiOutlineGithub size={30} />
                                    <p>Github</p>
                                </a>
                            </div>
                        </div>
                        <div className="projectCard__tech">
                            <p>{project.tech}</p>
                        </div>
                        <div className="projectCard__description">
                            <p>{project.description}</p>
                        </div>
                    </div>
                ))}
            </article>
        </section>
    );
};

export default ProjectsContainer;
