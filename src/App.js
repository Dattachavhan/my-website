import React, { useState, useEffect } from 'react';
import './App.css';
import { Link, Element, scroller } from 'react-scroll';
import profile from './images/my_photo.jpeg'
import resumePDF from './resume.pdf';
import SkillSection from './SkillSection'

function App() {
  const [activeSection, setActiveSection] = useState('');

  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'contact'];

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.querySelector(`[name="${section}"]`);

        if (element && element.getBoundingClientRect().top <= window.innerHeight * 0.5) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleDownloadResume = () => {
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = resumePDF;
    link.target = '_blank';
    link.download = 'resume.pdf'; // Set the desired filename for the downloaded file
    link.click();

    // Clean up the temporary element
    link.remove();
  };

  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link
              to="about"
              smooth={true}
              className={`navbar-link ${activeSection === 'about' ? 'active' : ''}`}
              onClick={() => scrollToSection('about')}
            >
              About
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              to="skills"
              smooth={true}
              className={`navbar-link ${activeSection === 'skills' ? 'active' : ''}`}
              onClick={() => scrollToSection('skills')}
            >
              Skills
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              to="contact"
              smooth={true}
              className={`navbar-link ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <Element name="about" className="section">
          <div className="about-section">
            <div className="about-image">
              <img src={profile} alt="Person" />
            </div>
            <div className="about-details">
              <h2 className="about-name">Hi There, I Am Dattatraya Chavhan</h2>
              <p className="about-description">
                Experienced Web Developer | Turning Ideas into Stunning Digital Products | Bringing Your Vision to Life through Customized Websites
              </p>
              <button className="download-button" onClick={handleDownloadResume}>
                Download Resume
              </button>
            </div>
          </div>

        </Element>
        <Element name="skills">
          <SkillSection/>
        </Element>
        <Element name="contact" className="section">
          <h2 className="section-title">Contact</h2>
          <p className="section-text">Email: dattachavhan311@gmail.com</p>
          <p className="section-text">Phone: 9561688047</p>
        </Element>
      </main>
      <footer className="footer">
        <p className="footer-text">&copy; 2023 Dattatraya Chavhan</p>
      </footer>
    </div>
  );
}

export default App;
