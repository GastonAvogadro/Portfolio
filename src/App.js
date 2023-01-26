import NavBar from './components/NavBar';
import Home from './components/Home';
import ProjectsContainer from './components/ProjectsContainer';
import About from './components/About';
import Contact from './components/Contact';
import ThemeContext from './context/ThemeContext';
import './sass/App.scss';

function App() {
    return (
        <>
            <ThemeContext>
                <NavBar />
                <Home />
                <ProjectsContainer />
                <About />
                <Contact />
            </ThemeContext>
        </>
    );
}

export default App;
