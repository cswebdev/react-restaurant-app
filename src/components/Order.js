import MenuList from "./MenuList"
import MenuItem from "./MenuItem"
import Button from 'react-bootstrap/Button'
import { setOrder } from "./MenuItem"




    function Order({ order }) {
        return (
          <>
            {order.map(({ item, price }, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 className="my-0">{item}</h6>
                </div>
                <span className="text-muted">{price}</span>
              </li>
            ))}
          </>
        );
} 

export default Order