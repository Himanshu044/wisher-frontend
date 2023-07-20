import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {useState} from 'react';
import {useForm} from 'react-hook-form';
function Register(props) {
  console.log(props)
  const { handleSubmit, register, formState: { errors } } = useForm();
  const handleClose = () => props.setShowRegisterModel(false);
  const [apiError, setApiError] = useState("");
  const onSubmit = async (values) => {
    console.log(values)
    let result =  await fetch(process.env.REACT_APP_API_ENDPOINT+'auth/create-account',{
        method: 'post',
        body: JSON.stringify(values),
        headers: {
            'content-type': 'application/json'
        },
    }).then((response) => response.json())
    .then((responseJson) => {
      if(responseJson.error) setApiError(responseJson.error);
      else{
        console.log(responseJson)
        localStorage.setItem('user',responseJson.user);
        localStorage.setItem('token',responseJson.token);
        handleClose();
      }
    })
  }
  return (
    <>
      <Modal show={props.showRegisterModel} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p className='errors'>{apiError}</p>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>FULL Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Full Name"
                autoFocus
                {...register("name", {
                  required: "Name Required" })}
              />
               <p className='errors'>{errors.name?.message}</p>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: "Email Required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "invalid email address"
                  }
                })}
              />
               <p className='errors'>{errors.email?.message}</p>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="phone"
                placeholder="Phone Number"
                {...register("phone", {
                  required: "Phone Required" })}
              />
               <p className='errors'>{errors.phone?.message}</p>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: "Password Required" })}
              />
               <p className='errors'>{errors.password?.message}</p>
            </Form.Group>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit"
            variant="primary">
              Register
            </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Register;