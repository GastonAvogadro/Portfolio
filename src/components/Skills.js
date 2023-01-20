import { SiHtml5, SiCss3, SiJavascript, SiReact, SiSass, SiBootstrap, SiGit } from 'react-icons/si';

const Skills = () => {
    const skills = [
        {
            name: 'HTML',
            icon: <SiHtml5 size={25}/>,
        },
        {
            name: 'CSS',
            icon: <SiCss3 size={25}/>,
        },
        {
            name: 'JavaScript',
            icon: <SiJavascript size={25}/>,
        },
        {
            name: 'React',
            icon: <SiReact size={25}/>,
        },
        {
            name: 'SASS',
            icon: <SiSass size={25}/>,
        },
        {
            name: 'Bootstrap',
            icon: <SiBootstrap size={25}/>,
        },
        {
            name: 'Git',
            icon: <SiGit size={25}/>,
        },
    ];

    return (
        <div className='skillsSection'>
            <h3>Tech skills:</h3>
            <ul className='skillsList'>
                {skills.map((skill) => (
                    <li key={skill.name} className={skill.name.toLowerCase()}>
                        {skill.icon}
                        <p>{skill.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Skills;
