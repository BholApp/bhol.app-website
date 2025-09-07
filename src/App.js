import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

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
    textAlign: 'center',
    padding: '2rem',
    marginTop: '4rem'
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
          <li><Link to="/careers" style={styles.navLink}>Careers</Link></li>
        </ul>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2024 Bhol. Learn Indic languages with confidence.</p>
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
      
      <div style={{maxWidth: '800px', margin: '0 auto', lineHeight: '1.6'}}>
        <h2>Our Mission</h2>
        <p>Bhol is dedicated to making Indic languages accessible to learners worldwide. We believe that language learning should be engaging, effective, and culturally rich.</p>
        
        <h2>Why Indic Languages?</h2>
        <p>Indic languages are spoken by over 1.5 billion people worldwide. Learning these languages opens doors to rich cultures, diverse perspectives, and meaningful connections.</p>
        
        <h2>Our Approach</h2>
        <p>We combine modern technology with traditional learning methods to create an immersive experience that respects the cultural context of each language.</p>
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
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;