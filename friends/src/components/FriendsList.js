import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import FriendsForm from './FriendsForm';

const FriendsList = () => {

    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth()
          .get('/api/friends')
          .then(res => {
            setFriends(res.data);
          })
          .catch(err => console.log("I'll be there for youuuuuuuu~", err));
    }, []);

    return (
        <div className="friends-list">
            {friends.map(friend => (
                <div className="friend-container" key={friend.id}> 
                    <h3>{friend.name}</h3>
                    <p>{friend.age}</p>
                    <p>{friend.email}</p>
                </div>   
            ))}
            <FriendsForm setFriends={setFriends} />
        </div>
    )

}

export default FriendsList;