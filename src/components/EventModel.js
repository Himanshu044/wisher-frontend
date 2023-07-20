import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
const EventModel = (props) =>{
    return (
        <>
          <Modal show={props.showModel} onHide={props.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add Event</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Event Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Event Name"
                    name="eventName"
                    onChange={(e)=> props.formHandler(e)}
                    value={props.event.eventName}
                    autoFocus
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Auther Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="eventAuther"
                    placeholder="Auther Name"
                    onChange={(e)=> props.formHandler(e)}
                    value={props.event.eventAuther}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    onChange={(e)=> props.formHandler(e)}
                    value={props.event.phone}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Event Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="date"
                    placeholder="Event Date"
                    views={['date', 'month']}
                    onChange={(e)=> props.formHandler(e)}
                    value={props.event.date}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea"
                  rows={3} 
                  name="message"
                  value={props.event.message}
                  onChange={(e)=> props.formHandler(e)}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={props.handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={props.formSubmit}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
}

export default EventModel;