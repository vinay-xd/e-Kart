22-04-2024 do the add to cart home and cart but fail because the home component hook data is not transfer to cart component 
on solution is use the redux or second it write the function in parent component of home and carrt import the function as prop 
 <!-- // const [addtocart, setaddtocart] = useState([]);
            // const addtokart = (item) => {
            //   setaddtocart([...addtocart, item])
            //   console.log(addtocart);
            // element = {<Homepage addtocart={addtocart} addtokart={addtokart}/>}
            // element = {<Cart addtocart={addtocart}/>}
            // function Cart({addtocart})
        //     <ul> 
        //     {addtocart && addtocart.map((item) => (
        //             <li key={item.id}>
        //                 {item.title}
        //                 {item.price}
                       
        //             </li>
        //     ))}
            
        // </ul>
        // onClick={() => addtokart(data[view])} -->