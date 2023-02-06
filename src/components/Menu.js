
import { useState } from "react"


const INITIAL_DATA = [
    {
        id: 1, 
        item: "Pepperoni Pizza", 
        body: "12-inch pepperoni pizza with cheese, pizza sauce, and pepperonis",
    },
    {
        id: 2, 
        item: "Cheese Pizza",
        body: "12-inch cheese pizza with three types of cheese and pizza sauce",
    },
    {
        id: 3, 
        item: "Hawiaan Pizza", 
        body: "12-inch pizza with canadian bacon, pineapple, and pizza sauce.",
    },
];



function menuForm({ addMenuItems}) {

    const [pizzas] = useState(INITIAL_DATA);


   


    return (

<Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Menue</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Pizzas</Card.Subtitle>
        <Card.Text>
            
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    )
}


export default menuForm;