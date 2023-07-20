import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useForm} from 'react-hook-form';
import Modal from 'react-bootstrap/Modal';
import {useState} from 'react';

function Login(props) {
  const { handleSubmit, register, formState: { errors } } = useForm();
  const [loginError, setLoginError] = useState("");
  const handleClose = () => props.setShowLoginModel(false);
  const onSubmit = async (values) => {
    console.log(JSON.stringify(values));
    let result =  await fetch(process.env.REACT_APP_API_ENDPOINT+'auth/login',{
        method: 'post',
        body: JSON.stringify(values),
        headers: {
            'content-type': 'application/json'
        },
    }).then((response) => response.json())
    .then((responseJson) => {
      if(responseJson.error) setLoginError(responseJson.error);
      else{
        localStorage.setItem('user',responseJson.user);
        localStorage.setItem('token',responseJson.token);
        window. location. reload()
        handleClose();
      }
    })
  }
  return (
    <>
      <Modal show={props.showLoginModel} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body>
            <p className='errors'>{loginError}</p>
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
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  {...register("password", {
                    required: "Password Required"
                  })}
                />
                <p className='errors'>{errors.password?.message}</p>
              </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit"
            variant="primary">
              Login</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default Login;