import { Card, CardTitle, Button, Row, Col } from "reactstrap";

function ContactOnDash() {
  return (
    <Card
      body
      className='my-2'
      style={{ color: "black" }}>
      <CardTitle tag='h5'>Help & Support</CardTitle>
      <Row>
        <Col>
          <Button size='sm'>LiveChat</Button>
        </Col>
        <Col>
          <Button size='sm'>Contact Us</Button>
        </Col>
      </Row>
    </Card>
  );
}

export default ContactOnDash;
