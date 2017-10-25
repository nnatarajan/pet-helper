import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Segment, Header, Image } from 'semantic-ui-react';
import { Row, Col} from 'react-materialize';
import Cat from '../images/kitten-800-400.jpeg';

const containerStyle = {
  maxWidth: 900,
  marginTop: 20,
  fontFamily: 'Roboto'
};

const sectionStyle = {
  fontFamily: 'Montserrat',
  backgroundColor: 'mintcream',
  fontSize: 'inherit'
};

const About = () => (
  <Container text style={containerStyle}>
    <Row>
      <Col s={12}>
        <Header textAlign='center'><h1><strong>About</strong></h1></Header>
      </Col>
    </Row>
    <Row>
      <Col s={12}>
      <Image src={Cat} alt='Cat' centered fluid/>
      </Col>
    </Row>
    <Segment style={sectionStyle}>
      <Row >
        <Col s={12}>
        <br />
          <p textAlign='center'>
          Hello! Welcome to Pet Helper! I have designed and built this web application with the sole purpose of assisting pet owners in taking the best care of their pets. The main features of this app are finding a new pet, storing & viewing pet information, and setting up reminders. Currently, I am working on adding more features and making improvements to Pet Helper. Please note that you may need to delete your browser history or change to a different browser to view the most current version of the Pet Helper application.
          </p>
        </Col>
      </Row>
      <Row>
        <Col s={12}>
          <p>
          On launch day, a veterinary assistant approached my booth and offered me welcomed suggestions. He had stated that the most important part of pet care is immunizations. In addition, he had mentioned that too often pet owners forget how vital immunizations are for basic care. Please click on this <a href="https://www.aspca.org/pet-care/general-pet-care/vaccinations-your-pet"> link </a> for more detailed information from the ASPCA. If you are considering adopting a pet, I have included a built-in API, that reflects up-to-date contact information for a list of local  <Link to='/adoptions'>  animal shelters </Link> in Salt Lake City, UT and surrounding areas. Lastly, please check out my <a href="https://nnatarajan.github.io/"> website </a>for upcoming projects.
          </p>
        </Col>
      </Row>
      <Row>
        <Col s={12}>
        <p>Thank you for visiting my site! </p>
        </Col>
      </Row>
      <Row>
        <Col s={12}>
        <p>~ Natasha</p>
        </Col>
      </Row>
    </Segment>
  </Container>

)
export default About
