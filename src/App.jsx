import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import Icon from './components/Icon.jsx';
import NetworkGraph from './components/NetworkGraph.jsx';
import YouTubeEmbed from './components/YouTubeEmbed.jsx';
import useReveal from './useReveal.js';
import {
  profile,
  facts,
  projects,
  experience,
  education,
  skills,
  techStack,
  languages,
  links,
  email,
  cvUrl,
  sourceUrl,
} from './data.js';

const nav = [
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

function SectionHeading({ id, index, title, kicker }) {
  return (
    <header className="section-head">
      <p className="eyebrow">
        <span className="eyebrow-index">{index}</span> {kicker}
      </p>
      <h2 id={`${id}-heading`}>{title}</h2>
    </header>
  );
}

function ExternalLink({ href, children, ...rest }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  );
}

function Timeline({ items }) {
  return (
    <ol className="timeline">
      {items.map((item) => (
        <li key={item.title} className="timeline-item">
          <p className="timeline-dates">{item.dates}</p>
          <div className="timeline-body">
            <h3>{item.title}</h3>
            <p className="timeline-org">
              {item.orgUrl ? <ExternalLink href={item.orgUrl}>{item.org}</ExternalLink> : item.org}
              {item.place && <span> · {item.place}</span>}
            </p>
            <ul className="bullets">
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  );
}

function App() {
  useReveal();

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>

      <header className="topbar">
        <div className="container topbar-inner">
          <a href="#top" className="monogram" aria-label="Back to top">AP</a>
          <nav aria-label="Sections">
            <ul className="nav-links">
              {nav.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <ExternalLink href={cvUrl} className="btn btn-small">
            <Icon name="pdf" /> CV
          </ExternalLink>
        </div>
      </header>

      <main id="main">
        <section id="top" className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow hero-eyebrow">
                <Icon name="pin" /> {profile.location}
              </p>
              <h1>
                <span className="hero-name">{profile.name}</span>
                <span className="hero-role">
                  Data Scientist <span className="amp">&amp;</span> Computer Engineer
                </span>
              </h1>
              <p className="hero-intro">{profile.intro}</p>
              <div className="hero-actions">
                <a href="#projects" className="btn btn-primary">
                  See my work <Icon name="arrowDown" />
                </a>
                <ExternalLink href={cvUrl} className="btn">
                  <Icon name="pdf" /> Download CV
                </ExternalLink>
                <div className="social">
                  {links.map((link) => (
                    <ExternalLink key={link.label} href={link.href} className="icon-btn" aria-label={link.label} title={link.label}>
                      <Icon name={link.icon} size={18} />
                    </ExternalLink>
                  ))}
                </div>
              </div>
            </div>
            <div className="hero-visual">
              <NetworkGraph />
            </div>
          </div>

          <div className="container">
            <dl className="facts">
              {facts.map((fact) => (
                <div key={fact.label} className="fact">
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="projects" className="section" aria-labelledby="projects-heading">
          <div className="container">
            <SectionHeading id="projects" index="01" kicker="Selected work" title="Projects" />
            <div className="projects">
              {projects.map((project) => (
                <article key={project.title} className="card project" data-reveal>
                  {project.youtubeId && <YouTubeEmbed id={project.youtubeId} title={`${project.title} demo video`} />}
                  {project.image && (
                    <div className="media media-image">
                      <img
                        src={project.image.src}
                        alt={project.image.alt}
                        width={project.image.width}
                        height={project.image.height}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  )}
                  <div className="project-body">
                    <p className="meta">{project.subtitle}</p>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <ul className="chips" aria-label="Technologies">
                      {project.tags.map((tag) => (
                        <li key={tag} className="chip">{tag}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section" aria-labelledby="experience-heading">
          <div className="container">
            <SectionHeading id="experience" index="02" kicker="Where I've been" title="Experience & education" />
            <div className="two-col">
              <div data-reveal>
                <h3 className="subhead">Experience</h3>
                <Timeline items={experience} />
              </div>
              <div data-reveal>
                <h3 className="subhead">Education</h3>
                <Timeline items={education} />
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section" aria-labelledby="skills-heading">
          <div className="container">
            <SectionHeading id="skills" index="03" kicker="What I do" title="Skills" />
            <div className="skills">
              {skills.map((skill) => (
                <article key={skill.title} className="card skill" data-reveal>
                  <span className="skill-icon">
                    <Icon name={skill.icon} size={22} />
                  </span>
                  <h3>{skill.title}</h3>
                  <p className="muted">{skill.lead}</p>
                  <ul className="bullets">
                    {skill.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="stack-grid">
              <div className="card" data-reveal>
                <h3 className="subhead">Tech stack</h3>
                {techStack.map((group) => (
                  <div key={group.title} className="stack-group">
                    <h4>{group.title}</h4>
                    <ul className="chips">
                      {group.items.map((item) => (
                        <li key={item} className="chip">{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="card" data-reveal>
                <h3 className="subhead">Languages</h3>
                <ul className="languages">
                  {languages.map((lang) => (
                    <li key={lang.name}>
                      <div className="lang-row">
                        <span className="lang-name">{lang.name}</span>
                        <span className="meta">{lang.label}</span>
                      </div>
                      <div className="cefr" role="img" aria-label={`${lang.name}: ${lang.label}`}>
                        {['A1', 'A2', 'B1', 'B2', 'C1', 'C2'].map((step, i) => (
                          <span key={step} className={i < lang.level ? 'cefr-step on' : 'cefr-step'} />
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>
                <p className="meta cefr-legend">Scale: CEFR levels A1 → C2</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section" aria-labelledby="contact-heading">
          <div className="container">
            <div className="contact card" data-reveal>
              <p className="eyebrow">
                <span className="eyebrow-index">04</span> Get in touch
              </p>
              <h2 id="contact-heading">Let's build something with data.</h2>
              <p className="muted contact-text">
                Whether it's a role, a project or just a question, my inbox is open.
              </p>
              <a href={`mailto:${email}`} className="contact-email">
                {email} <Icon name="arrowUpRight" size={22} />
              </a>
              <div className="contact-links">
                {links.map((link) => (
                  <ExternalLink key={link.label} href={link.href} className="btn">
                    <Icon name={link.icon} /> {link.label}
                  </ExternalLink>
                ))}
                <ExternalLink href={cvUrl} className="btn">
                  <Icon name="pdf" /> CV (PDF)
                </ExternalLink>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <p>
            Built with React &amp; Vite · <ExternalLink href={sourceUrl}>Source on GitHub</ExternalLink>
          </p>
        </div>
      </footer>

      <Analytics />
    </>
  );
}

export default App;
