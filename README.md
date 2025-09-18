# 🏛️ Government Schemes AI Chatbot

A comprehensive, interactive AI chatbot platform designed to provide information about government schemes in multiple languages. Built with React, featuring voice chat capabilities, scheme categorization, and official government links.

## ✨ Features

### 🌟 Core Features
- **AI-Powered Chatbot**: Intelligent responses about government schemes
- **Multi-Language Support**: English, Hindi, and Marathi
- **Voice Chat**: Speech-to-text and text-to-speech capabilities
- **Scheme Categorization**: Organized by agriculture, education, health, employment, housing, women empowerment, and youth development
- **Official Government Links**: Direct links to official scheme portals
- **Responsive Design**: Mobile-first, modern UI design

### 🎨 User Experience
- **Interactive Interface**: Smooth animations and transitions
- **Search & Filter**: Find schemes quickly with intelligent search
- **Suggestion Chips**: Quick access to common queries
- **Real-time Chat**: Instant responses with typing indicators
- **Modern UI**: Beautiful gradients and card-based design

### 🔧 Technical Features
- **React 18**: Latest React features and hooks
- **React Router**: Client-side routing
- **Context API**: Language management and state
- **Responsive CSS**: Mobile-first design approach
- **Voice Recognition**: Web Speech API integration
- **Speech Synthesis**: Text-to-speech functionality

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd government-schemes-chatbot
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

## 📱 Pages & Navigation

### 🏠 Home Page
- Hero section with animated chat bubbles
- Feature highlights
- Statistics showcase
- Call-to-action sections

### 📋 Schemes Page
- Comprehensive scheme listings
- Category-based filtering
- Search functionality
- Official government links
- Scheme details and eligibility

### 🤖 AI Chatbot Page
- Interactive chat interface
- Voice chat capabilities
- Quick suggestion chips
- Real-time responses
- Multi-language support

### ℹ️ About Page
- Mission and vision
- Team information
- Core values
- Platform features

### 📞 Contact Page
- Contact form
- Contact information
- FAQ section
- Support details

## 🌐 Language Support

The platform supports three languages:

- **English (en)**: Primary language
- **Hindi (hi)**: हिंदी
- **Marathi (mr)**: मराठी

Users can switch languages using the language selector in the navigation bar.

## 🎯 Scheme Categories

Government schemes are organized into the following categories:

1. **Agriculture** 🌾
   - PM Kisan Samman Nidhi
   - PM Fasal Bima Yojana

2. **Education** 📚
   - Sarva Shiksha Abhiyan
   - Various scholarship programs

3. **Health** 🏥
   - Ayushman Bharat
   - Health insurance schemes

4. **Employment** 💼
   - PM Employment Generation Programme
   - Skill development initiatives

5. **Housing** 🏠
   - PM Awas Yojana
   - Affordable housing schemes

6. **Women Empowerment** 👩
   - Beti Bachao Beti Padhao
   - Women-centric programs

7. **Youth Development** 🎯
   - Skill India Mission
   - Youth employment programs

## 🔧 Technical Architecture

### Frontend Structure
```
src/
├── components/          # Reusable UI components
│   ├── Navbar.js       # Navigation component
│   └── Navbar.css
├── context/            # React Context providers
│   └── LanguageContext.js
├── pages/              # Page components
│   ├── Home.js         # Landing page
│   ├── Schemes.js      # Schemes listing
│   ├── Chatbot.js      # AI chatbot interface
│   ├── About.js        # About page
│   ├── Contact.js      # Contact page
│   └── *.css           # Page-specific styles
├── App.js              # Main application component
├── App.css             # Application styles
├── index.js            # Entry point
└── index.css           # Global styles
```

### Key Technologies
- **React**: Frontend framework
- **React Router**: Navigation and routing
- **Context API**: State management
- **CSS3**: Modern styling with animations
- **Web Speech API**: Voice recognition and synthesis
- **Lucide React**: Icon library

## 🎨 Design Features

### Color Scheme
- **Primary**: Blue gradient (#667eea to #764ba2)
- **Secondary**: Light blue (#f8f9ff to #e8ecff)
- **Accent**: White and gray variations

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Responsive**: Scales appropriately on all devices

### Animations
- **Fade In**: Smooth opacity transitions
- **Slide In**: Horizontal slide animations
- **Bounce In**: Playful bounce effects
- **Float**: Subtle floating animations
- **Hover Effects**: Interactive element states

## 📱 Responsive Design

The platform is fully responsive with breakpoints:

- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: 480px to 767px
- **Small Mobile**: Below 480px

## 🚀 Deployment

### Build Process
1. Run `npm run build`
2. Deploy the `build/` folder to your hosting service

### Recommended Hosting
- **Vercel**: Easy deployment with Git integration
- **Netlify**: Static site hosting
- **AWS S3**: Scalable cloud hosting
- **GitHub Pages**: Free hosting for open source projects

## 🔒 Security Features

- **Input Validation**: Form validation and sanitization
- **XSS Protection**: React's built-in XSS protection
- **Secure Links**: External links open in new tabs
- **HTTPS Ready**: Secure communication ready

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Government of India for scheme information
- React community for excellent documentation
- Open source contributors for inspiration
- Users for valuable feedback

## 📞 Support

For support and questions:
- **Email**: info@govschemes.ai
- **Phone**: +91 1800-XXX-XXXX
- **Office**: New Delhi, India

---

**Built with ❤️ for the citizens of India**
