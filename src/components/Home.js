import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { Fade, Slide } from 'react-awesome-reveal';
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
                <Slide direction="down" triggerOnce>
                    <p>Hi, I am</p>
                </Slide>
                <h1>
                    <Fade delay={1e2} cascade damping={1e-1}>
                        Gaston Avogadro
                    </Fade>
                </h1>
                <Slide triggerOnce>
                    <h2>Front-end Developer</h2>
                </Slide>
                <Slide direction="up" triggerOnce>
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
                </Slide>
            </div>
            <ArrowToTop />
        </section>
    );
};

export default Home;
