import { Card, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";

//get user rewards from user context

function Rewards() {
  return (
    <Card
      body
      className='my-2'
      style={{ color: "black" }}>
      <CardTitle tag='h5'>Rewards</CardTitle>
      <CardSubtitle className='fs-2'>1800</CardSubtitle>
      <CardText>rewards points</CardText>
    </Card>
  );
}

export default Rewards;
