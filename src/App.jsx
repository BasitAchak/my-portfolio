import './App.css'

const projects = [
  {
    title: 'RepoMind AI',
    description: 'AI-powered code reviewer that analyzes pasted code or GitHub repositories and provides structured feedback across bugs, security issues, code quality, and improvements.',
    tech: 'React · TypeScript · Node.js · Express · Groq AI',
    link: 'https://github.com/BasitAchak',
  },
  {
    title: 'Local Deals Pro',
    description: 'Full-stack mobile app for real-time local deals with adjustable-radius filtering, flash deals, QR redemption, merchant tools, and Firebase services.',
    tech: 'React Native · Expo · TypeScript · Firebase · Zustand',
    link: 'https://github.com/BasitAchak',
  },
  {
    title: 'Border AI Trade Assistant',
    description: 'Cross-platform mobile assistant for traders at Chaman Border with document analysis, HS Code lookup, customs guidance, OCR scanning, and offline document support.',
    tech: 'React Native · Expo · TypeScript · Firebase · Node.js · Groq AI',
    link: 'https://github.com/BasitAchak',
  },
]

function App() {
  return (
    <div className="site">
      <header className="navbar">
        <a className="logo" href="#home">AB</a>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <p className="eyebrow">FULL STACK DEVELOPER · MOBILE · WEB · AI</p>
          <h1>Abdul Basit</h1>
          <h2>I build practical software and AI-powered applications.</h2>
          <p className="hero-text">
            Computer Science student at NUST focused on production-ready mobile and full-stack applications, with experience in React Native, Firebase, and AI API integrations.
          </p>
          <div className="actions">
            <a className="button primary" href="#projects">View Projects</a>
            <a className="button secondary" href="https://calendly.com/basitlateef52/30min" target="_blank" rel="noreferrer">Book a Call</a>
          </div>
        </section>

        <section id="about" className="section">
          <p className="eyebrow">ABOUT</p>
          <h2>Building useful software from ideas.</h2>
          <p className="section-text">
            I am a Computer Science student at NUST with a focus on building clean, scalable applications. My work spans mobile development, frontend development, backend services, cloud tools, and AI integrations.
          </p>
          <div className="skills">
            {['React Native', 'Flutter', 'Expo', 'HTML / CSS', 'JavaScript', 'TypeScript', 'Python', 'C++', 'Firebase', 'Node.js', 'REST APIs', 'Groq AI', 'OCR', 'Git & GitHub'].map((skill) => <span key={skill}>{skill}</span>)}
          </div>
        </section>

        <section id="projects" className="section">
          <p className="eyebrow">PROJECTS</p>
          <h2>Things I have been building.</h2>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <small>{project.tech}</small>
                <a className="project-link" href={project.link} target="_blank" rel="noreferrer">View on GitHub ↗</a>
              </article>
            ))}
          </div>
        </section>

        <section className="section future">
          <p className="eyebrow">FUTURE WORK</p>
          <h2>More work is on the way.</h2>
          <p className="section-text">
            This space is reserved for future technical posts, project write-ups, and my FlyRank capstone update.
          </p>
          <div className="badge-placeholder">FlyRank Completion Badge — To be added after capstone approval</div>
        </section>

        <section id="contact" className="section contact">
          <p className="eyebrow">CONNECT</p>
          <h2>Let&apos;s connect.</h2>
          <p className="section-text">Find me through my professional profiles, download my CV, or book a conversation.</p>
          <div className="links">
            <a href="https://github.com/BasitAchak" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/abdul-basit-khan-47bbb7376" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="/Resume_AbdulBasit.pdf" target="_blank" rel="noreferrer">CV</a>
            <a href="https://calendly.com/basitlateef52/30min" target="_blank" rel="noreferrer">Book a Call</a>
          </div>
        </section>
      </main>

      <footer>© {new Date().getFullYear()} Abdul Basit · Built with React.</footer>
    </div>
  )
}

export default App
