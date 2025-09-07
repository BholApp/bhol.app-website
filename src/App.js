import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Blog from './pages/Blog';
import FAQ from './pages/FAQ';
import Privacy from './pages/Privacy';
import Roadmap from './pages/Roadmap';
import Terms from './pages/Terms';

// Inline styles
const styles = {
  container: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    margin: 0,
    padding: 0,
    minHeight: '100vh',
    backgroundColor: '#fff'
  },
  header: {
    backgroundColor: '#FF6B35',
    color: 'white',
    padding: '1rem 0',
    position: 'sticky',
    top: 0,
    zIndex: 1000
  },
  nav: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 1rem'
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textDecoration: 'none',
    color: 'white'
  },
  navLinks: {
    display: 'flex',
    gap: '2rem',
    listStyle: 'none',
    margin: 0,
    padding: 0
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1rem',
    transition: 'opacity 0.2s'
  },
  main: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem 1rem'
  },
  hero: {
    textAlign: 'center',
    padding: '4rem 1rem',
    backgroundColor: '#FFF5F2',
    borderRadius: '12px',
    margin: '2rem 0'
  },
  heroTitle: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '1rem'
  },
  heroSubtitle: {
    fontSize: '1.2rem',
    color: '#666',
    marginBottom: '2rem'
  },
  button: {
    backgroundColor: '#FF6B35',
    color: 'white',
    border: 'none',
    padding: '12px 24px',
    fontSize: '1rem',
    borderRadius: '6px',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
    transition: 'background-color 0.2s'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    margin: '3rem 0'
  },
  card: {
    padding: '2rem',
    backgroundColor: '#FFF',
    borderRadius: '12px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    textAlign: 'center'
  },
  footer: {
    backgroundColor: '#333',
    color: 'white',
    padding: '3rem 1rem 2rem',
    marginTop: '4rem'
  },
  footerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    marginBottom: '2rem'
  },
  footerSection: {
    textAlign: 'left'
  },
  footerTitle: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#FF6B35'
  },
  footerLink: {
    color: 'white',
    textDecoration: 'none',
    display: 'block',
    marginBottom: '0.5rem',
    transition: 'opacity 0.2s'
  },
  socialLinks: {
    display: 'flex',
    gap: '1rem',
    marginTop: '1rem'
  },
  socialIcon: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.5rem',
    transition: 'opacity 0.2s'
  },
  footerBottom: {
    borderTop: '1px solid #555',
    paddingTop: '2rem',
    textAlign: 'center',
    color: '#ccc'
  }
};

// Components
function Header() {
  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <Link to="/" style={styles.logo}>Bhol</Link>
        <ul style={styles.navLinks}>
          <li><Link to="/" style={styles.navLink}>Home</Link></li>
          <li><Link to="/about" style={styles.navLink}>About</Link></li>
          <li><Link to="/roadmap" style={styles.navLink}>Roadmap</Link></li>
          <li><Link to="/blog" style={styles.navLink}>Blog</Link></li>
          <li><Link to="/faq" style={styles.navLink}>FAQ</Link></li>
          <li><Link to="/careers" style={styles.navLink}>Careers</Link></li>
          <li><Link to="/privacy" style={styles.navLink}>Privacy</Link></li>
          <li><Link to="/terms" style={styles.navLink}>Terms</Link></li>
        </ul>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContent}>
        <div style={styles.footerSection}>
          <h3 style={styles.footerTitle}>Bhol</h3>
          <p>Learn Indic languages with AI-powered personalized education. Master Hindi, Bengali, Tamil, and more.</p>
          <div style={styles.socialLinks}>
            <a href="https://twitter.com/bholapp" style={styles.socialIcon} aria-label="Twitter">🐦</a>
            <a href="https://linkedin.com/company/bhol" style={styles.socialIcon} aria-label="LinkedIn">💼</a>
            <a href="https://facebook.com/bholapp" style={styles.socialIcon} aria-label="Facebook">📘</a>
            <a href="https://instagram.com/bholapp" style={styles.socialIcon} aria-label="Instagram">📷</a>
          </div>
        </div>

        <div style={styles.footerSection}>
          <h4 style={styles.footerTitle}>Product</h4>
          <Link to="/roadmap" style={styles.footerLink}>Roadmap</Link>
          <Link to="/faq" style={styles.footerLink}>FAQ</Link>
          <a href="#waitlist" style={styles.footerLink}>Join Waitlist</a>
          <a href="mailto:hello@bhol.app" style={styles.footerLink}>Contact</a>
        </div>

        <div style={styles.footerSection}>
          <h4 style={styles.footerTitle}>Company</h4>
          <Link to="/about" style={styles.footerLink}>About</Link>
          <Link to="/blog" style={styles.footerLink}>Blog</Link>
          <Link to="/careers" style={styles.footerLink}>Careers</Link>
          <a href="mailto:press@bhol.app" style={styles.footerLink}>Press</a>
        </div>

        <div style={styles.footerSection}>
          <h4 style={styles.footerTitle}>Legal</h4>
          <Link to="/privacy" style={styles.footerLink}>Privacy Policy</Link>
          <Link to="/terms" style={styles.footerLink}>Terms of Service</Link>
          <a href="mailto:legal@bhol.app" style={styles.footerLink}>Legal</a>
        </div>
      </div>

      <div style={styles.footerBottom}>
        <p>&copy; 2024 Bhol. Learn Indic languages with confidence.</p>
        <p style={{fontSize: '0.9rem', marginTop: '0.5rem'}}>
          Made with ❤️ for language learners worldwide
        </p>
      </div>
    </footer>
  );
}

