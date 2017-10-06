import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Header, Image } from 'semantic-ui-react';
import { Row, Col} from 'react-materialize';
import Cat from '../images/about.jpeg';

const About = () => (
  <Container text>

<Row>
<Col s={12}>
<br />
<Header textAlign='center'>
<h1><strong>About</strong></h1>
</Header>
</Col>
</Row>
<Row>
  <Col s={12}>
  <Image src={Cat} alt='Cat' centered fluid/>
  </Col>
</Row>
<Row >
<Col s={12}>
<br />
<p textAlign='center'>
    Hello! Welcome to Pet Helper! I built this web application with the intention of assisting you in taking care of all of your pets. The main features of this app are finding a new pet, storing and viewing pet information, and setting up reminders. In the near future, I plan to add on more features and make improvements to the app.
</p>
</Col>
</Row>
<Row>
<Col s={12}>
<p>
 After presenting my app to the public, a veterinary assistant approached my booth and offered me welcomed suggestions. He had stated that the most important part of pet care is immunizations. Please click on this <a href="https://www.aspca.org/pet-care/general-pet-care/vaccinations-your-pet"> link </a> for more detailed information from the ASPCA. Check out the <Link to='/adoptions'>adoption page</Link> for a list of local shelters in the Salt Lake City area. Finally, check out my <a href="https://nnatarajan.github.io/"> website </a>for upcoming projects. Thank you for stopping by!
</p>
</Col>
</Row>

</Container>
)

export default About
