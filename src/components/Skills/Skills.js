import { SiHtml5, SiCss3, SiJavascript, SiReact, SiSass, SiBootstrap, SiGit } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
    const skills = [
        {
            name: 'HTML',
            icon: <SiHtml5 className='html'/>,
        },
        {
            name: 'CSS',
            icon: <SiCss3 />,
        },
        {
            name: 'JavaScript',
            icon: <SiJavascript />,
        },
        {
            name: 'React',
            icon: <SiReact />,
        },
        {
            name: 'SASS',
            icon: <SiSass />,
        },
        {
            name: 'Bootstrap',
            icon: <SiBootstrap />,
        },
        {
            name: 'Git',
            icon: <SiGit />,
        },
    ];

    return (
        <div className='skillsSection'>
            <h3>Tech skills:</h3>
            <ul className='skillsList'>
                {skills.map((skill) => (
                    <li key={skill.name}>
                        {skill.icon}
                        <p>{skill.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Skills;
