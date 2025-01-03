import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChangePAssword from './ChangePassword';
import Appli from './Dasboard';
import UserTable from './UserTable';
import Login from './Login';
import Report from './Report';
import Alertonoff from './Alertonoff';
import MachineTable from './MachineTable';
import Showreport from './ShowReport';
import CompanySetting from './Company';
import image from './img/logo.png';
import img from './img/th.jpeg';

import './index.css';

function Header() {
  return (
    <Router>
      <Navbar expand="lg" className="bg-body-tertiary bg-colors">
        <Container fluid>
          <div>
            <Link to="/">
              <img src={image} alt="Logo" className="logo1" />
            </Link>
          </div>
          <div className="d-flex" style={{ alignItems: 'center' }}>
            <div className="imgs">
              <Link to="/Report">
                <img src={img} alt="Logo" className="reportlogo" />
              </Link>
            </div>
            <div className="ml-2">
              <h4>harshitbhai</h4>
              <p>niklkanth</p>
            </div>
          

          <Nav className="" style={{ maxHeight: '100px' }}>
            <NavDropdown className="userid"  style={{ alignContent: 'center' }}>
              <NavDropdown.Divider />
              
              <NavDropdown title="Settings" className="dropdown-item  ">
              <NavDropdown.Item >
                <Link to="/Login"className="dropdown-item">
                  Log In
                </Link>
              </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/UserTable" className="dropdown-item" >
                    User Table
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/Alertonoff" className="dropdown-item">
                    Alert On/Off
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/MachineTable" className="dropdown-item">
                    Machine Table
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/Showreport" className="dropdown-item">
                    Show Report
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/Company" className="dropdown-item">
                    Company Settings
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/ChangePassword" className="dropdown-item">
                    Change Password
                  </Link>
                </NavDropdown.Item>
            
              </NavDropdown>

              {/* Log Out */}
              <NavDropdown.Item>
                <Link to="/" className="nav-link">
                  Log Out
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          </div>
        </Container>
      </Navbar>

      <Routes>
        <Route index element={<Appli />} />
        <Route path="/Report" element={<Report />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/UserTable" element={<UserTable />} />
        <Route path="/Alertonoff" element={<Alertonoff />} />
        <Route path="/MachineTable" element={<MachineTable />} />
        <Route path="/Showreport" element={<Showreport />} />
        <Route path="/Company" element={<CompanySetting />} />
        <Route path="/ChangePassword" element={<ChangePAssword/>}/>
      </Routes>
    </Router>
  );
}

export default Header;
