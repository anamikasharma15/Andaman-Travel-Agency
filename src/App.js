import Home from './componants/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';


import Header from './componants/Header/Header';

import Footer from './componants/Footer/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from './componants/NotFound/NotFound';
// import AboutUS from './componants/AboutUs/AboutUs';
// import Contact from './componants/Contact/Contact';
// import Services from './componants/Services/Services';
// import ServiceDetail from './componants/ServiceDetail/ServiceDetail';
// import LogIn from './componants/LogIn/LogIn;

 import LogIn from './componants/LogIn/LogIn';
// import AuthProvider from './Firebase/AuthProvider';
import AuthProvider from './componants/Context/AuthProvider';
// import PrivateRoute from './Firebase/PrivateRoute';
 import './App.css';
import Contact from './componants/Contact/Contact';
import Services from './componants/Services/Services';
import ServiceDetails from './componants/ServiceDetails/ServiceDetails';
import PrivateRoute from './componants/PrivateRoute/PrivateRoute';
import AddANewService from './componants/AddANewService/AddANewService';
import Orders from './componants/Orders/Orders';
import ManageOrders from './componants/ManageOrders/ManageOrders';


function App() {
  return (
      <div>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
             <Route path="/home">
              <Home></Home>
            </Route> 
            <Route exact path="/">
              <Home></Home>
            </Route>  

              {/* <PrivateRoute path="/aboutUs">
              <AboutUS></AboutUS> 
              </PrivateRoute>  */}

             <Route path="/contact">
              <Contact></Contact> 
            </Route>  

             <Route exact path="/services">
               <Services></Services>
            </Route> 

              <PrivateRoute exact path="/detail/:detailId">
               <ServiceDetails></ServiceDetails>
            </PrivateRoute> 
            
            <Route path="/logIn">
              <LogIn></LogIn>
            </Route> 

            <PrivateRoute path="/addANewService">
              <AddANewService></AddANewService>
            </PrivateRoute>

            <PrivateRoute path="/orders">
              <Orders></Orders>
            </PrivateRoute> 
            <PrivateRoute path="/manageOrders">
              <ManageOrders></ManageOrders>
            </PrivateRoute>  
        

             {/* <Route  path="">
              <ManageOrders></ManageOrders>
            </Route>   */}


            {/* <PrivateRoute path="/pharmacy">
              <Pharmacy></Pharmacy>
            </PrivateRoute> */}
            
            {/* <PrivateRoute path="/about/:id">
              <About></About>
            </PrivateRoute> */}
          
             <Route path="*">
              <NotFound></NotFound>
            </Route> 
          </Switch>

          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;







// // import logo from './logo.svg';

// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

// export default App;
