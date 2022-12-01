import './ProjectTech.css';

const ProjectTech = ({ tech }) => {
    return (
        <div className="projectCard__tech">
            {tech.map((element) => (
                <p key={element}>{element}</p>
            ))}
        </div>
    );
};

export default ProjectTech;
