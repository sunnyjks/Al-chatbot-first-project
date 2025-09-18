import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const translations = {
    en: {
      // Navigation
      home: 'Home',
      schemes: 'Schemes',
      chatbot: 'AI Chatbot',
      about: 'About',
      contact: 'Contact',
      
      // Home page
      heroTitle: 'Government Schemes AI Chatbot',
      heroSubtitle: 'Get information about government schemes in your preferred language',
      getStarted: 'Get Started',
      learnMore: 'Learn More',
      
      // Schemes
      searchSchemes: 'Search Schemes',
      categories: 'Categories',
      agriculture: 'Agriculture',
      education: 'Education',
      health: 'Health',
      employment: 'Employment',
      housing: 'Housing',
      women: 'Women Empowerment',
      youth: 'Youth Development',
      
      // Chatbot
      chatPlaceholder: 'Ask about government schemes...',
      sendMessage: 'Send',
      voiceChat: 'Voice Chat',
      startListening: 'Start Listening',
      stopListening: 'Stop Listening',
      
      // Common
      loading: 'Loading...',
      error: 'Error occurred',
      success: 'Success',
      viewDetails: 'View Details',
      officialLink: 'Official Government Link',
      backToTop: 'Back to Top'
    },
    
    hi: {
      // Navigation
      home: 'होम',
      schemes: 'योजनाएं',
      chatbot: 'एआई चैटबॉट',
      about: 'हमारे बारे में',
      contact: 'संपर्क',
      
      // Home page
      heroTitle: 'सरकारी योजनाओं का एआई चैटबॉट',
      heroSubtitle: 'अपनी पसंदीदा भाषा में सरकारी योजनाओं की जानकारी प्राप्त करें',
      getStarted: 'शुरू करें',
      learnMore: 'और जानें',
      
      // Schemes
      searchSchemes: 'योजनाएं खोजें',
      categories: 'श्रेणियां',
      agriculture: 'कृषि',
      education: 'शिक्षा',
      health: 'स्वास्थ्य',
      employment: 'रोजगार',
      housing: 'आवास',
      women: 'महिला सशक्तिकरण',
      youth: 'युवा विकास',
      
      // Chatbot
      chatPlaceholder: 'सरकारी योजनाओं के बारे में पूछें...',
      sendMessage: 'भेजें',
      voiceChat: 'वॉइस चैट',
      startListening: 'सुनना शुरू करें',
      stopListening: 'सुनना बंद करें',
      
      // Common
      loading: 'लोड हो रहा है...',
      error: 'त्रुटि हुई',
      success: 'सफल',
      viewDetails: 'विवरण देखें',
      officialLink: 'आधिकारिक सरकारी लिंक',
      backToTop: 'शीर्ष पर जाएं'
    },
    
    mr: {
      // Navigation
      home: 'मुख्यपृष्ठ',
      schemes: 'योजना',
      chatbot: 'एआई चॅटबॉट',
      about: 'आमच्याबद्दल',
      contact: 'संपर्क',
      
      // Home page
      heroTitle: 'सरकारी योजनांचा एआई चॅटबॉट',
      heroSubtitle: 'तुमच्या आवडत्या भाषेत सरकारी योजनांची माहिती मिळवा',
      getStarted: 'सुरु करा',
      learnMore: 'अधिक जाणा',
      
      // Schemes
      searchSchemes: 'योजना शोधा',
      categories: 'श्रेणी',
      agriculture: 'शेती',
      education: 'शिक्षण',
      health: 'आरोग्य',
      employment: 'रोजगार',
      housing: 'गृहनिर्माण',
      women: 'महिला सक्षमीकरण',
      youth: 'तरुण विकास',
      
      // Chatbot
      chatPlaceholder: 'सरकारी योजनांबद्दल विचारा...',
      sendMessage: 'पाठवा',
      voiceChat: 'व्हॉइस चॅट',
      startListening: 'ऐकणे सुरु करा',
      stopListening: 'ऐकणे थांबवा',
      
      // Common
      loading: 'लोड होत आहे...',
      error: 'त्रुटी आली',
      success: 'यशस्वी',
      viewDetails: 'तपशील पहा',
      officialLink: 'अधिकृत सरकारी दुवा',
      backToTop: 'वर जा'
    }
  };

  const t = (key) => {
    return translations[currentLanguage][key] || translations.en[key] || key;
  };

  const changeLanguage = (lang) => {
    setCurrentLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
