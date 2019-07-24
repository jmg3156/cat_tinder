import React, { Component } from 'react'
import {
    Col, Container, Row, ListGroup
}   from 'react-bootstrap'

export default class Trolls extends Component {
    render(){
        return(
            <Container>
                <Row>
                    <Col xs={12}>
                        <ListGroup>
                            {this.props.trolls.map((troll, index)=>{
                                return(
                                    <ListGroup.Item key={index}>
                                    <h4>
                                        <span> {troll.name} </span>
                                    </h4>
                                        <span>Age:  {troll.age} </span>
                                    <br></br>
                                        <span> <img src={troll.image}/> </span>
                                    <br></br>
                                        <span> Enjoys: {troll.enjoys} </span>
                                    </ListGroup.Item>
                                )
                            })}
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        )
    }
}
