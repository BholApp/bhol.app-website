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
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2rem',
    margin: '3rem 0'
  },
  card: {
    padding: '2rem',
    backgroundColor: '#FFF',
    borderRadius: '12px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    border: '1px solid #e0e0e0'
  },
  postTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '1rem'
  },
  postMeta: {
    fontSize: '0.9rem',
    color: '#666',
    marginBottom: '1rem'
  },
  postExcerpt: {
    color: '#555',
    lineHeight: '1.6',
    marginBottom: '1rem'
  },
  readMore: {
    color: '#FF6B35',
    textDecoration: 'none',
    fontWeight: 'bold'
  }
};

const blogPosts = [
  {
    id: 1,
    title: "The Beauty of Devanagari Script",
    date: "2024-09-01",
    excerpt: "Explore the elegant curves and historical significance of the Devanagari writing system used for Hindi, Sanskrit, and many other Indic languages.",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Learning Tamil: A Journey Through South India",
    date: "2024-08-28",
    excerpt: "Discover the rich literary tradition of Tamil and practical tips for mastering this classical Dravidian language.",
    readTime: "7 min read"
  },
  {
    id: 3,
    title: "Bengali Language and Culture",
    date: "2024-08-25",
    excerpt: "From Rabindranath Tagore to modern Bengali literature, explore how language shapes cultural identity in West Bengal and Bangladesh.",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "The Evolution of Hindi in Modern India",
    date: "2024-08-20",
    excerpt: "How Hindi has transformed from a regional language to India's lingua franca, and what this means for language learners today.",
    readTime: "8 min read"
  },
  {
    id: 5,
    title: "Sanskrit: The Mother of All Languages",
    date: "2024-08-15",
    excerpt: "Uncover the ancient roots of Sanskrit and its profound influence on modern Indic languages and programming concepts.",
    readTime: "10 min read"
  },
  {
    id: 6,
    title: "Regional Language Diversity in India",
    date: "2024-08-10",
    excerpt: "A comprehensive look at India's linguistic landscape and the importance of preserving regional language diversity.",
    readTime: "9 min read"
  }
];

function Blog() {
  return (
    <div>
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>Language Learning Blog</h1>
        <p style={styles.heroSubtitle}>Insights, tips, and stories about mastering Indic languages</p>
      </div>

      <div style={styles.grid}>
        {blogPosts.map(post => (
          <div key={post.id} style={styles.card}>
            <h2 style={styles.postTitle}>{post.title}</h2>
            <div style={styles.postMeta}>
              {post.date} • {post.readTime}
            </div>
            <p style={styles.postExcerpt}>{post.excerpt}</p>
            <a href="#" style={styles.readMore}>Read More →</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;