import EventModel from './/EventModel';
import {useState} from 'react';

function Example(props) {
  const handleClose = () => props.setShowModel(false);
  const [event,setEvent] = useState({
    eventName: '',
    eventAuther: '',
    phone: '',
    date: '',
    message: ''
  });
  const formHandler = (e) =>{
    console.log("hello" + e.target.name + " " +e.target.value);
    setEvent({...event,[e.target.name]:e.target.value});
  }
  async function formSubmit(){
    console.log(event)
    let result =  await fetch(process.env.REACT_APP_API_ENDPOINT + 'events/add-event',{
        method: 'post',
        body: JSON.stringify(event),
        headers: {
            'content-type': 'application/json',
            'x-access-token':localStorage.getItem('token')
        },
    });
    result = await result.json();
    console.log(result);
    alert('event created!');
    handleClose()
  }
  console.log(props.showModel);
  return (
    <>
    <EventModel
    showModel={(props.showModel)}
    handleClose={handleClose}
    event={event}
    formHandler={formHandler}
    formSubmit={formSubmit}
    />
    </>  
  );
}

export default Example;