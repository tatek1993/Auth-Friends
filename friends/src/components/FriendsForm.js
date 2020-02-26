import React, {useState} from 'react';

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
      <form onSubmit={event => handleSubmit(event)}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          name="name"
          onChange={event => handleChange(event)}
        />
        <label htmlFor="age">Age:</label>
        <input
          id="age"
          type="number"
          name="age"
          onChange={event => handleChange(event)}
        />
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="text"
          name="email"
          onChange={event => handleChange(event)}
        />
        <button>Submit!</button>
      </form>
    </div>
  );
      

}
export default FriendsForm;