import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { Fade } from 'react-awesome-reveal';
import ArrowToTop from './ArrowToTop';

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
                <Fade delay={1000} direction="down" triggerOnce>
                    <p>Hi, I am</p>
                </Fade>
                <h1>
                    <Fade delay={1e2} cascade damping={1e-1} triggerOnce>
                        Gaston Avogadro
                    </Fade>
                </h1>
                <Fade delay={1000} triggerOnce>
                    <h2>Front-end Developer</h2>
                </Fade>
                <Fade delay={1000} direction="up" triggerOnce>
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
