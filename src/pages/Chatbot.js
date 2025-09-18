import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Send, Mic, MicOff, Bot, User, Info, ExternalLink, Calendar, Users, Award, FileText } from 'lucide-react';
import './Chatbot.css';

const Chatbot = () => {
  const { t, currentLanguage } = useLanguage();
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [selectedScheme, setSelectedScheme] = useState(null);
  const messagesEndRef = useRef(null);

  // Comprehensive scheme database with detailed information
  const schemesDatabase = {
    'pm kisan': {
      title: 'PM Kisan Samman Nidhi',
      description: 'Direct income support to eligible farmer families',
      eligibility: [
        'Small and marginal farmers with cultivable land up to 2 hectares',
        'Farmer families with combined landholding up to 2 hectares',
        'All categories of farmers including SC/ST/OBC',
        'Excludes institutional landholders, government employees, and income tax payers'
      ],
      benefits: [
        '₹6,000 per year in three equal installments of ₹2,000 each',
        'Direct bank transfer to registered bank accounts',
        'No repayment required',
        'Annual renewal not required'
      ],
      howToApply: [
        'Visit the official PM Kisan portal (pmkisan.gov.in)',
        'Click on "Farmer Registration"',
        'Fill the registration form with required details',
        'Upload necessary documents (Aadhaar, land records, bank details)',
        'Submit the form and note the registration number',
        'Status can be checked using Aadhaar number or registration number'
      ],
      documents: [
        'Aadhaar card',
        'Land ownership documents',
        'Bank account details',
        'Passport size photograph',
        'Mobile number'
      ],
      officialLink: 'https://pmkisan.gov.in/',
      category: 'Agriculture',
      icon: '🌾'
    },
    'ayushman bharat': {
      title: 'Ayushman Bharat - Pradhan Mantri Jan Arogya Yojana (PMJAY)',
      description: 'Health coverage up to ₹5 lakhs per family per year for economically disadvantaged families',
      eligibility: [
        'Families identified in SECC 2011 database',
        'Rural families falling under deprivation criteria',
        'Urban families with specific occupational categories',
        'Families without any earning adult member',
        'Families with disabled member and no able-bodied adult'
      ],
      benefits: [
        'Health coverage up to ₹5 lakhs per family per year',
        'Covers pre and post hospitalization expenses',
        'No restriction on family size',
        'Covers 1,393 medical procedures',
        'Cashless treatment at empaneled hospitals'
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
      category: 'Healthcare',
      icon: '🏥'
    },
    'pm awas yojana': {
      title: 'Pradhan Mantri Awas Yojana (PMAY)',
      description: 'Affordable housing for economically weaker sections and low-income groups',
      eligibility: [
        'Economically Weaker Section (EWS) with annual income up to ₹3 lakhs',
        'Low Income Group (LIG) with annual income between ₹3-6 lakhs',
        'Middle Income Group (MIG) with annual income between ₹6-18 lakhs',
        'Must not own a pucca house anywhere in India',
        'Must not have availed any central assistance under any housing scheme'
      ],
      benefits: [
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
        'Submit the form and note the assessment number',
        'Check application status regularly'
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
      category: 'Housing',
      icon: '🏠'
    },
    'beti bachao beti padhao': {
      title: 'Beti Bachao Beti Padhao (BBBP)',
      description: 'Comprehensive scheme for protection, education, and empowerment of girl children',
      eligibility: [
        'Girl child born on or after January 22, 2015',
        'Parents must be Indian citizens',
        'Family income should be below ₹7.5 lakhs per annum',
        'Maximum of two girl children per family',
        'Must be enrolled in recognized school'
      ],
      benefits: [
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
        'Account will be opened in the name of the girl child',
        'Continue making deposits as per your convenience'
      ],
      documents: [
        'Birth certificate of the girl child',
        'Aadhaar card of parents and child',
        'Address proof',
        'Income certificate',
        'Passport size photographs'
      ],
      officialLink: 'https://wcd.nic.in/bbbp-schemes',
      category: 'Women & Child Development',
      icon: '👧'
    },
    'skill india': {
      title: 'Skill India Mission',
      description: 'National skill development program to provide skill training to youth',
      eligibility: [
        'Age between 15-45 years',
        'Indian citizen',
        'Minimum educational qualification varies by course',
        'Unemployed youth, school dropouts, and existing workers',
        'Women, SC/ST, and differently-abled persons given priority'
      ],
      benefits: [
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
        'Submit the application and note the reference number',
        'Attend the selection process if required'
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
      category: 'Skill Development',
      icon: '🎯'
    }
  };

  useEffect(() => {
    const welcomeMessage = {
      id: 1,
      type: 'bot',
      content: `Hello! I'm your AI Government Schemes Assistant. I can provide detailed information about various government schemes including eligibility criteria, how to apply, benefits, and required documents.

Here are some popular schemes you can ask about:
• PM Kisan Samman Nidhi
• Ayushman Bharat
• PM Awas Yojana
• Beti Bachao Beti Padhao
• Skill India Mission

What would you like to know?`,
      timestamp: new Date()
    };
    setMessages([welcomeMessage]);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    setTimeout(() => {
      const aiResponse = generateAIResponse(inputMessage);
      const botMessage = {
        id: Date.now() + 1,
        type: 'bot',
        content: aiResponse,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 1000);
  };

  const generateAIResponse = (message) => {
    const lowerMessage = message.toLowerCase();
    
    // Check for specific scheme queries
    for (const [key, scheme] of Object.entries(schemesDatabase)) {
      if (lowerMessage.includes(key) || lowerMessage.includes(scheme.title.toLowerCase())) {
        return formatSchemeResponse(scheme);
      }
    }

    // Check for category-based queries
    if (lowerMessage.includes('agriculture') || lowerMessage.includes('farmer') || lowerMessage.includes('kisan')) {
      return `🌾 **Agriculture Schemes Available:**

**PM Kisan Samman Nidhi**
- Direct income support of ₹6,000 per year
- For small and marginal farmers
- Three installments of ₹2,000 each

**PM Fasal Bima Yojana**
- Crop insurance for farmers
- Covers natural calamities and pests
- Premium as low as 1.5% of sum insured

**Kisan Credit Card**
- Easy credit for agricultural needs
- Interest subvention available
- Flexible repayment options

Would you like detailed information about any specific agriculture scheme?`;
    }

    if (lowerMessage.includes('health') || lowerMessage.includes('medical') || lowerMessage.includes('hospital')) {
      return `🏥 **Healthcare Schemes Available:**

**Ayushman Bharat - PMJAY**
- Health coverage up to ₹5 lakhs per family
- Covers 1,393 medical procedures
- Cashless treatment at empaneled hospitals

**PM-JAY SEHAT**
- Health coverage for Jammu & Kashmir residents
- Same benefits as Ayushman Bharat

**PM National Dialysis Program**
- Free dialysis for kidney patients
- Available at district hospitals

Would you like detailed information about any specific healthcare scheme?`;
    }

    if (lowerMessage.includes('education') || lowerMessage.includes('school') || lowerMessage.includes('college')) {
      return `📚 **Education Schemes Available:**

**Sarva Shiksha Abhiyan**
- Universal elementary education
- Free and compulsory education for 6-14 years
- Mid-day meal program included

**PM Scholarship for Higher Education**
- Financial support for higher studies
- For SC/ST/OBC students
- Covers engineering, medical, and other courses

**Beti Bachao Beti Padhao**
- Special focus on girl child education
- Sukanya Samriddhi Account with 8% interest
- Tax benefits under Section 80C

Would you like detailed information about any specific education scheme?`;
    }

    if (lowerMessage.includes('housing') || lowerMessage.includes('house') || lowerMessage.includes('home')) {
      return `🏠 **Housing Schemes Available:**

**PM Awas Yojana (PMAY)**
- Affordable housing for EWS/LIG/MIG
- Interest subsidy up to ₹2.67 lakhs
- Credit-linked subsidy available

**PM Awas Yojana - Gramin**
- Rural housing assistance
- Financial support for construction
- Priority for SC/ST and women

**Credit Linked Subsidy Scheme**
- Interest subsidy on home loans
- For first-time homebuyers
- Various income categories covered

Would you like detailed information about any specific housing scheme?`;
    }

    if (lowerMessage.includes('apply') || lowerMessage.includes('application') || lowerMessage.includes('how to')) {
      return `📝 **General Application Process for Government Schemes:**

1. **Check Eligibility**
   - Verify if you meet the criteria
   - Check income limits and other requirements

2. **Gather Documents**
   - Aadhaar card
   - Income certificate
   - Caste certificate (if applicable)
   - Address proof
   - Bank account details

3. **Apply Online/Offline**
   - Visit official government portals
   - Fill application forms
   - Upload required documents

4. **Track Application**
   - Note application/reference number
   - Check status regularly
   - Follow up if needed

Which specific scheme would you like to apply for? I can provide detailed application steps.`;
    }

    if (lowerMessage.includes('eligibility') || lowerMessage.includes('qualify') || lowerMessage.includes('criteria')) {
      return `✅ **Common Eligibility Criteria for Government Schemes:**

**General Requirements:**
- Indian citizenship
- Valid Aadhaar number
- Bank account in your name
- Mobile number for OTP verification

**Income-Based Schemes:**
- Income certificates required
- Different limits for different categories
- Annual income verification

**Category-Based Schemes:**
- SC/ST/OBC certificates
- EWS (Economically Weaker Section) certificates
- Domicile certificates

**Document Requirements:**
- Identity proof (Aadhaar/PAN)
- Address proof
- Income certificates
- Caste certificates (if applicable)

Which scheme's eligibility would you like to check?`;
    }

    if (lowerMessage.includes('benefits') || lowerMessage.includes('what do i get') || lowerMessage.includes('advantages')) {
      return `🎁 **Common Benefits of Government Schemes:**

**Financial Benefits:**
- Direct cash transfers
- Interest subsidies
- Tax benefits
- Reimbursements

**Service Benefits:**
- Free healthcare
- Free education
- Skill training
- Housing assistance

**Documentation Benefits:**
- Official certificates
- Recognition
- Priority in other schemes
- Better access to services

**Long-term Benefits:**
- Financial security
- Improved living standards
- Better opportunities
- Social inclusion

Which scheme's benefits would you like to know about?`;
    }

    // Default response with suggestions
    return `I can help you with comprehensive information about government schemes! Here's what I can tell you about:

📋 **Scheme Details:** Complete information about any government scheme
✅ **Eligibility:** Who can apply and what criteria to meet
📝 **How to Apply:** Step-by-step application process
🎁 **Benefits:** What you'll receive from the scheme
📄 **Documents:** Required paperwork and certificates
🔗 **Official Links:** Direct links to government portals

**Popular schemes you can ask about:**
• PM Kisan Samman Nidhi
• Ayushman Bharat
• PM Awas Yojana
• Beti Bachao Beti Padhao
• Skill India Mission

Just ask me about any specific scheme or topic!`;
  };

  const formatSchemeResponse = (scheme) => {
    return `🎯 **${scheme.title}** ${scheme.icon}

📖 **Description:** ${scheme.description}

✅ **Eligibility:**
${scheme.eligibility.map(item => `• ${item}`).join('\n')}

🎁 **Benefits:**
${scheme.benefits.map(item => `• ${item}`).join('\n')}

📝 **How to Apply:**
${scheme.howToApply.map((step, index) => `${index + 1}. ${step}`).join('\n')}

📄 **Required Documents:**
${scheme.documents.map(item => `• ${item}`).join('\n')}

🔗 **Official Portal:** [${scheme.officialLink}](${scheme.officialLink})

💡 **Quick Tips:**
• Keep all documents ready before applying
• Double-check your eligibility criteria
• Save your application/reference number
• Check application status regularly

Would you like to know more about any specific aspect of this scheme?`;
  };

  const toggleVoiceChat = () => {
    setIsListening(!isListening);
    // Voice recognition would be implemented here
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="chatbot">
      <div className="chatbot-container">
        <div className="chatbot-header">
          <div className="chatbot-title">
            <Bot size={24} />
            <h1>AI Government Schemes Assistant</h1>
          </div>
          <div className="chatbot-subtitle">
            Get comprehensive information about eligibility, application process, and benefits
          </div>
        </div>

        <div className="chat-messages">
          {messages.map((message) => (
            <div key={message.id} className={`message ${message.type}`}>
              <div className="message-avatar">
                {message.type === 'bot' ? <Bot size={20} /> : <User size={20} />}
              </div>
              <div className="message-content">
                <div className="message-text" dangerouslySetInnerHTML={{ __html: message.content.replace(/\n/g, '<br>') }}></div>
                <div className="message-time">
                  {message.timestamp.toLocaleTimeString()}
                </div>
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="message bot">
              <div className="message-avatar">
                <Bot size={20} />
              </div>
              <div className="message-content">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        <div className="chat-input-section">
          <div className="chat-input-container">
            <textarea
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about government schemes, eligibility, how to apply, benefits..."
              className="chat-input"
              rows="1"
            />
            <div className="input-actions">
              <button
                className={`voice-btn ${isListening ? 'listening' : ''}`}
                onClick={toggleVoiceChat}
                title={isListening ? 'Stop Listening' : 'Start Listening'}
              >
                {isListening ? <MicOff size={20} /> : <Mic size={20} />}
              </button>
              <button
                className="send-btn"
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isLoading}
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="chat-suggestions">
          <h3>Quick Questions:</h3>
          <div className="suggestion-chips">
            {[
              'PM Kisan Eligibility',
              'How to apply for Ayushman Bharat',
              'PM Awas Yojana Benefits',
              'Education Schemes',
              'Healthcare Benefits',
              'Housing Support',
              'Skill Development'
            ].map((suggestion) => (
              <button
                key={suggestion}
                className="suggestion-chip"
                onClick={() => {
                  setInputMessage(suggestion);
                  setTimeout(() => handleSendMessage(), 100);
                }}
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
