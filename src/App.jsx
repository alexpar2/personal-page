import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Container, Row, Col, Card, Image, Accordion, Badge } from 'react-bootstrap';
import YouTubeEmbed from './components/YouTubeEmbed.jsx';
import { profile, projects, experience, education, skills, techStack, languages, links, sourceUrl } from './data.js';

function BulletList({ items }) {
  return (
    <ul className="mb-0">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function TimelineCard({ title, org, orgUrl, place, dates, points }) {
  return (
    <Card className="mb-3 shadow-sm text-start">
      <Card.Body>
        <div className="d-flex flex-wrap justify-content-between gap-2">
          <Card.Title as="h4" className="mb-1">{title}</Card.Title>
          <span className="timeline-dates text-muted small">{dates}</span>
        </div>
        <Card.Subtitle as="p" className="mb-2 text-muted">
          {orgUrl ? (
            <a href={orgUrl} target="_blank" rel="noopener noreferrer">{org}</a>
          ) : (
            org
          )}
          {place && ` · ${place}`}
        </Card.Subtitle>
        <BulletList items={points} />
      </Card.Body>
    </Card>
  );
}

function App() {
  return (
    <>
      <Container as="main" className="my-5">
        <header className="text-center mb-4">
          <h1>{profile.name}</h1>
          <p className="h3 text-muted">{profile.role}</p>
        </header>

        <Card className="mb-5 shadow-sm">
          <Card.Body>
            <Card.Text className="lead mb-0">{profile.intro}</Card.Text>
          </Card.Body>
        </Card>

        <Row>
          <Col md={8}>
            <section aria-labelledby="projects-heading" className="mb-5">
              <h2 id="projects-heading" className="mb-4 text-center">Projects</h2>
              {projects.map((project) => (
                <Card key={project.title} className="mb-4 shadow-sm">
                  <Card.Body>
                    <Card.Title as="h3">{project.title}</Card.Title>
                    <Card.Subtitle as="p" className="mb-3 text-muted">{project.subtitle}</Card.Subtitle>
                    {project.youtubeId && <YouTubeEmbed id={project.youtubeId} title={`${project.title} demo video`} />}
                    {project.image && (
                      <Image
                        src={project.image.src}
                        alt={project.image.alt}
                        width={project.image.width}
                        height={project.image.height}
                        loading="lazy"
                        decoding="async"
                        fluid
                        className="mb-3 shadow-sm"
                      />
                    )}
                    <Card.Text>{project.description}</Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </section>

            <section aria-labelledby="experience-heading" className="mb-5">
              <h2 id="experience-heading" className="mb-4 text-center">Experience</h2>
              {experience.map((item) => (
                <TimelineCard key={item.title} {...item} />
              ))}
            </section>

            <section aria-labelledby="education-heading" className="mb-5">
              <h2 id="education-heading" className="mb-4 text-center">Education</h2>
              {education.map((item) => (
                <TimelineCard key={item.title} {...item} />
              ))}
            </section>

            <section aria-labelledby="skills-heading" className="mb-5">
              <h2 id="skills-heading" className="mb-4 text-center">Main skills</h2>
              {skills.map((skill) => (
                <Card key={skill.title} className="mb-4 shadow-sm">
                  <Card.Body>
                    <Card.Title as="h3">{skill.title}</Card.Title>
                    <Card.Text>{skill.lead}</Card.Text>
                    <BulletList items={skill.points} />
                  </Card.Body>
                </Card>
              ))}
            </section>
          </Col>

          <Col md={4}>
            <section aria-labelledby="stack-heading" className="mb-5">
              <h2 id="stack-heading" className="mb-4 text-center">My tech stack</h2>
              <Accordion defaultActiveKey="0" alwaysOpen className="shadow-sm">
                {techStack.map((group, i) => (
                  <Accordion.Item key={group.title} eventKey={String(i)}>
                    <Accordion.Header as="h3">{group.title}</Accordion.Header>
                    <Accordion.Body>
                      <ul className="tech-list">
                        {group.items.map((item) => (
                          <li key={item}>
                            <Badge bg="light" text="dark" className="border">{item}</Badge>
                          </li>
                        ))}
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </section>

            <section aria-labelledby="languages-heading" className="mb-5">
              <h2 id="languages-heading" className="mb-4 text-center">Languages</h2>
              <Card className="shadow-sm">
                <Card.Body>
                  <BulletList items={languages} />
                </Card.Body>
              </Card>
            </section>

            <section aria-labelledby="contact-heading" className="mb-5">
              <h2 id="contact-heading" className="mb-4 text-center">Contact me!</h2>
              <Card className="shadow-sm bg-dark text-white">
                <Card.Body className="text-center">
                  <Card.Title as="h3" className="mb-4 text-white">Links of interest</Card.Title>
                  <div className="d-grid gap-2">
                    {links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className={`btn btn-${link.variant}`}
                        {...(link.external && { target: '_blank', rel: 'noopener noreferrer' })}
                      >
                        <i className={`bi bi-${link.icon} me-2`} aria-hidden="true" />
                        {link.label}
                      </a>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </section>
          </Col>
        </Row>
      </Container>

      <footer className="text-center text-muted small pb-4">
        This site is open source: see the code on <a href={sourceUrl} target="_blank" rel="noopener noreferrer">GitHub</a>.
      </footer>

      <Analytics />
    </>
  );
}

export default App;
