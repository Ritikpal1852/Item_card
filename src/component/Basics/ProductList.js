import React from 'react'
import Product from './Product.js'


// we have to take Product as a argument in this function 1) as a destructured usnig object name
// (1) export default function ProductList({Product}) {
// (2) using props name and after we use properties with dot+name in div component
    export default function ProductList(props) {
    return (
         props.productList.length > 0  ?
        // this is for loop and its means that  we take a Product and pass is properties form productlist and pass it to Product component
          props.productList.map((product, i)=>{
           return <Product product={product} 
           key={i} 
           incrementQuantity={props.incrementQuantity} 
           index={i} 
           decrementQuantity= {props.decrementQuantity}
           removeItem= {props.removeItem}
           />
       })
       : <h1>No Products exsits in the Cart</h1>
    )
}

