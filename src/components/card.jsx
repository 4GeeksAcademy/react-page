import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function TheCard() {
  return (
   
    <Card style={{ margin: '10px' }}>
      <Card.Img style={{ height: '240px'}} variant="top" src="https://images.unsplash.com/photo-1618886487325-f665032b6352?auto=format&fit=crop&q=60&w=900&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlJTIwaW1hZ2VzfGVufDB8fDB8fHww" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  
  );
}

export default TheCard;