import PropTypes from 'prop-types';
import './Experience.css';

const Experience = ({ experience }) => {
  return (
    <section id="experience" className="experience-section">
      <h2>Work Experience</h2>
      <div className="timeline">
        {experience.map((job, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-content">
              <h3>{job.position}</h3>
              <h4>{job.company}</h4>
              <p className="period">{job.period}</p>
              <p className="description">{job.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

Experience.propTypes = {
  experience: PropTypes.arrayOf(
    PropTypes.shape({
      company: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
      period: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Experience;