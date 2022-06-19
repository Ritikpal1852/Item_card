//import React from 'react';   // but if we use React in files then we have to add import React from 'react' file.

import React, {useState} from 'react';  //way to import state in react with state
import Navbar from './component/Basics/Navbar';
import ProductList from './component/Basics/ProductList.js';
import Footer from './component/Basics/Footer.js';
import AddItem from './component/Basics/AddItem';

function App (){     //is const ko fat arrow khte hai ye function ki jagha aata
  // this is a array of properties in object(product) and is object ko pass karana hoga component me using props
  const products=[ 
    {
    price: 99989,
    name: "redminote",
    quantity:  0,
  },
  {
    price: 9999,
    name: "redmi",
    quantity:  0,
  },
];
//a state usnig hooks, we have to pass the some value in useState like empty array[], empty object{}
let [productList , setProductList]= useState(products);
let [totalAmount, setTotalAmount]= useState(0);
//function for increment
const incrementQuantity = (index) =>{
  //for change in state, we have to copy old state and store in variable
  let newProductList= [...productList]   //copy syntex(spread operator)
  let newTotalAmount = totalAmount;     //copy old totalamount
  newProductList[index].quantity++;  
  newTotalAmount += newProductList[index].price;      //add current price in old total amount
  setTotalAmount(newTotalAmount)     
  setProductList(newProductList);
};
const decrementQuantity = (index) =>{
  //for change in state, we have to copy old state and store in variable4
  let newProductList= [...productList];    //copy syntex(spread operator)
  let newTotalAmount = totalAmount; 
  if(newProductList[index].quantity >0){
    newProductList[index].quantity--;  
    newTotalAmount -= newProductList[index].price;
  }
  // terniry operator= newProductList[index].quantity >0 ? newProductList[index].quantity-- : (newProductList[index].quantity =0);
  setTotalAmount(newTotalAmount);
  setProductList(newProductList);
};


// reset function
const resetQuantity= ()=>{
  let newProductList= [...productList]
  newProductList.map((product)=> {
    product.quantity=0;
  });
  setProductList(newProductList);
  setTotalAmount(0);
};

// remove item function
const removeItem=(index) =>{
  let newProductList= [...productList];
  let newTotalAmount= totalAmount;
  newTotalAmount-= newProductList[index].quantity * newProductList[index].price;
  newProductList.splice(index, 1);  //for remove the function (in javaScript)
  setProductList(newProductList);
  setTotalAmount(newTotalAmount);
};


// add item function
const addItem= (name, price)=> {
   let newProductList= [...productList]; // a new list
    newProductList.push({      //push method to add in array
      price:price,
      name:name,
      quantity:0,

    });
    setProductList(newProductList); 
  }

  return (
           <> 
           <Navbar/>
           <main className="container mt-5">
          <AddItem addItem={addItem}/>
           <ProductList productList={productList} 
           incrementQuantity={incrementQuantity} 
           decrementQuantity={decrementQuantity}
           removeItem={removeItem}
           />
           </main>
           <Footer totalAmount={totalAmount} resetQuantity={resetQuantity}/>
           </>
      );
    // the code who looks like html code called JSX (java script extension), from use of this we can use only one tag because JSX show only one element at a time.
   };
   export default App
    // <p>awsome<\> wrong method 
    //<React.Fragment> </React.Fragment>  shortcut for this is =<>.....<\>
    //here we always use classname attribute insted of class attribute which was used in css.
    //always use closing tag for anybody. like h1 have closing tag but image src dont so but in JXS we have to close image tag.   
    //ClassName= here N is capital. called camelcase convension.



