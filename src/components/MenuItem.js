import Button from 'react-bootstrap/Button'
import MenuList from './MenuList';
import App from '../App';



function MenuItem({key, item, description, type, price}){
const addToOrder = []
     const handleSubmit = (e) => {
         e.preventDefault();
        addToOrder(item, price)
        
     }

return (
    <li className="menu list-group-item d-flex justify-content-between lh-condensed item" type={type} key={key}>
        <div className="col-md-10">
            <h4 className="item-title col-md-8 mx-1">{item}</h4>
            <div className="item-detail mx-3 fst-italic text-muted">{description}</div>
        </div>
        <div className="col-md-2 item-price-section">
            <h4 className="item-price mt-3">${price}</h4>
            <Button variant="outline-primary" size="sm" type="submit" onClick={() => handleSubmit()}>Add to cart</Button>
            {/* <Button variant="outline-primary" size="sm" type="submit" onSubmit={handleSubmit} value={(itemOrder)}>Add to cart</Button> */}
        </div>
    </li>
    
)

}   
export default MenuItem