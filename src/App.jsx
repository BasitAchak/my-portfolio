import './App.css'

const projects = [
  {
    title: 'RepoMind AI',
    description: 'AI-powered code reviewer that analyzes pasted code or GitHub repositories and provides structured feedback across bugs, security issues, code quality, and improvements.',
    tech: 'React · TypeScript · Node.js · Express · Groq AI',
    link: 'https://github.com/BasitAchak/repomind-ai',
  },
  {
    title: 'Local Deals Pro',
    description: 'Full-stack mobile app for real-time local deals with adjustable-radius filtering, flash deals, QR redemption, merchant tools, and Firebase services.',
    tech: 'React Native · Expo · TypeScript · Firebase · Zustand',
    link: 'https://github.com/BasitAchak/local-deals-pro',
  },
  {
    title: 'Border AI Trade Assistant',
    description: 'Cross-platform mobile assistant for traders at Chaman Border with document analysis, HS Code lookup, customs guidance, OCR scanning, and offline document support.',
    tech: 'React Native · Expo · TypeScript · Firebase · Node.js · Groq AI',
    link: 'https://github.com/BasitAchak/Border-AI-Trade-Assistant',
  },
]

function App() {
  return (
    <div className="site">
      <header className="navbar">
        <a className="logo" href="#home" aria-label="Abdul Basit home">AB</a>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <p className="eyebrow">FULL-STACK & AI DEVELOPER</p>
          <h1>Abdul Basit</h1>
          <h2>I build web, mobile, and AI-powered applications.</h2>
          <p className="hero-text">
            I turn ideas into working software using React, React Native, APIs, databases, and AI integrations. Explore my deployed projects and see what I build.
          </p>
          <div className="actions">
            <a className="button primary" href="#projects">Explore My Work</a>
            <a className="button secondary" href="#contact">Contact Me</a>
          </div>
        </section>

        <section id="about" className="section">
          <p className="eyebrow">ABOUT</p>
          <h2>Building useful software from ideas.</h2>
          <p className="section-text">
            I am a Computer Science student at NUST with a focus on building clean, scalable applications. My work spans mobile development, frontend development, backend services, cloud tools, and AI integrations.
          </p>
          <div className="skills">
            {['React Native', 'Flutter', 'Expo', 'HTML / CSS', 'JavaScript', 'TypeScript', 'Python', 'C++', 'Firebase', 'Node.js', 'REST APIs', 'Groq AI', 'OCR', 'Git & GitHub'].map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <p className="eyebrow">PROJECTS</p>
          <h2>Deployed projects and experiments.</h2>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <small>{project.tech}</small>
                <a
                  className="project-link"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub ↗
                </a>
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
        </section>

        <section id="contact" className="section contact">
          <p className="eyebrow">CONNECT</p>
          <h2>Let&apos;s connect.</h2>
          <p className="section-text">
            Have a project idea, opportunity, or question? Send me a message.
          </p>

          <form
            className="contact-form"
            action="https://formspree.io/f/myeznrer"
            method="POST"
          >
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your name"
              required
            />

            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="your@email.com"
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Tell me about your project or opportunity..."
              required
            />

            <button className="button primary" type="submit">
              Send Message
            </button>
          </form>

          <div className="links">
            <a href="https://github.com/BasitAchak" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/abdul-basit-khan-47bbb7376" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="/Resume_AbdulBasit.pdf" target="_blank" rel="noopener noreferrer">CV</a>
            <a href="https://calendly.com/basitlateef52/30min" target="_blank" rel="noopener noreferrer">Book a Call</a>
          </div>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Abdul Basit · Built with React.</p>

        <a
          href="https://internship.flyrank.ai/verify?id=BASIT420420&first_name=Basit"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Verify Basit's FlyRank AI Internship credential BASIT420420"
          style={{
            boxSizing: 'border-box',
            margin: 0,
            padding: '22px',
            border: '1px solid #DDE4E7',
            background: '#FFFFFF',
            textDecoration: 'none',
            fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif',
            fontStyle: 'normal',
            lineHeight: 1.25,
            textTransform: 'none',
            display: 'flex',
            flexDirection: 'column',
            width: '236px',
            borderRadius: '20px',
            boxShadow: '0 1px 2px rgba(5,31,33,0.05)',
            color: 'inherit',
          }}
        >
          <span
            style={{
              margin: 0,
              padding: 0,
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 96 96"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
            >
              <rect width="96" height="96" rx="22" fill="#051F21" />
              <path
                d="M28.2354 74.2202V67.9039C29.6419 68.4369 31.3724 68.7055 33.4311 68.7055C35.3235 68.7055 36.8153 68.2396 37.8979 67.3079C38.9805 66.3762 39.9566 64.8695 40.8218 62.792L42.6887 58.3139L29.8976 29.2879C35.0038 29.2879 39.6028 32.3307 41.5294 36.9893L47.0746 50.3985L56.0126 28.6038C57.9221 23.9452 62.5168 20.894 67.6187 20.894L50.0795 63.5936C48.4556 67.5933 46.5205 70.5102 44.2743 72.3484C42.0281 74.1867 39.1169 75.1058 35.5451 75.1058C32.6212 75.1058 30.1875 74.812 28.2354 74.2244V74.2202Z"
                fill="#54E399"
              />
            </svg>

            <span
              style={{
                fontFamily: 'ui-monospace,SFMono-Regular,Menlo,Consolas,monospace',
                fontSize: '8.5px',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'rgba(5,31,33,0.5)',
              }}
            >
              FlyRank AI Internship
            </span>
          </span>

          <span
            style={{
              display: 'block',
              height: '1px',
              background: '#E4EAED',
              margin: '18px 0',
            }}
          />

          <span
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
            }}
          >
            <span
              style={{
                fontSize: '19px',
                fontWeight: 600,
                color: '#051F21',
                letterSpacing: '-0.02em',
                lineHeight: 1.25,
              }}
            >
              BasitKhan
            </span>

            <span
              style={{
                fontSize: '13px',
                fontWeight: 600,
                color: '#1A7A4A',
              }}
            >
              Front-end AI Engineering
            </span>

            <span
              style={{
                fontSize: '12px',
                color: 'rgba(5,31,33,0.5)',
              }}
            >
              July 2026 cohort
            </span>
          </span>

          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginTop: '18px',
              padding: '10px 12px',
              background: 'rgba(84,227,153,0.12)',
              border: '1px solid rgba(84,227,153,0.28)',
              borderRadius: '12px',
            }}
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
            >
              <circle cx="12" cy="12" r="10" stroke="#1A7A4A" strokeWidth="1.5" />
              <path
                d="M7.9 12.3l2.8 2.8 5.4-5.8"
                stroke="#1A7A4A"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span
              style={{
                fontSize: '12.5px',
                fontWeight: 600,
                color: '#1A7A4A',
              }}
            >
              Verified credential
            </span>
          </span>

          <span
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
              marginTop: '18px',
              paddingTop: '16px',
              borderTop: '1px solid #E4EAED',
            }}
          >
            <span
              style={{
                fontFamily: 'ui-monospace,SFMono-Regular,Menlo,Consolas,monospace',
                fontSize: '8px',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'rgba(5,31,33,0.5)',
              }}
            >
              Credential ID
            </span>

            <span
              style={{
                fontFamily: 'ui-monospace,SFMono-Regular,Menlo,Consolas,monospace',
                fontSize: '11.5px',
                color: '#051F21',
              }}
            >
              BASIT420420
            </span>

            <span
              style={{
                fontSize: '11.5px',
                color: 'rgba(5,31,33,0.5)',
                marginTop: '8px',
              }}
            >
              internship.flyrank.ai/verify ↗
            </span>
          </span>
        </a>
      </footer>
    </div>
  )
}

export default App