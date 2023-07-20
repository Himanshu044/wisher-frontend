import EventModel from './/EventModel';

function EditEvent(props) {
  console.log(props.event)
  const handleClose = () => props.setShowModel(false);
  const formHandler = (e) =>{
    var event = props.event
    props.setEvent({...event,[e.target.name]:e.target.value});
  }
  async function formSubmit(){
    const event = props.event
    let result =  await fetch(process.env.REACT_APP_API_ENDPOINT + 'events/'+ event._id ,{
        method: 'put',
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
  return (
    <>
    <EventModel
    showModel={(props.showModel)}
    handleClose={handleClose}
    event={props.event}
    formHandler={formHandler}
    formSubmit={formSubmit}
    />
    </>  
  );
}

export default EditEvent;