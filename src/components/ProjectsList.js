import Project from './Project';
import astroCoaching from '../assets/astroCoaching.png';
import leatherLife from '../assets/leatherLife.png';
import portfolio from '../assets/portfolio.png';
import weather from '../assets/weather.png';

const ProjectsList = () => {
    const projects = [
        {
            name: 'E-commerce',
            tech: ['React', 'Bootstrap', 'Firebase'],
            image: `${leatherLife}`,
            linkSite: 'https://leather-life.netlify.app/',
            linkRepo: 'https://github.com/GastonAvogadro/E-Commerce-React',
        },
        {
            name: 'Portfolio',
            tech: ['React', 'SASS'],
            image: `${portfolio}`,
            linkSite: '',
            linkRepo: '',
        },
        {
            name: 'Astro Coaching',
            tech: ['HTML', 'SASS', 'Bootstrap'],
            image: `${astroCoaching}`,
            linkSite: 'https://astrocoaching.netlify.app/',
            linkRepo: 'https://github.com/GastonAvogadro/AstroCoaching-HTML-CSS',
        },
        {
            name: 'Weather App',
            tech: ['HTML', 'SASS', 'JavaScript'],
            image: `${weather}`,
            linkSite: 'https://weatherapp-vanillajs.netlify.app/',
            linkRepo: 'https://github.com/GastonAvogadro/WeatherApp-JavaScript-Vanilla',
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
