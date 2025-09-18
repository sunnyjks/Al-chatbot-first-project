import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Target, 
  Users, 
  Shield, 
  Globe,
  Award,
  Heart
} from 'lucide-react';
import './About.css';

const About = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Target size={32} />,
      title: 'Our Mission',
      description: 'To bridge the information gap between government schemes and citizens, making essential information accessible to everyone.'
    },
    {
      icon: <Users size={32} />,
      title: 'User-Centric',
      description: 'Designed with the user in mind, providing an intuitive and accessible platform for all age groups.'
    },
    {
      icon: <Shield size={32} />,
      title: 'Reliable Information',
      description: 'All information is sourced directly from official government portals and verified sources.'
    },
    {
      icon: <Globe size={32} />,
      title: 'Multi-Language Support',
      description: 'Available in English, Hindi, and Marathi to serve diverse linguistic communities.'
    }
  ];

  const team = [
    {
      name: 'AI Development Team',
      role: 'Artificial Intelligence & Machine Learning',
      description: 'Specialized in natural language processing and chatbot development.'
    },
    {
      name: 'UI/UX Designers',
      role: 'User Experience & Interface Design',
      description: 'Creating intuitive and beautiful user interfaces for better accessibility.'
    },
    {
      name: 'Government Relations',
      role: 'Policy & Scheme Information',
      description: 'Ensuring accurate and up-to-date information about government schemes.'
    }
  ];

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1 className="about-title">About Our Platform</h1>
          <p className="about-subtitle">
            Empowering citizens with easy access to government scheme information through AI technology
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2>Our Mission</h2>
              <p>
                We believe that every citizen deserves easy access to information about government schemes 
                that can improve their lives. Our AI-powered platform bridges the gap between complex 
                government documentation and the people who need this information most.
              </p>
              <p>
                By leveraging cutting-edge artificial intelligence and natural language processing, 
                we've created an intuitive chatbot that can understand your questions in multiple 
                languages and provide accurate, helpful responses about government schemes.
              </p>
            </div>
            <div className="mission-visual">
              <div className="mission-icon">
                <Heart size={64} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">What Makes Us Special</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2 className="section-title">Our Team</h2>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card bounce-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-description">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="values-content">
            <div className="value-item">
              <div className="value-icon">
                <Award size={32} />
              </div>
              <h3>Excellence</h3>
              <p>We strive for excellence in every aspect of our platform, from user experience to information accuracy.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">
                <Users size={32} />
              </div>
              <h3>Accessibility</h3>
              <p>Making government information accessible to everyone, regardless of language, location, or technical expertise.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">
                <Shield size={32} />
              </div>
              <h3>Trust</h3>
              <p>Building trust through reliable, verified information and transparent communication with our users.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="contact-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Have Questions or Suggestions?</h2>
            <p>
              We're always looking to improve our platform and better serve our users. 
              Your feedback is invaluable to us.
            </p>
            <a href="/contact" className="btn btn-primary">
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
