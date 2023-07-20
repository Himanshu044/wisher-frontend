import Card from 'react-bootstrap/Card';
import { AiOutlinePlus } from 'react-icons/ai';
import {BsFillPencilFill} from 'react-icons/bs';
import {AiFillDelete} from 'react-icons/ai'
import {useState, useEffect} from 'react';
import Example from './/EventForm';
import EditEvent from './EditEvent';

function Carts() {
  const [showModel, setShowModel] = useState(false);
  const[showEditModel,setShowEditModel] =  useState(false);
  const[event,setEvent] =  useState({});
  let [events, setEvents] = useState([]);
  function handleClick(){
    setShowModel(true);
  }
  function editEventHandler(event){
    setEvent(event);
    setShowEditModel(true);
  }
  async function deleteEvent(id){
    alert('working')
    if (localStorage.getItem('user')){ 
      let result = await fetch(process.env.REACT_APP_API_ENDPOINT + 'events/delete/'+ id, {
        method: 'delete',
        headers: {
         'x-access-token': localStorage.getItem('token')
        },
        });
      setEvents(await result.json());
    }
  }
  async function fetchEvents(){
    if (localStorage.getItem('user')){ 
      let result =  await fetch('http://localhost:5000/events/',{
        method: 'get',
        headers: {
            'x-access-token':localStorage.getItem('token')
        },
      });
      console.log(result);
      setEvents(await result.json());
    }
  } 
  useEffect( () => {
    if (localStorage.getItem('user')) {
    fetchEvents()
    }
  },[showEditModel, showModel])
  return (
    <div className='addMargin'>
      <Example showModel={showModel} setShowModel={setShowModel}/>
      <EditEvent showModel={showEditModel} setShowModel={setShowEditModel} event={event} setEvent={setEvent}/>
    {events.length === 0?
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
    :
      events.map((event) => (
        <div className='addPad' key={event._id}>
        <Card>
          <Card.Body>
            <Card.Title>{event.eventName}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{event.eventAuther}</Card.Subtitle>
            <Card.Text>
              {event.message}
            </Card.Text>
            <Card.Link onClick={()=>deleteEvent(event._id)}><AiFillDelete size={30} style={{color:'red'}}/></Card.Link>
            <Card.Link onClick={()=>editEventHandler(event)}><BsFillPencilFill size={25} style={{color:'green'}} /></Card.Link>
          </Card.Body>
        </Card>
        </div>
      ))
    }
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