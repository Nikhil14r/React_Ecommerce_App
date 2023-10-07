import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import users from '../../users.json';
import './UserTestimonials.css';

const testimonialsData = users;
const usersPerPage = 6;

const UserTestimonials = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(testimonialsData.length / usersPerPage);

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const visibleUsers = testimonialsData.slice(
    (currentPage - 1) * usersPerPage,
    currentPage * usersPerPage
  );

  return (
    <section className="user-testimonials">
      <Container>
        <h2 className='text-center'>User Testimonials</h2>
        <Row>
          {visibleUsers.map((testimonial) => (
            <Col lg={2} key={testimonial.id}>
              <Card className="testimonial-card">
                <Card.Img variant="top" src={testimonial.image} alt={`Testimonial by ${testimonial.author}`} />
                <Card.Body>
                  <Card.Title className='text-center'>{testimonial.firstName}</Card.Title>
                  <Card className='text-center'>{testimonial.rating}</Card>
                  <Card.Text>{testimonial.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="testimonial-buttons">
        <button onClick={handlePrevClick} disabled={currentPage === 1} className="arrow-button left-arrow">&#8249;</button>
          <button onClick={handleNextClick} disabled={currentPage === totalPages} className="arrow-button right-arrow">&#8250;</button>
        </div>
      </Container>
    </section>
  );
};

export default UserTestimonials;
