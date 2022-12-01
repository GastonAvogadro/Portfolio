import Project from '../Project/Project';
import './ProjectsList.css';

const ProjectsList = () => {
    const projects = [
        {
            name: 'Leather Life',
            tech: ['React', 'Bootstrap', 'Firebase'],
            image: 'https://i.ibb.co/NVj0bqJ/leather.png',
            linkSite: 'https://leather-life.netlify.app/',
            linkRepo: 'https://github.com/GastonAvogadro/E-Commerce-React',
        },
        {
            name: 'Astro Coaching',
            tech: ['HTML', 'SASS', 'Bootstrap'],
            image: 'https://i.ibb.co/z8zgYG8/astro.png',
            linkSite: 'https://astrocoaching.netlify.app/',
            linkRepo: 'https://github.com/GastonAvogadro/AstroCoaching-HTML-CSS',
        },
        {
            name: 'Weather App',
            tech: ['HTML', 'SASS','JavaScript'],
            image: 'https://i.ibb.co/wLVx4RC/weather.png',
            linkSite: 'https://weatherapp-vanillajs.netlify.app/',
            linkRepo: 'https://github.com/GastonAvogadro/WeatherApp-JavaScript-Vanilla',
        },
        {
            name: 'Portfolio',
            tech: ['React', 'CSS'],
            image: 'https://picsum.photos/300/169',
            linkSite: '',
            linkRepo: '',
        },
    ];

    return (
        <>
            {projects.map((project) => (
                <Project
                    key={project.name}
                    name={project.name}
                    tech={project.tech}
                    image={project.image}
                    linkSite={project.linkSite}
                    linkRepo={project.linkRepo}
                />
            ))}
        </>
    );
};

export default ProjectsList;
