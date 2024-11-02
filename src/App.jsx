import { personalInfo, skills, projects, experience } from './data/portfolioData';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import './App.css';

function App() {
  const sections = ['Home', 'Skills', 'Projects', 'Experience'];

  return (
    <div className="app">
      <Header sections={sections} />
      <main>
        <Hero info={personalInfo} />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Experience experience={experience} />
      </main>
    </div>
  );
}

export default App;