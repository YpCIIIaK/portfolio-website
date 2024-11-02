import PropTypes from 'prop-types';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Hero.css';

const Hero = ({ info }) => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Hi, I'm {info.name}</h1>
        <h2>{info.role}</h2>
        <p>{info.bio}</p>
        
        <div className="social-links">
          <a href={info.github} target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href={info.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href={`mailto:${info.email}`}>
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  info: PropTypes.shape({
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    linkedin: PropTypes.string.isRequired
  }).isRequired
};

export default Hero;