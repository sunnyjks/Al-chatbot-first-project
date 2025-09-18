import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      details: 'info@govschemes.ai',
      description: 'Send us an email anytime'
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      details: '+91 1800-XXX-XXXX',
      description: 'Mon-Fri from 9am to 6pm'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Office',
      details: 'New Delhi, India',
      description: 'Government of India'
    },
    {
      icon: <Clock size={24} />,
      title: 'Support Hours',
      details: '24/7 AI Support',
      description: 'Our chatbot is always available'
    }
  ];

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1 className="contact-title">Get in Touch</h1>
          <p className="contact-subtitle">
            Have questions, suggestions, or need help? We'd love to hear from you.
          </p>
        </div>
      </section>

      <div className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info">
              <h2>Contact Information</h2>
              <p className="info-description">
                Reach out to us through any of these channels. We're here to help you 
                get the most out of our government schemes platform.
              </p>
              
              <div className="info-cards">
                {contactInfo.map((info, index) => (
                  <div key={index} className="info-card fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="info-icon">{info.icon}</div>
                    <div className="info-content">
                      <h3>{info.title}</h3>
                      <p className="info-details">{info.details}</p>
                      <p className="info-description">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-section">
              <h2>Send us a Message</h2>
              <p className="form-description">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              {submitStatus === 'success' && (
                <div className="success-message">
                  <CheckCircle size={20} />
                  <span>Thank you! Your message has been sent successfully.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="error-message">
                  <AlertCircle size={20} />
                  <span>Something went wrong. Please try again.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="What is this about?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="spinner"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How accurate is the information provided?</h3>
              <p>All information is sourced directly from official government portals and verified sources. We regularly update our database to ensure accuracy.</p>
            </div>
            <div className="faq-item">
              <h3>Can I use the chatbot in my preferred language?</h3>
              <p>Yes! Our platform supports English, Hindi, and Marathi. You can switch languages at any time using the language selector.</p>
            </div>
            <div className="faq-item">
              <h3>Is the voice chat feature available on all devices?</h3>
              <p>Voice chat works on most modern browsers and devices that support speech recognition. We recommend using Chrome or Edge for the best experience.</p>
            </div>
            <div className="faq-item">
              <h3>How often is the scheme information updated?</h3>
              <p>We update our database regularly to include new schemes and modifications to existing ones. All information is kept current with official government announcements.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
