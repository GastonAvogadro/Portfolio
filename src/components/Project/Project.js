import { AiOutlineLink, AiOutlineGithub } from 'react-icons/ai';
import ProjectTech from '../ProjectTech/ProjectTech';
import './Project.css';

const Project = ({ name, tech, image, linkSite, linkRepo }) => {
    return (
        <div className="projectCard" key={name}>
            <div className='projectCard__img'>
                <img src={image} alt={name} />
                <div className='projectCard__title'>
                    <p>{name}</p>
                </div>
            </div>
            <div className="projectCard__links">
                <div>
                    <a href={linkSite}>
                        <AiOutlineLink size={30} />
                        <p>Visit</p>
                    </a>
                </div>
                <div>
                    <a href={linkRepo}>
                        <AiOutlineGithub size={30} />
                        <p>Github</p>
                    </a>
                </div>
            </div>
            <ProjectTech tech={tech} />
        </div>
    );
};

export default Project;
