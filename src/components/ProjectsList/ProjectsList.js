import Project from '../Project/Project';
import './ProjectsList.css';

const ProjectsList = () => {
    const projects = [
        {
            name: 'E-commerce',
            tech: ['React', 'Bootstrap', 'Firebase'],
            image: 'https://i.ibb.co/6WNz5Wd/leather.png',
            linkSite: 'https://leather-life.netlify.app/',
            linkRepo: 'https://github.com/GastonAvogadro/E-Commerce-React',
        },
        {
            name: 'Astro Coaching',
            tech: ['HTML', 'SASS', 'Bootstrap'],
            image: 'https://i.ibb.co/Mhv4Hk0/astro.png',
            linkSite: 'https://astrocoaching.netlify.app/',
            linkRepo: 'https://github.com/GastonAvogadro/AstroCoaching-HTML-CSS',
        },
        {
            name: 'Weather App',
            tech: ['HTML', 'SASS','JavaScript'],
            image: 'https://i.ibb.co/wQvSDTN/weather.png',
            linkSite: 'https://weatherapp-vanillajs.netlify.app/',
            linkRepo: 'https://github.com/GastonAvogadro/WeatherApp-JavaScript-Vanilla',
        },
        {
            name: 'Portfolio',
            tech: ['React', 'CSS'],
            image: 'https://i.ibb.co/p26CrcQ/portfolio.png',
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
