

// import React from 'react';
// import { Link } from 'react-router-dom';
// import useAuth from '../Hooks/useAuth';

// // import logo from '../images/logo2.png'
// /import logo from '../../images/logo2.png';
// import emptyProfile from '../../images/logo.jpg';
// import './Header.css'

// const Header = () => {
//     const { user, logout } = useAuth()
//     return (
//         <div style={{ marginTop: '65px' }}>
//             <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
//                 <div className="container-fluid">
//                     <Link className="navbar-brand" to="/home"> <img src={logo} alt="" /> Andaman Travel Agency</Link>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/home"><span>Home</span></Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/"><span>Services</span></Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/Contact">Contact<span></span></Link>
//                             </li>
                           

//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/departments">Rooms<span></span></Link>
//                             </li>

//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/logIn">LogIn<span></span></Link>
//                             </li>

//                         </ul>

//                         <br />

//                      <ul className='access-btn'>
//                             {user?.email ? <li>
//                                 <span> <img style={{ width: '38px', borderRadius: '100%', boxShadow: '1px 1px 6px lightsteelblue' }} src={user?.photoURL ? user?.photoURL : emptyProfile} alt="" /> <strong style={{ color: '#42B3E5' }}>{user?.displayName ? user?.displayName : user?.email}
//                                 </strong> &nbsp;</span>
//                                 {user?.email && <button onClick={logout} className="btn btn-design">Logout</button>}</li>
//                                 :
//                                 <li> <Link to='/login'><button className="btn btn-design" type="submit">Login</button></Link></li>}
//                         </ul> 
//                     </div>
//                 </div>
//             </nav>
//         </div>
//     );
// };

// export default Header;

import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import logo from '../../';
import logo from '../../images/logo2.png';
 import useAuth from '../Hooks/useAuth';
// import useAuth from '../';
import './Header.css';

const Header = () => {
   const { user, logOut } = useAuth();

   return (
      <div className='navBorder header-container '>
         <Navbar expand="lg" variant="dark" className="bg-secondary bg-gradient
">
            <Container>
               <Navbar.Brand as={Link} to="/home"><img width="75px" src={logo} alt="" />Andaman Travel Agency</Navbar.Brand>
               <Navbar.Toggle />
               <Navbar.Collapse className="justify-content-end">
                  <Nav className="me-auto">
                      <Nav.Link as={Link} to="/home">Home</Nav.Link> 
                      <Nav.Link as={Link} to="/services"> Our Services </Nav.Link> 
                      <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                      <Nav.Link as={Link} to="/addANewService">Add A New Service</Nav.Link>
                     {/* <Nav.Link as={Link} to="/appointment"></Nav.Link> */}
                     <Nav.Link as={Link} to="/login">Log In</Nav.Link>
                  </Nav>
                  <Navbar.Text>
                     {
                        user?.email ?
                           <div className='d-flex align-items-center justify-content-center'>
                              <div>
                                 <h5> Log in as : {user.displayName}</h5>
                              </div>
                              <div className='ms-2'>
                                 <button className='btn btn-warning' onClick={logOut}>Log Out</button>
                              </div>
                           </div>
                           :
                           <p>Guest</p>
                     }

                  </Navbar.Text>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </div>
   );
};

export default Header;