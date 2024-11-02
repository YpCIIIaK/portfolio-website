import PropTypes from 'prop-types';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = ({ projects }) => {
  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

Projects.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
      githubUrl: PropTypes.string.isRequired,
      liveUrl: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Projects;