import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import ArrowToTop from './ArrowToTop';
import Fade from 'react-reveal/Fade';

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
            <div className="heroSection">
                <Fade top>
                    <p>Hi, I am</p>
                </Fade>
                <Fade left>
                    <h1>Gaston Avogadro</h1>

                    <h2>Front-end Developer</h2>
                </Fade>
                <Fade bottom>
                    <div className="viewProjects">
                        <Link
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={handleScrollOffset(20, -20)}
                            duration={500}
                        >
                            View projects
                        </Link>
                    </div>
                </Fade>
            </div>
            <ArrowToTop />
        </section>
    );
};

export default Home;
