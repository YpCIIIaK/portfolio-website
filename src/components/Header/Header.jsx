import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

const Header = ({ sections }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <nav className="nav-container">
        <div className="logo">
          <a href="#home">Portfolio</a>
        </div>
        
        <div className="mobile-menu" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          {sections.map((section) => (
            <li key={section}>
              <a href={`#${section.toLowerCase()}`} onClick={() => setIsOpen(false)}>
                {section}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

Header.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Header;