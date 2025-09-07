import React from 'react';

const styles = {
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
  content: {
    maxWidth: '1000px',
    margin: '0 auto',
    lineHeight: '1.6'
  },
  timeline: {
    position: 'relative',
    padding: '2rem 0'
  },
  timelineItem: {
    marginBottom: '3rem',
    position: 'relative',
    paddingLeft: '3rem'
  },
  timelineDot: {
    position: 'absolute',
    left: '0',
    top: '0.5rem',
    width: '1rem',
    height: '1rem',
    borderRadius: '50%',
    backgroundColor: '#FF6B35',
    border: '3px solid #fff',
    boxShadow: '0 0 0 3px #FF6B35'
  },
  timelineLine: {
    position: 'absolute',
    left: '0.4rem',
    top: '1.5rem',
    bottom: '-3rem',
    width: '2px',
    backgroundColor: '#e0e0e0'
  },
  phaseCard: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding: '2rem',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    border: '1px solid #e0e0e0'
  },
  phaseHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem'
  },
  phaseTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#333',
    margin: '0 1rem 0 0'
  },
  phaseStatus: {
    padding: '0.25rem 0.75rem',
    borderRadius: '20px',
    fontSize: '0.8rem',
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  statusCompleted: {
    backgroundColor: '#d4edda',
    color: '#155724'
  },
  statusCurrent: {
    backgroundColor: '#fff3cd',
    color: '#856404'
  },
  statusUpcoming: {
    backgroundColor: '#e2e3e5',
    color: '#383d41'
  },
  phaseDate: {
    color: '#666',
    fontSize: '0.9rem',
    marginBottom: '1rem'
  },
  phaseDescription: {
    color: '#555',
    marginBottom: '1.5rem'
  },
  featuresList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1rem',
    marginTop: '1.5rem'
  },
  feature: {
    backgroundColor: '#f8f9fa',
    padding: '1rem',
    borderRadius: '8px',
    borderLeft: '4px solid #FF6B35'
  },
  featureTitle: {
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '0.5rem'
  },
  featureDesc: {
    color: '#666',
    fontSize: '0.9rem'
  },
  ctaSection: {
    textAlign: 'center',
    padding: '3rem 0',
    backgroundColor: '#FFF5F2',
    borderRadius: '12px',
    marginTop: '3rem'
  },
  ctaTitle: {
    fontSize: '2rem',
    color: '#333',
    marginBottom: '1rem'
  },
  ctaText: {
    fontSize: '1.1rem',
    color: '#666',
    marginBottom: '2rem',
    maxWidth: '600px',
    margin: '0 auto 2rem'
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
  }
};

function Roadmap() {
  const roadmapData = [
    {
      phase: "Foundation",
      status: "completed",
      date: "Phase 1 - Completed",
      description: "Building the core infrastructure and assembling our world-class team of linguists, engineers, and educators.",
      features: [
        { title: "Core Team Assembly", desc: "Recruited experts in linguistics, AI, and education technology" },
        { title: "Technical Architecture", desc: "Designed scalable platform infrastructure" },
        { title: "Content Framework", desc: "Established methodology for culturally authentic content creation" }
      ]
    },
    {
      phase: "MVP Development",
      status: "current",
      date: "Phase 2 - In Progress",
      description: "Creating our minimum viable product with essential Hindi learning features and core AI personalization.",
      features: [
        { title: "Hindi Course Content", desc: "Complete beginner-to-intermediate Hindi curriculum" },
        { title: "AI Learning Engine", desc: "Personalized lesson recommendations and progress tracking" },
        { title: "Mobile App Development", desc: "Native iOS and Android applications" },
        { title: "Beta Testing Program", desc: "Limited user testing and feedback collection" }
      ]
    },
    {
      phase: "Beta Launch",
      status: "upcoming",
      date: "Phase 3 - Next",
      description: "Limited public beta release with core features, gathering user feedback for full launch preparation.",
      features: [
        { title: "Public Beta Release", desc: "Invite-only beta program for early adopters" },
        { title: "User Feedback Integration", desc: "Rapid iteration based on beta user insights" },
        { title: "Performance Optimization", desc: "Fine-tuning for smooth user experience" },
        { title: "Community Building", desc: "Early user community and support channels" }
      ]
    },
    {
      phase: "Full Launch",
      status: "upcoming",
      date: "Phase 4 - Coming Soon",
      description: "Official worldwide launch with complete feature set, multiple languages, and premium offerings.",
      features: [
        { title: "Multi-Language Support", desc: "Bengali and Tamil courses launch" },
        { title: "Premium Features", desc: "Advanced analytics, offline mode, and tutoring" },
        { title: "Global Marketing", desc: "Worldwide user acquisition campaigns" },
        { title: "Enterprise Solutions", desc: "B2B offerings for educational institutions" }
      ]
    },
    {
      phase: "Expansion",
      status: "upcoming",
      date: "Phase 5 - Future",
      description: "Continuous improvement, new languages, advanced features, and global expansion.",
      features: [
        { title: "Additional Languages", desc: "Sanskrit, Gujarati, Telugu, and more" },
        { title: "Advanced AI Features", desc: "Speech recognition, conversation practice, cultural immersion" },
        { title: "Global Partnerships", desc: "Collaborations with universities and cultural institutions" },
        { title: "API & Integrations", desc: "Third-party integrations and white-label solutions" }
      ]
    }
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case 'completed':
        return styles.statusCompleted;
      case 'current':
        return styles.statusCurrent;
      case 'upcoming':
        return styles.statusUpcoming;
      default:
        return styles.statusUpcoming;
    }
  };

  return (
    <div>
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>Our Development Roadmap</h1>
        <p style={styles.heroSubtitle}>See how we're building the future of Indic language learning</p>
      </div>

      <div style={styles.content}>
        <div style={styles.timeline}>
          {roadmapData.map((item, index) => (
            <div key={index} style={styles.timelineItem}>
              <div style={styles.timelineDot}></div>
              {index < roadmapData.length - 1 && <div style={styles.timelineLine}></div>}

              <div style={styles.phaseCard}>
                <div style={styles.phaseHeader}>
                  <h2 style={styles.phaseTitle}>{item.phase}</h2>
                  <span style={{...styles.phaseStatus, ...getStatusStyle(item.status)}}>
                    {item.status}
                  </span>
                </div>

                <div style={styles.phaseDate}>{item.date}</div>
                <p style={styles.phaseDescription}>{item.description}</p>

                <div style={styles.featuresList}>
                  {item.features.map((feature, featureIndex) => (
                    <div key={featureIndex} style={styles.feature}>
                      <div style={styles.featureTitle}>{feature.title}</div>
                      <div style={styles.featureDesc}>{feature.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={styles.ctaSection}>
          <h2 style={styles.ctaTitle}>Join Our Journey</h2>
          <p style={styles.ctaText}>
            Be part of shaping the future of Indic language education. Join our waitlist to get early access
            and help us build something amazing together.
          </p>
          <a href="#waitlist" style={styles.button}>Join Waitlist</a>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;