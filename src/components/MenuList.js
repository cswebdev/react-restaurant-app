import { useState } from "react";
import MenuItem from "./MenuItem";

//  {
//    id: ,
//    item: " ",
//    description: " ",
//    type: " ",
//    price: " ",
// },

const MENU_ITEMS_LIST = [
   {
      id: 1,
      item: "Garlic Bread Sticks",
      description:
         "Bread sticks coated and baked in garlic butter topped with italian herbs",
      type: "appetizer",
      price: 3.99,
   },
   {
      id: 2,
      item: "Cheese Bread Sticks",
      description:
         "Bread sticks coated and baked in garlic butter and cheese topped with italian herbs",
      type: "appetizer",
      price: 3.99,
   },
   {
      id: 3,
      item: "Pepperoni Rolls",
      description:
         "spicy cured pepperoni, rolled into dough, and baked to perfection. Served with marina sauce",
      type: "appetizer",
      price: 4.99,
   },

   {
      id: 4,
      item: "Cheese Pizza ",
      description: "House pizza sauce with a blend of three cheeses",
      type: "pizza ",
      price: 9.99,
   },
   {
      id: 5,
      item: "Pepperoni Pizza",
      description:
         "House pizza sauce with a blend of three cheeses and cured pepperoni",
      type: "pizza",
      price: 9.99,
   },
   {
      id: 6,
      item: "Meat Lovers Pizza",
      description:
         "House pizza sauce with a blend of three cheeses topped with cured pepperoni, ham, bacon, and sausuage.",
      type: "pizza",
      price: 12.99,
   },
   {
      id: 7,
      item: "Supreme Pizza",
      description:
         "House pizza sauce with a blend of three cheeses topped with pepperoni, sausage, mushrooms, green bell peppers, and onions.",
      type: "pizza",
      price: 12.99,
   },
   {
      id: 8,
      item: "Hawaiian Pizza",
      description:
         "House pizza sauce, cheese, cured canadian bacon, and pineapple",
      type: "pizza",
      price: 12.99,
   },
   {
      id: 9,
      item: "Italian Deluxe",
      description:
         "House pizza sauce, cheese, topped with prosciutto, pepperoni, salami, green peppers, and onions",
      type: "pizza",
      price: 12.99,
   },

   {
      id: 10,
      item: "Veggie Lovers",
      description:
         "House pizza sauce, cheese, topped with onions, green peppers, black olives, mushrooms,and  tomatoes.",
      type: "pizza",
      price: 9.99,
   },
   {
      id: 11,
      item: "Shrimp Scampi",
      description:
         "Shrimp prepared with a lemon white wine & garlic sauce, tossed with fettuccini",
      type: "pasta",
      price: 8.99,
   },
   {
      id: 12,
      item: "Chicken Parmesan",
      description:
         "Breaded, fried chicken, topped with marinara & melted mozzarella on a bed of spaghetti",
      type: "pasta",
      price: 8.99,
   },
   {
      id: 13,
      item: "Baked Ravioli",
      description:
         "Cheese filled ravioli, topped with our marinara & melted mozzarella",
      type: "pasta",
      price: 6.75,
   },
   {
      id: 14,
      item: "Fettuccini Alfredo",
      description: "Parmesan cream sauce tossed with fettuccine pasta.",
      type: "pasta",
      price: 8.99,
   },
   {
      id: 15,
      item: "Baked Ziti",
      description:
         "Penne pasta, tossed with housemade marinara & topped with housemade meat sauce, ricotta & mozzarella, baked to a golden perfection",
      type: "pasta",
      price: 8.99,
   },
];

function MenuList({ type }) {
   const [menuItems] = useState(MENU_ITEMS_LIST);

   // filter attempt:
   const menuItemsHTML = menuItems
      .filter((menuItem) => menuItem.type === type)
      .map((menuItem) => (
         <MenuItem
            type={menuItem.type}
            key={menuItem.id}
            item={menuItem.item}
            description={menuItem.description}
            price={menuItem.price}
         />
      ));



   return (
      <>
         <ul>{menuItemsHTML}</ul>
      </>
   );
}

export default MenuList;
