import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './index.css';
import { Link } from 'react-router-dom';

import { FaUser,FaLock,FaLongArrowAltRight,FaMailBulk } from 'react-icons/fa'; 

function Login() {


    
  return (
    <div className="bg-color1">
    <div className="container-login mb-5 ">

        <h1 className="text-center  head1"> Login</h1>
      <Form>
      <Form.Group className="mb-3 userids" controlId="formBasicEmail"> 
        <span className="usericon"> <FaMailBulk size={18 } color="#212529" /></span>
        <Form.Control type="Email"  placeholder="please enter email" className="form-class" /> 
      </Form.Group>
        <Form.Group className="mb-3   userids" controlId="formBasicPassword">
        <span className="usericon"> <FaLock size={18 } color="#212529" /></span>
          <Form.Control type="password" placeholder="Password"  className="form-class" />
          </Form.Group>
          <div className="text-center pt-3 mt-3 mb-3">
						<span  className="txt1">
							Forgot
						</span>
						<a  className="txt2" href="#">
							 Password?
						</a>
		</div>
        <Button variant="primary" type="submit" className="btn-login">
          Login
        </Button>
        


      </Form>
    </div>
    </div>
  );
}

export default Login;
