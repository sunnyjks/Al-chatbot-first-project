import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { 
  ArrowLeft, 
  ExternalLink, 
  Globe, 
  Calendar, 
  Users, 
  Award, 
  FileText, 
  CheckCircle, 
  Info,
  Share2,
  Bookmark
} from 'lucide-react';
import './SchemeDetail.css';

const SchemeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { t, currentLanguage } = useLanguage();
  const [scheme, setScheme] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    // Get scheme data from location state
    if (location.state?.scheme) {
      setScheme(location.state.scheme);
    } else {
      // Redirect to schemes page if scheme not found
      navigate('/schemes');
    }
  }, [location.state, navigate]);

  const handleBack = () => {
    navigate('/schemes');
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: scheme?.title,
        text: scheme?.shortDescription,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  if (!scheme) {
    return (
      <div className="scheme-detail-loading">
        <div className="loading-spinner"></div>
        <p>Loading scheme details...</p>
      </div>
    );
  }

  return (
    <div className="scheme-detail">
      {/* Header */}
      <div className="scheme-detail-header">
        <div className="container">
          <button className="back-btn" onClick={handleBack}>
            <ArrowLeft size={20} />
            Back to Schemes
          </button>
          
          <div className="scheme-header-content">
            <div className="scheme-header-left">
              <div className="scheme-icon-large">{scheme.icon}</div>
              <div className="scheme-header-info">
                <h1 className="scheme-title-large">{scheme.title}</h1>
                <p className="scheme-category-large">{scheme.category}</p>
                <p className="scheme-description-large">{scheme.shortDescription}</p>
              </div>
            </div>
            
            <div className="scheme-header-actions">
              <button 
                className={`bookmark-btn ${isBookmarked ? 'bookmarked' : ''}`}
                onClick={handleBookmark}
                title={isBookmarked ? 'Remove from bookmarks' : 'Add to bookmarks'}
              >
                <Bookmark size={20} />
              </button>
              <button className="share-btn" onClick={handleShare} title="Share scheme">
                <Share2 size={20} />
              </button>
              <a
                href={scheme.officialLink}
                target="_blank"
                rel="noopener noreferrer"
                className="official-portal-btn"
              >
                <Globe size={20} />
                Official Portal
              </a>
            </div>
          </div>
        </div>
      </div>

                {/* Navigation Tabs */}
          <div className="scheme-tabs">
            <div className="container">
              <div className="tab-buttons">
                {[
                  { id: 'overview', label: 'Overview', icon: Info },
                  { id: 'eligibility', label: 'Eligibility', icon: CheckCircle },
                  { id: 'benefits', label: 'Benefits', icon: Award },
                  { id: 'application', label: 'How to Apply', icon: FileText }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <tab.icon size={18} />
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

      {/* Tab Content */}
      <div className="scheme-tab-content">
        <div className="container">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="tab-panel">
              <div className="overview-grid">
                <div className="overview-main">
                  <h2>About the Scheme</h2>
                  <p className="scheme-description-full">{scheme.detailedDescription}</p>
                  
                  <div className="scheme-features">
                    <h3>Key Features</h3>
                    <div className="features-grid">
                      {scheme.features?.map((feature, index) => (
                        <div key={index} className="feature-item">
                          <CheckCircle size={16} />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="overview-sidebar">
                  <div className="scheme-stats-card">
                    <h3>Scheme Statistics</h3>
                    <div className="stat-item">
                      <Calendar size={20} />
                      <div>
                        <strong>Launch Date</strong>
                        <span>{scheme.launchDate}</span>
                      </div>
                    </div>
                    <div className="stat-item">
                      <Users size={20} />
                      <div>
                        <strong>Target Beneficiaries</strong>
                        <span>{scheme.targetBeneficiaries}</span>
                      </div>
                    </div>
                    <div className="stat-item">
                      <Award size={20} />
                      <div>
                        <strong>Budget</strong>
                        <span>{scheme.budget}</span>
                      </div>
                    </div>
                    <div className="stat-item">
                      <CheckCircle size={20} />
                      <div>
                        <strong>Status</strong>
                        <span className={`status ${scheme.status.toLowerCase()}`}>{scheme.status}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Eligibility Tab */}
          {activeTab === 'eligibility' && (
            <div className="tab-panel">
              <h2>Eligibility Criteria</h2>
              <div className="eligibility-content">
                <div className="eligibility-summary">
                  <h3>Basic Eligibility</h3>
                  <p>{scheme.eligibility}</p>
                </div>
                
                <div className="eligibility-details">
                  <h3>Detailed Requirements</h3>
                  <div className="requirements-list">
                    {scheme.detailedEligibility?.map((requirement, index) => (
                      <div key={index} className="requirement-item">
                        <CheckCircle size={16} />
                        <span>{requirement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Benefits Tab */}
          {activeTab === 'benefits' && (
            <div className="tab-panel">
              <h2>Scheme Benefits</h2>
              <div className="benefits-content">
                <div className="benefits-summary">
                  <h3>Key Benefits</h3>
                  <p>{scheme.benefits}</p>
                </div>
                
                <div className="benefits-details">
                  <h3>Detailed Benefits</h3>
                  <div className="benefits-list">
                    {scheme.detailedBenefits?.map((benefit, index) => (
                      <div key={index} className="benefit-item">
                        <Award size={16} />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Application Tab */}
          {activeTab === 'application' && (
            <div className="tab-panel">
              <h2>How to Apply</h2>
              <div className="application-content">
                <div className="application-steps">
                  <h3>Step-by-Step Process</h3>
                  <div className="steps-list">
                    {scheme.howToApply?.map((step, index) => (
                      <div key={index} className="step-item">
                        <div className="step-number">{index + 1}</div>
                        <div className="step-content">
                          <span>{step}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}


        </div>
      </div>
    </div>
  );
};

export default SchemeDetail;
