import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import BgAnimated from '../BgAnimated/BgAnimated';
import ArrowToTop from '../ArrowToTop/ArrowToTop';
import './Home.css';

const Home = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleScrollOffset = (desk, mob) => {
        return windowWidth > 720 ? desk : mob;
    };
    return (
        <section className="homeContainer" id="home">
            <BgAnimated />
            <div className="heroSection">
                <p>Hi, I am</p>
                <h1>Gaston Avogadro</h1>
                <h2>Front-end Developer</h2>
                <div className="viewProjects">
                    <Link
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={handleScrollOffset(-10, -70)}
                        duration={500}
                    >
                        View projects
                    </Link>
                </div>
            </div>
            <ArrowToTop />
        </section>
    );
};

export default Home;
