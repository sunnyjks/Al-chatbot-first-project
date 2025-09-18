import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Search, Filter, ExternalLink, ArrowRight, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Schemes.css';

const Schemes = () => {
  const { t, currentLanguage } = useLanguage();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredSchemes, setFilteredSchemes] = useState([]);

  // Comprehensive government schemes data with detailed information
  const schemesData = [
    {
      id: 1,
      title: 'PM Kisan Samman Nidhi',
      category: 'agriculture',
      description: 'Direct income support of ₹6,000 per year to eligible farmer families',
      shortDescription: 'Direct income support to eligible farmer families',
      detailedDescription: 'PM Kisan Samman Nidhi is a Central Sector Scheme with 100% funding from the Government of India. The scheme provides income support of ₹6,000 per year to all eligible farmer families across the country in three equal installments of ₹2,000 each every four months.',
      eligibility: 'Small and marginal farmers with cultivable land up to 2 hectares',
      detailedEligibility: [
        'Small and marginal farmers with cultivable land up to 2 hectares',
        'Farmer families with combined landholding up to 2 hectares',
        'All categories of farmers including SC/ST/OBC',
        'Excludes institutional landholders, government employees, and income tax payers'
      ],
      benefits: '₹6,000 per year in three equal installments',
      detailedBenefits: [
        '₹6,000 per year in three equal installments of ₹2,000 each',
        'Direct bank transfer to registered bank accounts',
        'No repayment required',
        'Annual renewal not required',
        'Covers all farmer families across India'
      ],
      howToApply: [
        'Visit the official PM Kisan portal (pmkisan.gov.in)',
        'Click on "Farmer Registration"',
        'Fill the registration form with required details',
        'Upload necessary documents (Aadhaar, land records, bank details)',
        'Submit the form and note the registration number'
      ],
      documents: [
        'Aadhaar card',
        'Land ownership documents',
        'Bank account details',
        'Passport size photograph',
        'Mobile number'
      ],
      officialLink: 'https://pmkisan.gov.in/',
      icon: '🌾',
      launchDate: 'December 2018',
      targetBeneficiaries: '14 crore+ farmer families',
      budget: '₹75,000 crore annually',
      status: 'Active',
      contactInfo: {
        tollFree: '1800-180-1551',
        email: 'pmkisan-ict@gov.in',
        website: 'pmkisan.gov.in'
      },
      youtubeVideo: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    },
    {
      id: 2,
      title: 'PM Fasal Bima Yojana',
      category: 'agriculture',
      description: 'Comprehensive crop insurance scheme for farmers',
      shortDescription: 'Crop insurance for farmers against natural calamities',
      detailedDescription: 'PM Fasal Bima Yojana is a crop insurance scheme that provides comprehensive crop insurance coverage at a very low premium rate. The scheme aims to reduce the premium burden on farmers and ensure early settlement of claims.',
      eligibility: 'All farmers growing notified crops',
      detailedEligibility: [
        'All farmers growing notified crops',
        'Sharecroppers and tenant farmers',
        'Cultivators of food crops and oilseeds',
        'Annual commercial and horticultural crops'
      ],
      benefits: 'Crop damage compensation and premium subsidy',
      detailedBenefits: [
        'Comprehensive risk coverage for crops',
        'Premium as low as 1.5% of sum insured',
        'Claims settled within 2 months',
        'Coverage for natural calamities and pests',
        'No upper limit on government subsidy'
      ],
      howToApply: [
        'Contact nearest Common Service Centre (CSC)',
        'Visit authorized bank branch',
        'Apply through crop insurance company',
        'Submit required documents and premium',
        'Receive insurance certificate'
      ],
      documents: [
        'Aadhaar card',
        'Land records',
        'Bank account details',
        'Crop details and area',
        'Premium payment receipt'
      ],
      officialLink: 'https://pmfby.gov.in/',
      icon: '🌱',
      launchDate: 'January 2016',
      targetBeneficiaries: 'All farmers',
      budget: '₹16,000 crore annually',
      status: 'Active',
      contactInfo: {
        tollFree: '1800-180-1551',
        email: 'support@pmfby.gov.in',
        website: 'pmfby.gov.in'
      },
      youtubeVideo: 'https://www.youtube.com/watch?v=PMFasalBima_Application_Guide'
    },
    {
      id: 3,
      title: 'Beti Bachao Beti Padhao',
      category: 'women',
      description: 'Scheme for survival, protection and education of girl child',
      shortDescription: 'Empowering girl children through education and awareness',
      detailedDescription: 'Beti Bachao Beti Padhao is a Government of India scheme that aims to generate awareness and improve the efficiency of welfare services intended for girls in India. The scheme focuses on preventing gender-biased sex selection and ensuring survival and protection of the girl child.',
      eligibility: 'Families with girl children',
      detailedEligibility: [
        'Girl child born on or after January 22, 2015',
        'Parents must be Indian citizens',
        'Family income should be below ₹7.5 lakhs per annum',
        'Maximum of two girl children per family',
        'Must be enrolled in recognized school'
      ],
      benefits: 'Education support and awareness programs',
      detailedBenefits: [
        'Sukanya Samriddhi Account with 8.0% interest rate',
        'Maximum deposit limit of ₹1.5 lakhs per year',
        'Tax benefits under Section 80C of Income Tax Act',
        'Maturity period of 21 years',
        'Partial withdrawal for education after 18 years'
      ],
      howToApply: [
        'Visit any authorized bank or post office',
        'Fill the Sukanya Samriddhi Account opening form',
        'Submit required documents',
        'Make initial deposit (minimum ₹250)',
        'Account will be opened in the name of the girl child'
      ],
      documents: [
        'Birth certificate of the girl child',
        'Aadhaar card of parents and child',
        'Address proof',
        'Income certificate',
        'Passport size photographs'
      ],
      officialLink: 'https://wcd.nic.in/bbbp-schemes',
      youtubeVideo: 'https://www.youtube.com/watch?v=BetiBachao_Application_Process',
      icon: '👧',
      launchDate: 'January 2015',
      targetBeneficiaries: 'Girl children and their families',
      budget: '₹100 crore annually',
      status: 'Active',
      contactInfo: {
        tollFree: '1098',
        email: 'bbbp-wcd@gov.in',
        website: 'wcd.nic.in/bbbp-schemes'
      },
    },
    {
      id: 4,
      title: 'PM Awas Yojana',
      category: 'housing',
      description: 'Housing for All by 2022 - affordable housing scheme',
      shortDescription: 'Affordable housing for economically weaker sections',
      detailedDescription: 'Pradhan Mantri Awas Yojana (PMAY) is a flagship mission of the Government of India to provide affordable housing to the urban poor. The scheme aims to provide housing for all by 2022 and includes both urban and rural components.',
      eligibility: 'Economically weaker sections',
      detailedEligibility: [
        'Economically Weaker Section (EWS) with annual income up to ₹3 lakhs',
        'Low Income Group (LIG) with annual income between ₹3-6 lakhs',
        'Middle Income Group (MIG) with annual income between ₹6-18 lakhs',
        'Must not own a pucca house anywhere in India',
        'Must not have availed any central assistance under any housing scheme'
      ],
      benefits: 'Financial assistance for house construction',
      detailedBenefits: [
        'Interest subsidy on home loans up to ₹2.67 lakhs',
        'Credit-linked subsidy for MIG categories',
        'Affordable housing in partnership with private developers',
        'Subsidy for construction of new houses',
        'Benefit for enhancement of existing houses'
      ],
      howToApply: [
        'Visit the official PMAY portal (pmaymis.gov.in)',
        'Click on "Citizen Assessment"',
        'Select your category (EWS/LIG/MIG)',
        'Fill the assessment form with personal and income details',
        'Upload required documents',
        'Submit the form and note the assessment number'
      ],
      documents: [
        'Aadhaar card',
        'Income certificate',
        'Caste certificate (if applicable)',
        'Bank account details',
        'Property documents (if applicable)',
        'Employment certificate'
      ],
      officialLink: 'https://pmaymis.gov.in/',
      icon: '🏠',
      launchDate: 'June 2015',
      targetBeneficiaries: '2 crore+ households',
      budget: '₹2.03 lakh crore',
      status: 'Active',
      contactInfo: {
        tollFree: '1800-11-3377',
        email: 'support@pmay.gov.in',
        website: 'pmaymis.gov.in'
      },
      youtubeVideo: 'https://www.youtube.com/watch?v=PMAY_Housing_Scheme_Application'
    },
    {
      id: 5,
      title: 'Ayushman Bharat',
      category: 'health',
      description: 'National Health Protection Mission for healthcare coverage',
      shortDescription: 'Health coverage up to ₹5 lakhs per family per year',
      detailedDescription: 'Ayushman Bharat - Pradhan Mantri Jan Arogya Yojana (PMJAY) is the largest government-funded healthcare program in the world. It provides health coverage up to ₹5 lakhs per family per year for secondary and tertiary care hospitalization.',
      eligibility: 'Economically disadvantaged families',
      detailedEligibility: [
        'Families identified in SECC 2011 database',
        'Rural families falling under deprivation criteria',
        'Urban families with specific occupational categories',
        'Families without any earning adult member',
        'Families with disabled member and no able-bodied adult'
      ],
      benefits: 'Health coverage up to ₹5 lakhs per family per year',
      detailedBenefits: [
        'Health coverage up to ₹5 lakhs per family per year',
        'Covers pre and post hospitalization expenses',
        'No restriction on family size',
        'Covers 1,393 medical procedures',
        'Cashless treatment at empaneled hospitals',
        'Portability across India'
      ],
      howToApply: [
        'Check eligibility on official website (pmjay.gov.in)',
        'Enter your mobile number and Aadhaar number',
        'Verify your details and family information',
        'Download your Ayushman card',
        'Visit any empaneled hospital for treatment',
        'Show your Ayushman card and Aadhaar for verification'
      ],
      documents: [
        'Aadhaar card',
        'Ration card',
        'Income certificate',
        'Caste certificate (if applicable)',
        'Domicile certificate'
      ],
      officialLink: 'https://pmjay.gov.in/',
      icon: '🏥',
      launchDate: 'September 2018',
      targetBeneficiaries: '50 crore+ beneficiaries',
      budget: '₹6,400 crore annually',
      status: 'Active',
      contactInfo: {
        tollFree: '14555',
        email: 'support@pmjay.gov.in',
        website: 'pmjay.gov.in'
      },
      youtubeVideo: 'https://www.youtube.com/watch?v=PMJAY_Health_Card_Registration'
    },
    {
      id: 6,
      title: 'Skill India Mission',
      category: 'youth',
      description: 'National skill development and training program',
      shortDescription: 'Free skill training and certification for youth',
      detailedDescription: 'Skill India Mission is a campaign launched by the Government of India to train over 40 crore people in India in different skills by 2022. The mission aims to create opportunities, space and scope for the development of the talents of the Indian youth.',
      eligibility: 'Youth aged 15-45 years',
      detailedEligibility: [
        'Age between 15-45 years',
        'Indian citizen',
        'Minimum educational qualification varies by course',
        'Unemployed youth, school dropouts, and existing workers',
        'Women, SC/ST, and differently-abled persons given priority'
      ],
      benefits: 'Free skill training and certification',
      detailedBenefits: [
        'Free skill training in various sectors',
        'Placement assistance after training',
        'Certification from recognized institutions',
        'Stipend during training period',
        'Access to job fairs and recruitment drives',
        'Support for self-employment'
      ],
      howToApply: [
        'Visit the official Skill India portal (skillindia.gov.in)',
        'Browse available training programs by sector',
        'Select your preferred course and training center',
        'Fill the online application form',
        'Upload required documents',
        'Submit the application and note the reference number'
      ],
      documents: [
        'Aadhaar card',
        'Educational certificates',
        'Caste certificate (if applicable)',
        'Income certificate',
        'Passport size photographs',
        'Address proof'
      ],
      officialLink: 'https://skillindia.gov.in/',
      icon: '🎯',
      launchDate: 'July 2015',
      targetBeneficiaries: '40 crore+ people by 2022',
      budget: '₹17,000 crore',
      status: 'Active',
      contactInfo: {
        tollFree: '1800-102-8000',
        email: 'support@skillindia.gov.in',
        website: 'skillindia.gov.in'
      },
      youtubeVideo: 'https://www.youtube.com/watch?v=SkillIndia_Training_Registration'
    },
    {
      id: 7,
      title: 'PM Employment Generation Programme',
      category: 'employment',
      description: 'Credit-linked subsidy program for self-employment',
      shortDescription: 'Subsidized loans for entrepreneurs and small businesses',
      detailedDescription: 'PM Employment Generation Programme (PMEGP) is a credit-linked subsidy program for generating self-employment opportunities through establishment of micro-enterprises in the non-farm sector by helping traditional artisans and unemployed youth.',
      eligibility: 'Entrepreneurs and small business owners',
      detailedEligibility: [
        'Individuals above 18 years of age',
        'Self-help groups and institutions',
        'Cooperative societies and trusts',
        'Minimum educational qualification: Class VIII pass',
        'Project cost should not exceed ₹25 lakhs'
      ],
      benefits: 'Subsidized loans and financial assistance',
      detailedBenefits: [
        'Subsidy up to 35% of project cost',
        'Margin money subsidy up to 25%',
        'Interest subsidy for first 3 years',
        'Collateral-free loans up to ₹10 lakhs',
        'Technical and financial support',
        'Training and skill development'
      ],
      howToApply: [
        'Visit nearest KVIC office or authorized bank',
        'Fill the application form with project details',
        'Submit required documents and project report',
        'Undergo interview and project evaluation',
        'Get approval and loan disbursement',
        'Start your business venture'
      ],
      documents: [
        'Aadhaar card and PAN card',
        'Educational certificates',
        'Project report and business plan',
        'Quotations for machinery/equipment',
        'Property documents (if applicable)',
        'Bank statements and income proof'
      ],
      officialLink: 'https://www.kviconline.gov.in/',
      icon: '💼',
      launchDate: '2008-09',
      targetBeneficiaries: 'Lakhs of entrepreneurs',
      budget: '₹8,000 crore',
      status: 'Active',
      contactInfo: {
        tollFree: '1800-102-8000',
        email: 'pmegp@kvic.org.in',
        website: 'kviconline.gov.in'
      },
      youtubeVideo: 'https://www.youtube.com/watch?v=PMEGP_Loan_Application_Process'
    },
    {
      id: 8,
      title: 'Sarva Shiksha Abhiyan',
      category: 'education',
      description: 'Universal elementary education program',
      shortDescription: 'Free and compulsory education for children aged 6-14 years',
      detailedDescription: 'Sarva Shiksha Abhiyan (SSA) is the Government of India\'s flagship program for achieving Universalization of Elementary Education (UEE) in a time bound manner. The program aims to provide free and compulsory education to all children in the age group of 6-14 years.',
      eligibility: 'Children aged 6-14 years',
      detailedEligibility: [
        'All children in the age group of 6-14 years',
        'Children from disadvantaged groups and weaker sections',
        'Children with special needs',
        'Girl children and children from SC/ST communities',
        'Children from minority communities'
      ],
      benefits: 'Free and compulsory education',
      detailedBenefits: [
        'Free and compulsory elementary education',
        'Mid-day meal program for nutritional support',
        'Free textbooks and uniforms',
        'Special focus on girls and disadvantaged groups',
        'Quality education with trained teachers',
        'Infrastructure development in schools'
      ],
      howToApply: [
        'Visit nearest government school or education office',
        'Fill the admission form with required details',
        'Submit birth certificate and address proof',
        'Get admission in appropriate class',
        'Receive free textbooks and uniforms',
        'Benefit from mid-day meal program'
      ],
      documents: [
        'Birth certificate',
        'Aadhaar card',
        'Address proof',
        'Caste certificate (if applicable)',
        'Income certificate (for mid-day meal)',
        'Previous school records (if any)'
      ],
      officialLink: 'https://education.gov.in/',
      icon: '📚',
      launchDate: '2000-01',
      targetBeneficiaries: 'All children aged 6-14 years',
      budget: '₹6,000 crore annually',
      status: 'Active',
      contactInfo: {
        tollFree: '1800-180-1551',
        email: 'ssa@gov.in',
        website: 'education.gov.in'
      },
      youtubeVideo: 'https://www.youtube.com/watch?v=SSA_Education_Scheme_Enrollment'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Schemes', icon: '📋' },
    { id: 'agriculture', label: t('agriculture'), icon: '🌾' },
    { id: 'education', label: t('education'), icon: '📚' },
    { id: 'health', label: t('health'), icon: '🏥' },
    { id: 'employment', label: t('employment'), icon: '💼' },
    { id: 'housing', label: t('housing'), icon: '🏠' },
    { id: 'women', label: t('women'), icon: '👩' },
    { id: 'youth', label: t('youth'), icon: '🎯' }
  ];

  useEffect(() => {
    filterSchemes();
  }, [searchTerm, selectedCategory, currentLanguage]);

  const filterSchemes = () => {
    let filtered = schemesData;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(scheme => scheme.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm.trim()) {
      filtered = filtered.filter(scheme =>
        scheme.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        scheme.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        scheme.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredSchemes(filtered);
  };

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleLearnMore = (scheme) => {
    navigate(`/scheme/${scheme.id}`, { state: { scheme } });
  };

  return (
    <div className="schemes">
      <div className="schemes-hero">
        <div className="container">
          <h1 className="schemes-title">Government Schemes</h1>
          <p className="schemes-subtitle">
            Discover comprehensive information about various government schemes designed to benefit citizens across India
          </p>

        </div>
      </div>

      <div className="schemes-content">
        <div className="container">
          {/* Search and Filter Section */}
          <div className="search-filter-section">
            <div className="search-box">
              <Search size={20} className="search-icon" />
              <input
                type="text"
                placeholder={t('searchSchemes') || "Search schemes by name, description, or category..."}
                value={searchTerm}
                onChange={handleSearch}
                className="search-input"
              />
            </div>
            
            <div className="filter-section">
              <Filter size={20} className="filter-icon" />
              <span className="filter-label">Categories:</span>
              <div className="category-filters">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className={`category-filter ${selectedCategory === category.id ? 'active' : ''}`}
                    onClick={() => handleCategoryClick(category.id)}
                  >
                    <span className="category-icon">{category.icon}</span>
                    <span className="category-label">{category.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Schemes Grid */}
          <div className="schemes-grid">
            {filteredSchemes.length > 0 ? (
              filteredSchemes.map((scheme) => (
                <div key={scheme.id} className="scheme-card fade-in">
                  <div className="scheme-header">
                    <div className="scheme-icon">{scheme.icon}</div>
                    <div className="scheme-category">
                      {categories.find(cat => cat.id === scheme.category)?.label}
                    </div>
                  </div>
                  
                  <h3 className="scheme-title">{scheme.title}</h3>
                  <p className="scheme-description">{scheme.shortDescription}</p>
                  
                  <div className="scheme-details">
                    <div className="scheme-detail">
                      <strong>Eligibility:</strong> {scheme.eligibility}
                    </div>
                    <div className="scheme-detail">
                      <strong>Benefits:</strong> {scheme.benefits}
                    </div>
                    <div className="scheme-detail">
                      <strong>Launch:</strong> {scheme.launchDate}
                    </div>
                    <div className="scheme-detail">
                      <strong>Budget:</strong> {scheme.budget}
                    </div>
                  </div>
                  
                  <div className="scheme-actions">
                    <a
                      href={scheme.officialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="official-link"
                    >
                      Official Portal
                      <ExternalLink size={16} />
                    </a>
                    {scheme.youtubeVideo && (
                      <a
                        href={scheme.youtubeVideo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="youtube-link"
                      >
                        Watch Tutorial
                        <Play size={16} />
                      </a>
                    )}
                    <button 
                      className="learn-more-btn"
                      onClick={() => handleLearnMore(scheme)}
                    >
                      Learn More
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-results">
                <div className="no-results-icon">🔍</div>
                <h3>No schemes found</h3>
                <p>Try adjusting your search criteria or category filter</p>
              </div>
            )}
          </div>

          {/* Results Count */}
          {filteredSchemes.length > 0 && (
            <div className="results-count">
              Showing {filteredSchemes.length} of {schemesData.length} schemes
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Schemes;
