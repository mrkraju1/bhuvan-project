import React, { useState } from "react";
import { Container, Form, Card,Button } from "react-bootstrap";
import {toast} from 'react-toastify'
import axios from 'axios'

const Header = () => {
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!name || !role || !email || !password){
            toast.warning("please fill Fields")
        }else{
            axios.post("http://localhost:7800/sample/", {
                name,role,email,password
            })
            .then((res) => console.log(res));
            toast.success("User added")
        }
    }

  return (
    <div className="page">
      <Container>
        <div className="con">
        <Form onSubmit={handleSubmit}>
          <Card className="car">
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name"value={name} onChange={(e)=> setName(e.target.value)} placeholder="Enter Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicRole">
              <Form.Label>Role</Form.Label>
              <Form.Control type="text" value={role} onChange={(e)=> setRole(e.target.value)}placeholder="Enter Role" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Enter Email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Enter Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Card>
        </Form>
        </div>
      </Container>
      {/* ---------------------------Html------------------------------------------------------ */}
      {/* <div className="main">
        <h1>welcome</h1>
        <div className="Form-input">
        <label for="fname">First name:</label><br/>
        <input type="text" id="fname" placeholder="name" />
        <br></br>
        </div>
        <div className="Form-input">
        <label for="lname">Last name:</label><br/>
        <input type="text" id="fname" />
        <br></br>
        </div>
        <div className="Form-input">
        <label for="fname">Email:</label><br/>
        <input type="email" id="email" />
        </div>
        <div className="Form-input">
            <button className="form-btn">Submit</button>
        </div>
      </div> */}
    </div>
  );
};

export default Header;
