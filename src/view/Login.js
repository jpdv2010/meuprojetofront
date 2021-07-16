import React, { useState } from 'react';
import { Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, Button } from 'reactstrap';
import axios from 'axios';
import { useHistory } from "react-router-dom";


const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData()
        formData.append("grant_type", 'password');
        formData.append("username", username);
        formData.append("password", password);

        let headers = {
            headers: {
                Authorization: 'Basic bWV1cHJvamV0bzoxMjM='
            }
        };

        axios.post(`http://localhost:8480/oauth/token`, formData, headers)
            .then(res => {
                localStorage.setItem('access-token', res.data.access_token);
                history.push(`/produtos`)
            }).catch(function (error) {
                console.log(error);
            })
    }

    return (
        <div className="app flex-row align-items-center">
            <Container>
                <Row className="justify-content-center">
                    <Col md="4">
                        <CardGroup>
                            <Card className="p-4">
                                <CardBody>
                                    <Form onSubmit={(event) => handleSubmit(event)}>
                                        <h1>Login</h1>
                                        <InputGroup className="mb-3">
                                            <Input type="text" onChange={(event) => setUsername(event.target.value)} value={username} placeholder="Username" autoComplete="username" />
                                        </InputGroup>
                                        <InputGroup className="mb-4">
                                            <Input type="password" onChange={(event) => setPassword(event.target.value)} value={password} placeholder="Password" autoComplete="current-password" />
                                        </InputGroup>
                                        <Row>
                                            <Col xs="6">
                                                <Button color="primary" type="submit" className="px-4">Login</Button>
                                            </Col>
                                        </Row>
                                    </Form>
                                </CardBody>
                            </Card>
                        </CardGroup>

                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Login;