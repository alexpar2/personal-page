import React from 'react';
import { Analytics } from "@vercel/analytics/react"
import FuzzyText from './components/FuzzyText/FuzzyText.jsx';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Image, Accordion } from 'react-bootstrap';

const fotoUrl = process.env.PUBLIC_URL + '/yo.jpg';

function App() {
  return (
    
    <Container className="my-5">
      <Analytics />
      <Row className="justify-content-center text-center">      
          {/* Nombre */}
            <h1            >
              Alejandro Pérez Argüello
            </h1>

             <h1>Data Scientist and Computer Engineer</h1> 

          {/* Descripción */}
          <Card className="mb-4 shadow-sm">
            <Card.Body>
              <Card.Text className="lead">
                Hello! I'm Alex, a passionate data scientist and computer engineer with a strong background in full-stack development, AI, and data engineering. I have experience working in the cybersecurity industry and a proven track record of developing innovative solutions to complex problems. I'm always eager to learn new technologies and take on challenging projects that allow me to grow both personally and professionally.
              </Card.Text>
            </Card.Body>
          </Card>
        <Col md={8} className="text-center">


          <h2 className="mb-4">Final Grade Project Showcase</h2>


          {/* Video */}
          <div className="ratio ratio-16x9 mb-5 shadow">
            <iframe 
              src="https://www.youtube.com/embed/wjrkNxGkhR4 " 
              title="YouTube video player" 
              allowFullScreen
            ></iframe>
          </div>

          <h2 className="mb-4">Main Skills</h2>

          <Card className="mb-4 shadow-sm">
            <Card.Body>
              <Card.Title><h3>AI and Data Science</h3></Card.Title>
              <Card.Text>
                <p className=''>Master's degree in Data Science and Computer Engineering:</p>
                <ul className="list-unstyled">
                  <li>- Fluent in state of the art Data Analysis techniques and tools. Experience with a wide variety of datasets (image, text, genomic, time-series).</li>
                  <li>- Advanced knowledge of natural language processing and machine learning applied to social media data.</li>
                  <li>- Experience with deep learning frameworks such as TensorFlow and PyTorch.</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="mb-4 shadow-sm">
            <Card.Body>
              <Card.Title><h3>Full stack developer</h3></Card.Title>
              <Card.Text>
                Worked in several web applications at personal, academic and professional level using several frameworks, including:
                <ul className="list-unstyled">
                  <li>- Full-stack development for <a className="text-warning" href="https://www.linkedin.com/company/constella/posts/?feedView=all">Constella Intelligence</a> (a cybersecurity firm that manages the biggest data lake of compromised assets in the world) using frameworks such as Vue and Apache Airflow.</li>
                  <li>- Several web applications with layered architecture using the HTML CSS JS PHP SQL stack. See this web's source code on my <a className='text-warning' href="https://github.com/alexpar2/personal-page">GitHub</a>.</li>
                  <li>- Final Grade project: Development of a web application for online data analysis using Python (FastAPI), JavaScript (React) and MongoDB.</li>
                </ul>
              </Card.Text>
              </Card.Body>
            </Card>



            <Card className="mb-4 shadow-sm">
            <Card.Body>
              <Card.Title><h3>Data engineering</h3></Card.Title>
              <Card.Text>
                <p className=''>Experience in ETL and data pipeline development:</p>
                <ul className="list-unstyled">
                  <li>- Real experience developing data preprocessing scripts in python for damaged or faulty CSV, JSON and SQL files.</li>
                  <li>- Experience with data warehousing and business intelligence tools.</li>
                  <li>- Personally passionate about data visualization.</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>



        

        </Col>
        <Col md={4} className="text-center">
          <h2 className="mb-4">My tech stack</h2>
            {/* Skills */}
               
            <Accordion defaultActiveKey="0" className="mb-4 shadow-sm text-start">
            <Accordion.Item eventKey="0">
              <Accordion.Header><p className='text-black'>Technologies i've worked with</p></Accordion.Header>
              <Accordion.Body>
                <Accordion flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header><p className='text-black'>My Best Programming Languages</p></Accordion.Header>
                    <Accordion.Body>
                      <ul className="list-unstyled text-dark text-bold">
                        <li>Bash scripting</li>
                        <li>C++</li>
                        <li>Python</li>
                        <li>R</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  
                  <Accordion.Item eventKey="1">
                    <Accordion.Header><p className='text-black'>Databases I've worked with</p></Accordion.Header>
                    <Accordion.Body>
                      <ul className="list-unstyled text-dark">
                        <li>SQL</li>
                        <li>Oracle</li>
                        <li>MongoDB</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  
                  <Accordion.Item eventKey="2">
                    <Accordion.Header><p className='text-black'>Frameworks & Libraries</p></Accordion.Header>
                    <Accordion.Body>
                      <ul className="list-unstyled text-dark">
                        <li>scikit-learn</li>
                        <li>XGBoost</li>
                        <li>Pytorch</li>
                        <li>Numpy</li>
                        <li>Matplotlib</li>
                        <li>Seaborn</li>
                        <li>Plotly</li>
                        <li>React</li>
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
                    <Accordion.Header><p className='text-black'>Others</p></Accordion.Header>
                    <Accordion.Body>
                      <ul className="list-unstyled text-dark">
                        <li>Git & GitHub</li>
                        <li>Docker</li>
                        <li>Linux</li>
                        <li>Gephi</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <h2 className="mb-4">Contact me!</h2>
           <Card className="mb-4 shadow-sm bg-dark text-white">
            <Card.Body className="text-center">
                <Card.Title className="mb-4">Links of interest</Card.Title>
                <div className="d-grid gap-2">
                <a 
                    href="https://github.com/alexpar2/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-outline-light"
                >
                    <i className="bi bi-github me-2"></i> GitHub
                </a>
                <a 
                    href="https://www.linkedin.com/in/alejandro-perez-arguello-1a614b9b/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-outline-light"
                >
                    <i className="bi bi-linkedin me-2"></i> LinkedIn
                </a>
                <a 
                    href={`${process.env.PUBLIC_URL}/documents/Resume 2026.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-warning"
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