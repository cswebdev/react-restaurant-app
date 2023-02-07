
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';
import MenuList from './components/MenuList';
import Order from "./components/Order";
import { menuItems } from "./components/MenuList"
import { NavItem } from "react-bootstrap";



function App() {

  const [order, setOrder] = useState([]);
  const addToOrder = (item)=> {
    setOrder([...order, item])
  }


   return (
   <body className="bg-white">
      <div className="container">
        <div className="py-4 text-center container-fluid bg-light">
          <h1>Little Italy of Piedmont</h1>
          <p className="text-muted">Little Italy is committed to serving the town of Piedmont with authentic Italian food.</p>
        </div>

      {/* SHOPPING CART */}
      <div className="row">
        {/* * */}
        {/* [aside] SHOPPING CART section -START- */}
        <div className="col-md-4 order-md-2 p-4 position-fixed bottom-0 end-0">
          <h4 className="d-flex-justify-content-between align-items-center mb-3 ">
            <span className="text-muted">Your Cart</span>
          </h4>
          <ul className="list-group mb-3">
        <Order order={order} />
          

          
          </ul>
        </div>
        {/* [aside] total section -END- */}
        {/* * */}
        {/* [main] Appetizer section -START- */}
        <div className="col-lg-8 order-md-1 p-4">
          <div className="col-md-12">
            <div className="row">
              <h4 className="d-flex-justify-content-between align-items-center mb-3 ">
                  <span className="text-muted">Appetizers</span>
              </h4>
              <ul className="list-group col-md-10">
                
                <MenuList type = "appetizer"  addToOrder={addToOrder}/>  
                
             </ul>
            </div>
          </div>
          {/* * */}
          {/* [main] Appetizer section -END- */}
          {/* * */}
          <div className="col-md-12 mt-4">
            <div className="row">
                <h4 className="d-flex-justify-content-between align-items-center mb-3 ">
                  <span className="text-muted">Pasta</span>
                </h4>
                <ul className="list-group col-md-10">
              
                <MenuList type = "pasta" addToOrder={addToOrder} />
    
                </ul>
              
            </div>
          </div>
          <div className="col-md-12 mt-4">
            <div className="row">
                <h4 className="d-flex-justify-content-between align-items-center mb-3 ">
                  <span className="text-muted">Pizza</span>
                </h4>
                <ul className="list-group col-md-10">
              
                <MenuList type = "pizza" addToOrder={addToOrder} />
    
                </ul>
              
            </div>
          </div>
        </div>
        {/* [main] menu section -END- */}
      </div>
    </div>
   </body>

   );
}

export default App;
