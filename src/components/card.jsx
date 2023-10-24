import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function TheCard(props) {
  return (
   
    <Card style={{ margin: '10px' }}>
      <Card.Img style={{ height: '240px'}} variant="top" src={props.TheImage} />
      <Card.Body>
        <Card.Title>{props.TheTitle}</Card.Title>
        <Card.Text>{props.TheText}</Card.Text>
        <Button variant="primary">Find Out More!</Button>
      </Card.Body>
    </Card>
  
  );
}

export default TheCard;