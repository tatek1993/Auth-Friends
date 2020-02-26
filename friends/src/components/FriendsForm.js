import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


import axiosWithAuth from '../utils/axiosWithAuth';


const FriendsForm = props => {
    const [newFriend, setNewFriend] = useState(
        {
            name: '',
            age: '',
            email: ''
        }
    );
    
    const handleChange = event => {
        setNewFriend({ ...newFriend, [event.target.name]: event.target.value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        axiosWithAuth()
            .post('/api/friends', newFriend)
            .then(res => props.setFriends(res.data))
            .catch(err => console.log("I'll be there for youuuuuuuu~", err));
    };

      
  return (
    <div className="friends-form">
        <Form inline onSubmit={event => handleSubmit(event)}>
            <FormGroup>
                <label htmlFor="name" hidden>Name</label>
                <input
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                onChange={event => handleChange(event)}
                />
            </FormGroup>
            {' '}
            <FormGroup>
                <label htmlFor="age" hidden>Age</label>
                <input
                id="age"
                type="number"
                name="age"
                placeholder="Age"
                onChange={event => handleChange(event)}
                />
            </FormGroup>
            {' '}
            <FormGroup>
                <label htmlFor="email" hidden>Email</label>
                <input
                id="email"
                type="text"
                name="email"
                placeholder="Email"
                onChange={event => handleChange(event)}
                />
            </FormGroup>
            {' '}
            <Button>Submit</Button>
        </Form>
    </div>
  );
      

}
export default FriendsForm;