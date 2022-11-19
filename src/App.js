import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import ProjectsContainer from './components/ProjectsContainer/ProjectsContainer';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

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
