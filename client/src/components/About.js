import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Segment, Header, Image } from 'semantic-ui-react';
import { Row, Col} from 'react-materialize';
import Cat from '../images/kitten-800-605.jpeg';

const containerStyle = {
  maxWidth: 900,
  marginTop: 20,
  fontFamily: 'Roboto',
  justifyContent: 'center',
  alignItems: 'center'
};

const sectionStyle = {
  fontFamily: 'Montserrat',
  backgroundColor: '#E8E8E8',
  fontSize: 'inherit'
};

const headerStyle = {
  marginTop: 15,
  marginBottom: 15
};

const About = () => (
  <Container text style={containerStyle}>
    <Row>
      <Col s={12}>
        <Header textAlign='center' style={headerStyle}><h1><strong>About</strong></h1></Header>
      </Col>
    </Row>
    <Row>
      <Col s={12}>
      <Image src={Cat} alt='Cat' centered fluid/>
      </Col>
    </Row>
    <br />
    <Segment style={sectionStyle}>
      <Row >
        <Col s={12}>
        <br />
          <p textAlign='center'>
          Hello! Welcome to Pet Helper! I have designed and built this full stack web application with React / JavaScript on the front end and Ruby on Rails on the back end.  Similar to the app name, my goal here is to assist pet owners in the care of their furry and non-furry pals. The main features of this app are finding a new pet and storing & viewing pet information.
          </p>
        </Col>
      </Row>
      <Row>
        <Col s={12}>
          <p>
          Upon showing my application to veterinary assistant, he offered welcomed suggestions. He stated that the most important part of pet care is immunizations. For more information,  please reference or contact the <a href="https://www.aspca.org/pet-care/general-pet-care/vaccinations-your-pet"> ASPCA</a> . If you are considering adopting a pet and live in Salt Lake city or the surrounding areas,  I have included a built-in API,  which reflects up-to-date contact information for a list of local <Link to='/adoptions'> animal shelters </Link>. 
          </p>
        </Col>
      </Row>
      <Row>
        <Col s={12}>
          <p>
          Lastly, please check out my  <a href="https://nnatarajan.github.io/"> website </a> for upcoming projects.
          </p>
        </Col>
      </Row>
      <Row>
        <Col s={12}>
        <p>Thank you for visiting!</p>
        <p>~ Natasha</p>
        </Col>
      </Row>
      {/* <Row>
        <Col s={12}>
        <p>~ Natasha</p>
        </Col>
      </Row> */}
    </Segment>
  </Container>

)
export default About
