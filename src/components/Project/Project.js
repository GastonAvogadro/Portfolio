import { AiOutlineLink, AiOutlineGithub } from 'react-icons/ai';
import './Project.css'

const Project = ({name, description, image, tech, linkSite, linkRepo}) => {
    return (
        <div className="projectCard" key={name}>
            <div>
                <img src="https://picsum.photos/300" alt={name} />
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
                <p>{tech}</p>
            </div>
            <div className="projectCard__description">
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Project;