function HomePage() {
  return (
    <div>
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>Learn Indic Languages</h1>
        <p style={styles.heroSubtitle}>Master Hindi, Bengali, Tamil, and more with interactive lessons and AI-powered practice.</p>
        <a href="#features" style={styles.button}>Start Learning</a>
      </div>
      
      <div style={styles.grid} id="features">
        <div style={styles.card}>
          <h3>🎯 Interactive Flashcards</h3>
          <p>Master vocabulary with spaced repetition and smart review algorithms.</p>
        </div>
        <div style={styles.card}>
          <h3>📚 Story-Based Learning</h3>
          <p>Learn through engaging stories that adapt to your skill level.</p>
        </div>
        <div style={styles.card}>
          <h3>🏆 Gamification</h3>
          <p>Track your progress with XP points, streaks, and achievements.</p>
        </div>
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <div>
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>About Bhol</h1>
        <p style={styles.heroSubtitle}>Bridging cultures through language learning</p>
      </div>

      <div style={{maxWidth: '900px', margin: '0 auto', lineHeight: '1.6'}}>
        <section style={{marginBottom: '3rem'}}>
          <h2 style={{fontSize: '2rem', color: '#333', marginBottom: '1rem'}}>Our Story</h2>
          <p style={{fontSize: '1.1rem', marginBottom: '1.5rem'}}>
            Bhol was born from a simple observation: while the world becomes increasingly connected, language barriers continue to divide us.
            Our founders, having experienced the challenges of learning Indic languages firsthand, recognized that traditional language learning
            methods were not keeping pace with modern technology or the diverse needs of today's learners.
          </p>
          <p>
            What started as a personal project to help friends and family learn Hindi has evolved into a mission to democratize
            access to Indic language education. We believe that everyone should have the opportunity to connect with the rich
            cultural heritage of India, Pakistan, Bangladesh, and Nepal through their languages.
          </p>
        </section>

        <section style={{marginBottom: '3rem'}}>
          <h2 style={{fontSize: '2rem', color: '#333', marginBottom: '1rem'}}>Meet Our Founders</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '2rem'}}>
            <div style={{...styles.card, textAlign: 'left'}}>
              <h3 style={{color: '#FF6B35', marginBottom: '0.5rem'}}>Sarah Chen</h3>
              <p style={{fontWeight: 'bold', color: '#666', marginBottom: '1rem'}}>Co-Founder & CEO</p>
              <p>Sarah brings over 8 years of experience in edtech and language learning platforms. A former Google engineer
              and Stanford CS graduate, she has helped scale learning platforms serving millions of users worldwide.</p>
            </div>
            <div style={{...styles.card, textAlign: 'left'}}>
              <h3 style={{color: '#FF6B35', marginBottom: '0.5rem'}}>Rajesh Kumar</h3>
              <p style={{fontWeight: 'bold', color: '#666', marginBottom: '1rem'}}>Co-Founder & Head of Content</p>
              <p>Rajesh is a native Hindi speaker and former language professor at Jawaharlal Nehru University.
              His expertise in linguistics and cultural studies ensures our content is both academically rigorous and culturally authentic.</p>
            </div>
          </div>
        </section>

        <section style={{marginBottom: '3rem'}}>
          <h2 style={{fontSize: '2rem', color: '#333', marginBottom: '1rem'}}>Our Mission</h2>
          <p style={{fontSize: '1.1rem', marginBottom: '1.5rem'}}>
            To make Indic languages accessible, engaging, and culturally rich for learners worldwide. We envision a world where
            language barriers don't limit cultural exchange, business opportunities, or personal connections.
          </p>
          <div style={styles.grid}>
            <div style={styles.card}>
              <h3>🌍 Global Accessibility</h3>
              <p>Break down barriers to Indic language education through innovative technology and affordable pricing.</p>
            </div>
            <div style={styles.card}>
              <h3>🎯 Cultural Authenticity</h3>
              <p>Preserve and promote the rich cultural context of each language through authentic content and native speakers.</p>
            </div>
            <div style={styles.card}>
              <h3>🚀 Personalized Learning</h3>
              <p>Leverage AI and data-driven insights to create personalized learning experiences for every student.</p>
            </div>
          </div>
        </section>

        <section style={{marginBottom: '3rem'}}>
          <h2 style={{fontSize: '2rem', color: '#333', marginBottom: '1rem'}}>Why Indic Languages Matter</h2>
          <p style={{fontSize: '1.1rem', marginBottom: '1.5rem'}}>
            Indic languages represent one of the world's largest and most diverse language families, spoken by over 1.5 billion people
            across South Asia and the global diaspora. From the ancient wisdom of Sanskrit to the vibrant modern expressions of Hindi,
            Bengali, and Tamil, these languages carry millennia of cultural, philosophical, and literary heritage.
          </p>
          <p>
            In our increasingly interconnected world, learning Indic languages opens doors to:
          </p>
          <ul style={{marginLeft: '2rem', marginTop: '1rem'}}>
            <li>Business opportunities in growing markets</li>
            <li>Deeper cultural understanding and connections</li>
            <li>Access to classical literature and philosophy</li>
            <li>Enhanced travel and social experiences</li>
            <li>Career advancement in global companies</li>
          </ul>
        </section>

        <section style={{marginBottom: '3rem'}}>
          <h2 style={{fontSize: '2rem', color: '#333', marginBottom: '1rem'}}>Our Approach</h2>
          <p style={{fontSize: '1.1rem', marginBottom: '1.5rem'}}>
            We combine cutting-edge technology with time-tested pedagogical methods to create an unparalleled learning experience.
          </p>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem'}}>
            <div style={{padding: '1.5rem', backgroundColor: '#f8f9fa', borderRadius: '8px'}}>
              <h4 style={{color: '#FF6B35', marginBottom: '0.5rem'}}>AI-Powered Learning</h4>
              <p>Personalized lesson recommendations and intelligent review scheduling.</p>
            </div>
            <div style={{padding: '1.5rem', backgroundColor: '#f8f9fa', borderRadius: '8px'}}>
              <h4 style={{color: '#FF6B35', marginBottom: '0.5rem'}}>Cultural Immersion</h4>
              <p>Contextual learning through stories, music, and cultural content.</p>
            </div>
            <div style={{padding: '1.5rem', backgroundColor: '#f8f9fa', borderRadius: '8px'}}>
              <h4 style={{color: '#FF6B35', marginBottom: '0.5rem'}}>Community Support</h4>
              <p>Connect with fellow learners and native speakers for practice.</p>
            </div>
            <div style={{padding: '1.5rem', backgroundColor: '#f8f9fa', borderRadius: '8px'}}>
              <h4 style={{color: '#FF6B35', marginBottom: '0.5rem'}}>Expert Validation</h4>
              <p>Content reviewed by linguists and native speakers for accuracy.</p>
            </div>
          </div>
        </section>

        <section style={{textAlign: 'center', padding: '3rem 0', backgroundColor: '#FFF5F2', borderRadius: '12px'}}>
          <h2 style={{fontSize: '2rem', color: '#333', marginBottom: '1rem'}}>Join Our Mission</h2>
          <p style={{fontSize: '1.1rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem'}}>
            We're building more than just a language learning app – we're creating bridges between cultures.
            Join us in our journey to make Indic languages accessible to everyone.
          </p>
          <Link to="/careers" style={styles.button}>View Career Opportunities</Link>
        </section>
      </div>
    </div>
  );
}

