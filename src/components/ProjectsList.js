import Project from './Project';
import astroCoaching from '../assets/astroCoaching.png';
import leatherLife from '../assets/leatherLife.png';
import portfolio from '../assets/portfolio.png';
import weather from '../assets/weather.png';
import NFS from '../assets/NFS.png';
import AF_MKT from '../assets/AF-MKT.png';
import legere from '../assets/legere.png';
import ecoModa from '../assets/ecoModa.jpg';
import constructora from '../assets/constructora.jpg';
import michipedia from '../assets/michipedia.jpg';

const ProjectsList = () => {
    const projects = [
        {
            name: 'Constructora Torres',
            tech: ['React', 'SASS'],
            image: constructora,
            linkSite: 'https://torresalonsoconstructora.com/',
        },
        {
            name: 'Legere',
            tech: ['React', 'SASS', 'Firebase'],
            image: legere,
            linkSite: 'https://legere-vercel.vercel.app',
            linkRepo: 'https://github.com/TimoteoGambella/Legere',
        },
        {
            name: 'Michipedia',
            tech: ['React', 'Redux', 'Axios', 'Tailwind'],
            image: michipedia,
            linkSite: 'https://michipedia.vercel.app/',
            linkRepo: 'https://github.com/GastonAvogadro/Michipedia',
        },
        {
            name: 'Need For Speed (desktop)',
            tech: ['React', 'SASS', 'Firebase'],
            image: NFS,
            linkSite: 'https://need-for-speed-five.vercel.app/',
            linkRepo: 'https://github.com/GastonAvogadro/Need-For-Speed',
        },
        {
            name: 'AF-Marketing',
            tech: ['HTML', 'SASS', 'JavaScript'],
            image: AF_MKT,
            linkSite: 'https://feliaranda.com.ar/',
            linkRepo: 'https://github.com/GastonAvogadro/AF-Marketing',
        },
        {
            name: 'EcoModa',
            tech: ['React Native'],
            image: ecoModa,
            linkRepo: 'https://github.com/GastonAvogadro/Eco-Moda-React-Native',
        },
        {
            name: 'E-commerce',
            tech: ['React', 'Bootstrap', 'Firebase'],
            image: leatherLife,
            linkSite: 'https://leather-life.netlify.app/',
            linkRepo: 'https://github.com/GastonAvogadro/E-Commerce-React',
        },
        {
            name: 'Portfolio',
            tech: ['React', 'SASS'],
            image: portfolio,
            linkSite: 'https://portfolio-avogadro-gaston.netlify.app/',
            linkRepo: 'https://github.com/GastonAvogadro/Portfolio',
        },
        {
            name: 'Astro Coaching',
            tech: ['HTML', 'SASS', 'Bootstrap'],
            image: astroCoaching,
            linkSite: 'https://astrocoaching.netlify.app/',
            linkRepo: 'https://github.com/GastonAvogadro/AstroCoaching-HTML-CSS',
        },
        {
            name: 'Weather App',
            tech: ['HTML', 'SASS', 'JavaScript'],
            image: weather,
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
