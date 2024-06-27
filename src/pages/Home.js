// src/pages/Home.js
import React from 'react';
import NavigationBar from '../components/Navbar';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles.css'; // Ensure this path is correct

const Home = () => {
  return (
    <div>
      <NavigationBar />
      <div className="jumbotron">
        <Container>
          <Row>
            <Col>
              <h1>Welcome to SmartHire</h1>
              <p>
                At SmartHire, we provide tailored job recommendations based on your unique resume. Our platform leverages the latest in machine learning to connect job seekers with the most suitable job opportunities.
              </p>
              <p>
                <Button variant="primary" href="/register">Get Started</Button>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row>
          <Col className="search-bar">
            <select>
              <option>All Category</option>
              <option>Software</option>
              <option>Finance</option>
              <option>Marketing</option>
            </select>
            <select>
              <option>Select Location</option>
              <option>New York</option>
              <option>Los Angeles</option>
              <option>Chicago</option>
            </select>
            <input type="text" placeholder="Search" />
            <Button variant="warning">Search</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>What We Do</h2>
            <p>We analyze your resume to understand your skills and experience. Our machine learning algorithms then match you with job opportunities that fit your profile. Whether you're looking for a new role or seeking career advancement, SmartHire is here to help.</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>How It Works</h2>
            <ul>
              <li>Create an account and log in.</li>
              <li>Upload your resume.</li>
              <li>Get personalized job recommendations.</li>
              <li>Apply for jobs directly through our platform.</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