function CareersPage() {
  return (
    <div>
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>Join Our Team</h1>
        <p style={styles.heroSubtitle}>Help us democratize Indic language learning</p>
      </div>
      
      <div style={{maxWidth: '800px', margin: '0 auto'}}>
        <h2>Current Openings</h2>
        
        <div style={styles.card}>
          <h3>Frontend Developer</h3>
          <p><strong>Location:</strong> Remote</p>
          <p><strong>Type:</strong> Full-time</p>
          <p>Join our team to build beautiful, responsive user interfaces for our language learning platform.</p>
        </div>
        
        <div style={styles.card}>
          <h3>Content Creator - Hindi</h3>
          <p><strong>Location:</strong> Remote</p>
          <p><strong>Type:</strong> Part-time</p>
          <p>Create engaging Hindi language content including stories, exercises, and cultural insights.</p>
        </div>
        
        <div style={styles.card}>
          <h3>UX Designer</h3>
          <p><strong>Location:</strong> Remote</p>
          <p><strong>Type:</strong> Contract</p>
          <p>Design intuitive learning experiences that make language acquisition enjoyable and effective.</p>
        </div>
        
        <p style={{textAlign: 'center', marginTop: '2rem'}}>
          <a href="mailto:careers@bhol.app" style={styles.button}>Apply Now</a>
        </p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div style={styles.container}>
      <Router>
        <Header />
        <main style={styles.main}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;