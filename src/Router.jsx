import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Landing from './Pages/Landing/Landing'
import Auth from './Pages/Auth/Auth'
import Payment from './Pages/Payment/Payment'
import Orders from './Pages/Orders/Orders'
import Cart from './Pages/Cart/Cart'
import Results from './Pages/Results/Results'
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';

const stripePromise = loadStripe(
  "pk_test_51RUune2eAgKqa6aCgvW3hDDaDcESK2fm9EVvYxKUVZNi76dMOF4qZoMplrOggQGQuzK5oFqq5BvX0jpo0PAQj3Za00IoJ2dv9S"
);
const Routing = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element = {<Landing/>}/>
            <Route path='/auth' element = {<Auth/>}/>
            <Route path='/payments' 
            element = {
              <ProtectedRoute 
                msg={"you must log in to pay"}
                redirect={"/payments"}
              >
                <Elements stripe={stripePromise}>
                     <Payment /> 
                     </Elements>
              </ProtectedRoute>
              
                       }
                     />

            <Route path='/orders' 
            element = {
              <ProtectedRoute 
              msg={"you must log in to access your orders"}
              redirect={"/orders"}
            >
                   <Orders/>
                </ProtectedRoute>
                 }/>
            <Route path='/cart' element = {<Cart/>}/>
            <Route path='/category/:categoryName' element = {<Results/>}/>
            <Route path='/products/:productId' element = {<ProductDetail/>}/>
        </Routes>
    </Router>
  )
}

export default Routing






