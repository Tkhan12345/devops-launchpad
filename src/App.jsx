
import './App.css'

const technologies = [
  {
    icon: '🐳',
    name: 'Docker',
    description: 'Containerize applications for consistent deployments.',
  },
  {
    icon: '☸️',
    name: 'Kubernetes',
    description: 'Orchestrate and scale containerized applications.',
  },
  {
    icon: '☁️',
    name: 'AWS',
    description: 'Deploy applications to the cloud.',
  },
  {
    icon: '⚙️',
    name: 'CI/CD',
    description: 'Automate testing, builds, and deployments.',
  },
]

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <a className="logo" href="#">🚀 DevOps Launchpad</a>
        <nav>
          <a href="#home">Home</a>
          <a href="#technologies">Technologies</a>
          <a href="#about">About</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <span className="eyebrow">BUILD • CONTAINERIZE • DEPLOY</span>
          <h1>
            From Code to <span>Cloud.</span>
          </h1>
          <p>
            A hands-on DevOps learning project exploring Docker,
            Kubernetes, AWS, and modern deployment workflows.
          </p>
          <a className="primary-button" href="#technologies">
            Explore Technologies →
          </a>
        </section>

        <section className="technologies" id="technologies">
          <h2>Our Technology Stack</h2>
          <p className="section-description">
            The tools powering our DevOps journey.
          </p>

          <div className="tech-grid">
            {technologies.map((tech) => (
              <article className="tech-card" key={tech.name}>
                <div className="tech-icon">{tech.icon}</div>
                <h3>{tech.name}</h3>
                <p>{tech.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about" id="about">
          <h2>Built to Learn. Ready to Deploy.</h2>
          <p>
            Starting with a React application and progressing
            toward automated, cloud-based deployments.
          </p>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} DevOps Launchpad</p>
        <p>Made for hands-on DevOps learning.</p>
      </footer>
    </div>
  )
}

export default App
