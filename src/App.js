
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
   return (
   <body className="bg-white">
      <div className="container">
        <div className="py-4 text-center container-fluid bg-light">
          <h1>Little Italy of Piedmont</h1>
          <p className="text-muted">Little Italy is committed to serving the town of Piedmont with authentic Italian food.</p>
        </div>


      <div className="row">
        {/* * */}
        {/* [aside] total section -START- */}
        <div className="col-md-4 order-md-2 p-4 position-fixed bottom-0 end-0">
          <h4 className="d-flex-justify-content-between align-items-center mb-3 ">
            <span className="text-muted">Your Cart</span>
          </h4>
          <ul className="list-group mb-3">
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 className="my-0">Product Name</h6>
                  <small className="text-muted">Brief Description</small>
              </div>
              <span className="text-muted">$12</span>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 className="my-0">Product Name 2</h6>
                  <small className="text-muted">Brief Description</small>
              </div>
              <span className="text-muted">$8</span>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 className="my-0">Product Name4</h6>
                  <small className="text-muted">Brief Description</small>
              </div>
              <span className="text-muted">$4</span>
            </li>
            <li className="list-group-item d-flex justify-content-between bg-light">
              <span>Total (USD)</span>
              <strong>$20</strong>
            </li>
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
                {/* * */}
                {/* li --- list item start [0] */}
                <li className="menu list-group-item d-flex justify-content-between lh-condensed">
                  <div className="col-md-8">
                    <h4 className="item-title col-md-8 mx-1">Garlic Bread Sticks</h4>
                    <div className="item-detail mx-3 fst-italic text-muted">Bread sticks coated and baked in garlic butter topped with italian herbs</div>
                  </div>
                  <div className="col-md-2 item-price-section">
                    <h4 className="item-price mt-3">$3.99</h4>
                  </div>
                  </li>
                {/* li --- list item end [0] */}
                {/* * */}
                {/* li --- list item start [0] */}
                <li className="menu list-group-item d-flex justify-content-between lh-condensed">
                  <div className="col-md-8">
                    <h4 className="item-title col-md-8 mx-1">Cheese Bread Sticks</h4>
                    <div className="item-detail mx-3 fst-italic text-muted">Bread sticks coated and baked in garlic butter and cheese topped with italian herbs</div>
                  </div>
                  <div className="col-md-2 item-price-section">
                    <h4 className="item-price mt-3">$3.99</h4>
                  </div>
                  </li>
                {/* li --- list item end [0] */}
                {/* * */}
                {/* li --- list item start [0] */}
                  <li className="menu list-group-item d-flex justify-content-between lh-condensed">
                  <div className="col-md-8">
                    <h4 className="item-title col-md-8 mx-1">Pepperoni Cheese Rolls</h4>
                    <div className="item-detail mx-3 fst-italic text-muted"> pizza sauce, house cheese blend</div>
                  </div>
                  <div className="col-md-2 item-price-section">
                    <h4 className="item-price mt-3">$4.99</h4>
                  </div>
                  </li>
                {/* li --- list item end [0] */}
                
              </ul>
            </div>
          </div>
          {/* * */}
          {/* [main] Appetizer section -END- */}
          {/* * */}
          <div className="col-md-12 mt-4">
              <div className="row">
                <h4 className="d-flex-justify-content-between align-items-center mb-3 ">
                  <span className="text-muted">Pizza</span>
                </h4>
                <ul className="list-group col-md-10">
                {/* * */}
                {/* li --- list item start [0] */}
                  <li className="menu list-group-item d-flex justify-content-between lh-condensed">
                  <div className="col-md-8">
                    <h4 className="item-title col-md-8 mx-1">Cheese Pizza</h4>
                    <div className="item-detail mx-3 fst-italic text-muted"> pizza sauce, house cheese blend</div>
                  </div>
                  <div className="col-md-2 item-price-section">
                    <h4 className="item-price mt-3">$10</h4>
                  </div>
                  </li>
                  {/* li --- list item end [0] */}
                  {/* * */}
                  {/* li --- list item start [0] */}
                <li className="menu list-group-item d-flex justify-content-between lh-condensed">
                  <div className="col-md-8">
                    <h4 className="item-title col-md-8 mx-1">Pepperoni Pizza</h4>
                     <div className="item-detail mx-3 fst-italic text-muted">Pepperoni, pizza sauce, house cheese blend</div>
                  </div>
                    <div className="col-md-2 item-price-section">
                      <h4 className="item-price mt-3">$10</h4>
                    </div>
                  </li>
                  {/* li --- list item end [0] */}
                  {/* * */}
                   {/* * */}
                  {/* li --- list item start [0] */}
                <li className="menu list-group-item d-flex justify-content-between lh-condensed">
                  <div className="col-md-8">
                    <h4 className="item-title col-md-8 mx-1">Meat Lovers Pizza</h4>
                     <div className="item-detail mx-3 fst-italic text-muted">Pepperoni, pizza sauce, house cheese blend</div>
                  </div>
                    <div className="col-md-2 item-price-section">
                      <h4 className="item-price mt-3">$10</h4>
                    </div>
                  </li>
                  {/* li --- list item end [0] */}
                  {/* * */}
                   {/* * */}
                  {/* li --- list item start [0] */}
                <li className="menu list-group-item d-flex justify-content-between lh-condensed">
                  <div className="col-md-8">
                    <h4 className="item-title col-md-8 mx-1">Hawaiian Pizza</h4>
                     <div className="item-detail mx-3 fst-italic text-muted">Pepperoni, pizza sauce, house cheese blend</div>
                  </div>
                    <div className="col-md-2 item-price-section">
                      <h4 className="item-price mt-3">$10</h4>
                    </div>
                  </li>
                  {/* li --- list item end [0] */}
                  {/* * */}




                  {/* list items end */}

                </ul>
                {/*  */}
                {/* ul end */}
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
