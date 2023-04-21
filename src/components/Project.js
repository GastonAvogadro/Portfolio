import { AiOutlineLink, AiOutlineGithub } from 'react-icons/ai';
import { Fade } from 'react-awesome-reveal';
import ProjectTech from './ProjectTech';

const Project = ({ name, tech, image, linkSite, linkRepo }) => {
    return (
        <Fade delay={300} triggerOnce>
            <div className="projectCard" key={name}>
                <div className="projectCard__img">
                    <img src={image} alt={name} />
                    <div className="projectCard__title">
                        <div>
                            <p>{name}</p>
                        </div>
                    </div>
                </div>
                <div className="projectCard__links">
                    {linkSite && (
                        <div>
                            <a href={linkSite} target="_blank" rel="noopener noreferrer">
                                <AiOutlineLink size={30} />
                                <p>Visit</p>
                            </a>
                        </div>
                    )}
                    <div>
                        <a href={linkRepo} target="_blank" rel="noopener noreferrer">
                            <AiOutlineGithub size={30} />
                            <p>Github</p>
                        </a>
                    </div>
                </div>
                <ProjectTech tech={tech} />
            </div>
        </Fade>
    );
};

export default Project;
