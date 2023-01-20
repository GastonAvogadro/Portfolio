import './sass/App.scss';
import NavBar from './components/NavBar';
import Home from './components/Home';
import ProjectsContainer from './components/ProjectsContainer';
import About from './components/About';
import Contact from './components/Contact';

function App() {
    return (
        <>
            <NavBar />
            <Home />
            <ProjectsContainer />
            <About />
            <Contact />
        </>
    );
}

export default App;
