import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { 
  Search, 
  MessageCircle, 
  Globe, 
  Shield, 
  Users, 
  TrendingUp,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import './Home.css';

const Home = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Search size={32} />,
      title: 'Smart Search',
      description: 'Find government schemes quickly with intelligent search and filtering'
    },
    {
      icon: <MessageCircle size={32} />,
      title: 'AI Chatbot',
      description: 'Get instant answers about schemes through our intelligent chatbot'
    },
    {
      icon: <Globe size={32} />,
      title: 'Multi-Language',
      description: 'Access information in English, Hindi, and Marathi'
    },
    {
      icon: <Shield size={32} />,
      title: 'Official Sources',
      description: 'All information comes directly from government sources'
    },
    {
      icon: <Users size={32} />,
      title: 'User Friendly',
      description: 'Easy to use interface designed for everyone'
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Always Updated',
      description: 'Latest scheme information and updates'
    }
  ];

  const stats = [
    { number: '500+', label: 'Government Schemes' },
    { number: '3', label: 'Languages Supported' },
    { number: '24/7', label: 'AI Assistance' },
    { number: '100%', label: 'Official Information' }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title fade-in">
              {t('heroTitle')}
            </h1>
            <p className="hero-subtitle fade-in">
              {t('heroSubtitle')}
            </p>
            <div className="hero-buttons fade-in">
              <Link to="/chatbot" className="btn btn-primary">
                {t('getStarted')}
                <ArrowRight size={20} />
              </Link>
              <Link to="/schemes" className="btn btn-secondary">
                {t('learnMore')}
              </Link>
            </div>
          </div>
          <div className="hero-visual fade-in">
            <div className="hero-illustration">
              <div className="chat-bubble chat-bubble-1">
                <MessageCircle size={24} />
                <span>Ask me about schemes!</span>
              </div>
              <div className="chat-bubble chat-bubble-2">
                <Search size={24} />
                <span>Find your perfect scheme</span>
              </div>
              <div className="chat-bubble chat-bubble-3">
                <Globe size={24} />
                <span>Available in 3 languages</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose Our Platform?</h2>
            <p className="section-subtitle">
              Comprehensive government scheme information at your fingertips
            </p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card bounce-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Explore Government Schemes?</h2>
            <p className="cta-subtitle">
              Start your journey with our AI-powered chatbot and discover schemes that can benefit you
            </p>
            <Link to="/chatbot" className="btn btn-primary btn-large">
              Start Chatting Now
              <ArrowRight size={24} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
