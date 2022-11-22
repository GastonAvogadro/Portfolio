import Project from '../Project/Project';
import './ProjectsList.css';

const ProjectsList = () => {
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
        <>
            {projects.map((project) => (
                <Project
                    key={project.name}
                    name={project.name}
                    description={project.description}
                    image={project.image}
                    tech={project.tech}
                    linkSite={project.linkSite}
                    linkRepo={project.linkRepo}
                />
            ))}
        </>
    );
};

export default ProjectsList;
