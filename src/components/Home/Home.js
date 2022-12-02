import { Link } from 'react-scroll';
import BgAnimated from '../BgAnimated/BgAnimated';
import './Home.css';

const Home = () => {
    return (
        <section className="homeContainer" id="home">
            <BgAnimated />
            <div className="heroSection">
                <p>Hi, I am</p>
                <h1>Gaston Avogadro</h1>
                <h2>Front-end Developer</h2>
            </div>
            <div className="viewProjects">
                <Link to="projects" spy={true} smooth={true} offset={-10} duration={500}>
                    View projects
                </Link>
            </div>
        </section>
    );
};

export default Home;
