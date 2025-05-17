import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Image, Accordion } from 'react-bootstrap';

const fotoUrl = process.env.PUBLIC_URL + '/image.png';

function App() {
  return (
    <Container className="my-5">
      <Row className="justify-content-center text-center">
        {/* Foto de perfil */}
          <Image 
            src={fotoUrl} 
            alt="Mi foto" 
            roundedCircle 
            fluid 
            style={{ width: '150px', height: '150px', objectFit: 'cover' }} 
            className="mb-4 shadow"
          />
          
          {/* Nombre */}
          <h1 className="mb-3">Alejandro Pérez Argüello</h1>
          
          {/* Descripción */}
          <Card className="mb-4 shadow-sm">
            <Card.Body>
              <Card.Text className="lead">
                Hello! I'm Alex, a Computer Engineering grad and flexible developer from Spain. Feel free to browse my github to see my projects from university!
              </Card.Text>
            </Card.Body>
          </Card>
        <Col md={8} className="text-center">
        <h2 className="mb-4">Final Grade Project Showcase</h2>
        <p> Coming soon!</p>

          {/* Video */}
          <div className="ratio ratio-16x9 mb-5 shadow">
            <iframe 
              src="https://www.youtube.com/embed/TU_VIDEO_ID" 
              title="YouTube video player" 
              allowFullScreen
            ></iframe>
          </div>

          <h2 className="mb-4">Main Skills</h2>
          <Card className="mb-4 shadow-sm">
            <Card.Body>
              <Card.Title><h3>Full stack developer</h3></Card.Title>
              <Card.Text>
                Worked in several web applications at personal, academic and professional level using several frameworks, including:
                <ul className="list-unstyled text-dark">
                  <li>Full-stack development for <a href="https://www.linkedin.com/company/constella/posts/?feedView=all">Constella Intelligence</a> using frameworks such as Vue and Apache Airflow. 6 month internship experience.</li> 
                  <li>Several web applications with layered architecture using the HTML CSS JS PHP SQL stack.</li>
                  <li>Final Grade project: Development of a web application for online data analysis using Python (FastAPI), JavaScript (React) and MongoDB</li>
                </ul>
              </Card.Text>
              </Card.Body>
            </Card>

          <Card className="mb-4 shadow-sm">
            <Card.Body>
              <Card.Title><h3>AI and algorithms</h3></Card.Title>
              <Card.Text>
                Worked on various projects involving AI and algorithms, including:
                <ul className="list-unstyled text-dark">
                  <li>Development of several algorithms (pathfinding on a tiled game, minmax for connect4) for my AI class.</li>
                  <li>Training of a fake news detector using sklearn and nltk for my final grade project.</li>
                  <li>Interested in prompt engineering (used LLMs for parts of my final grade project).</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>

        </Col>
        <Col md={4} className="text-center">
            {/* Skills */}
               
            <Accordion defaultActiveKey="0" className="mb-4 shadow-sm text-start">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Technologies I've worked with</Accordion.Header>
              <Accordion.Body>
                <Accordion flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Programming Languages</Accordion.Header>
                    <Accordion.Body>
                      <ul className="list-unstyled text-dark text-bold">
                        <li>Bash</li>
                        <li>C</li>
                        <li>C++</li>
                        <li>Python</li>
                        <li>Java</li>
                        <li>Ruby</li>
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>PHP</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Databases</Accordion.Header>
                    <Accordion.Body>
                      <ul className="list-unstyled text-dark">
                        <li>SQL</li>
                        <li>Oracle</li>
                        <li>MongoDB</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Frameworks & Libraries</Accordion.Header>
                    <Accordion.Body>
                      <ul className="list-unstyled text-dark">
                        <li>React</li>
                        <li>Vue</li>
                        <li>Bootstrap</li>
                        <li>Flask</li>
                        <li>Jinja2</li>
                        <li>FastAPI</li>
                        <li>Pandas</li>
                        <li>Node.js</li>
                        <li>Uvicorn</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>Others</Accordion.Header>
                    <Accordion.Body>
                      <ul className="list-unstyled text-dark">
                        <li>Git & GitHub</li>
                        <li>JIRA</li>
                        <li>Docker</li>
                        <li>Docker Desktop</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

           <Card className="mb-4 shadow-sm">
            <Card.Body className="text-center">
                <Card.Title className="mb-4">Links of interest</Card.Title>
                <div className="d-grid gap-2">
                <a 
                    href="https://github.com/alexpar2/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-outline-dark"
                >
                    <i className="bi bi-github me-2"></i> GitHub
                </a>
                <a 
                    href="https://www.linkedin.com/in/alejandro-perez-arguello-1a614b9b/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary"
                >
                    <i className="bi bi-linkedin me-2"></i> LinkedIn
                </a>
                <a 
                    href={`${process.env.PUBLIC_URL}/documents/Alejandro_Perez.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary"
                >
                    <i className="bi bi-file-earmark-pdf me-2"></i> View CV
                </a>
                <a 
                    href="mailto:alex.prza@gmail.com"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-outline-danger"
                >
                    <i className="bi bi-envelope me-2"></i> Email
                </a>
                <a 
                    href="https://wa.me/34633975599"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-outline-success"
                >
                    <i className="bi bi-whatsapp me-2"></i> WhatsApp
                </a>
                <a 
                    href="https://t.me/frycat"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-outline-info"
                >
                    <i className="bi bi-telegram me-2"></i> Telegram
                </a>
                </div>
            </Card.Body>
            </Card>

        </Col>
      </Row>
    </Container>
  );
}

export default App;