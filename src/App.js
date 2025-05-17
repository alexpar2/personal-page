import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';

const fotoUrl = process.env.PUBLIC_URL + '/image.png';

function App() {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
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
                Hello! I'm Alejandro Pérez, a Computer Engineering grad and tech enthusiast from Spain. 
              </Card.Text>
            </Card.Body>
          </Card>
          
          {/* Links */}
          <div className="mb-5">
            <a 
              href="https://github.com/tuusuario" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline-dark mx-2"
            >
              <i className="bi bi-github"></i> GitHub
            </a>
            <a 
              href="https://linkedin.com/in/tuusuario" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline-primary mx-2"
            >
              <i className="bi bi-linkedin"></i> LinkedIn
            </a>
          </div>
          
          {/* Video */}
          <div className="ratio ratio-16x9 mb-5 shadow">
            <iframe 
              src="https://www.youtube.com/embed/TU_VIDEO_ID" 
              title="YouTube video player" 
              allowFullScreen
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;