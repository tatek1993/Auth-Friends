import React, { useState, useEffect } from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, Container, Row } from 'reactstrap';
import styled from 'styled-components/macro';

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
        <Container className="friends-list">
            <Row>
            {friends.map(friend => (
                <Card className="friend-container" key={friend.id}>
                    <CardHeader>{friend.name}</CardHeader>
                    <CardBody>
                        <CardTitle>{friend.age}</CardTitle>
                        <CardText>{friend.email}</CardText>
                    </CardBody>
                </Card>  
            ))}
            </Row>
            <Row>
               <FriendsForm setFriends={setFriends} /> 
            </Row>
        </Container>
    )

}

export default FriendsList;