import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function TheCard(props) {
  const [textbtn, thanks] = useState('Find out more!')
  return (
    
    <Card>
      <Card.Img style={{ height: '240px'}} variant="top" src={props.TheImage} />
      <Card.Body>
        <Card.Title>{props.TheTitle}</Card.Title>
        <Card.Text>{props.TheText}</Card.Text>
        <Button onClick={() => thanks('You clicked!')} variant="primary">{textbtn}</Button>
      </Card.Body>
    </Card>
  
  )
}

export default TheCard;