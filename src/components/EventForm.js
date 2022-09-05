import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {useState} from 'react';

function Example(props) {
  const handleClose = () => props.setShowModel(false);
  const [eventName,seteventName] = useState("");
  const [eventAuther,seteventAuther] = useState("");
  const [phone,setPhone] = useState("");
  const [date,setDate] = useState("");
  const [message,setMessage] = useState("");
  async function formSubmit(){
    console.log(eventName + " " + eventAuther + " " + phone + " " + date + " " + message)
    let result =  await fetch('http://localhost:5000/add-event',{
        method: 'post',
        body: JSON.stringify({eventName,eventAuther,date,phone,message}),
        headers: {
            'content-type': 'application/json'
        },
    });
    result = await result.json();
    console.log(result);
    alert('event created!');
    handleClose()
  }
  return (
    <>
      <Modal show={props.showModel} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Event Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Event Name"
                onChange={(e)=> seteventName(e.target.value)}
                value={eventName}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Auther Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Auther Name"
                onChange={(e)=> seteventAuther(e.target.value)}
                value={eventAuther}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Phone Number"
                onChange={(e)=> setPhone(e.target.value)}
                value={phone}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Event Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Event Date"
                views={['date', 'month']}
                onChange={(e)=> setDate(e.target.value)}
                value={date}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
              value={message}
              onChange={(e)=> setMessage(e.target.value)}
            >
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={formSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;