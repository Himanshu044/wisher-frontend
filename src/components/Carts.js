import Card from 'react-bootstrap/Card';
import { AiOutlinePlus } from 'react-icons/ai';
import {BsFillPencilFill} from 'react-icons/bs';
import {AiFillDelete} from 'react-icons/ai'
import {useState} from 'react';
import Example from './/EventForm';

function Carts() {
  const [showModel, setShowModel] = useState(false);
  function handleClick(){
    setShowModel(true);
   // console.log(showModel);
  }
  return (
    <div className='addMargin'>
      <Example showModel={showModel} setShowModel={setShowModel}/>
    <div className='addPad'>
      <Card>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#"><AiFillDelete size={30} style={{color:'red'}}/></Card.Link>
        <Card.Link href="#"><BsFillPencilFill size={25} style={{color:'green'}} /></Card.Link>
      </Card.Body>
    </Card>
    </div>
    <div className='addPadLogo'>
      <Card  onClick={()=>handleClick()}>
      <Card.Body>
        <Card.Title>Add Event</Card.Title>
        <Card.Text>
        <AiOutlinePlus size={135} />
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </div>
  );
}

export default Carts;