import React, { useState, useEffect } from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, Container, Row } from 'reactstrap';
import styled from 'styled-components/macro';

import axiosWithAuth from '../utils/axiosWithAuth';
import FriendsForm from './FriendsForm';

const PaddedDiv = styled.div `
    margin: 2%;
    width: 20%;
    background-color: #474647;
    border-radius: 10px;
    color: white;
    border: 5px dotted red;
    text-align: center
`

const CardHeaderStyle = styled.div `
    background-color: #474647;
    color: white;
    font-size: 1.5rem;
    padding: 1%;
    border-bottom: 3px dotted #EEB902;

`
const CardTextStyle = styled.div `
    border-bottom: 3px dotted #2D7DD2;
    padding-bottom: 10px;
     margin-bottom: 25px;
`

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
                <PaddedDiv className="friend-container" key={friend.id}>
                    <CardHeaderStyle>{friend.name}</CardHeaderStyle>
                    <CardBody>
                        <CardTextStyle>{friend.age}</CardTextStyle>
                        <CardText>{friend.email}</CardText>
                    </CardBody>
                </PaddedDiv>  
            ))}
            </Row>
            <Row>
               <FriendsForm setFriends={setFriends} /> 
            </Row>
        </Container>
    )

}

export default FriendsList;