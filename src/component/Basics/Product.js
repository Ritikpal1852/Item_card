import React from 'react';

export default function Product(props) { // isme Product aa rahe honge

    //function incrementQuantity(index){}
    return (
        // coloumn
    <div className="row mt-5" >      
            <div className="col-5">
                <h2>
                {props.product.name}
                <div className='ml-4'>
                <span className="badge bg-secondary"> ₹{props.product.price}</span>
                </div>
                </h2>
            </div>
        <div className="col-3">
            <div className="btn-group" role="group" aria-label="Basic mixed styles example">
             <button type="button" class="btn btn-danger" onClick={() => {props.decrementQuantity(props.index);}}>-</button> {/* anonyoums function = () => */}
                <button type="button" class="btn btn-warning">{props.product.quantity}</button>
                <button type="button" class="btn btn-success" onClick={() => {props.incrementQuantity(props.index);}}>+</button>
             </div>
        </div>
        <div className="col-2">
            {props.product.quantity*props.product.price}
        </div>
        <div className='col-2'>
            <button className='btn btn-danger' onClick={() =>{props.removeItem(props.index)}}> Remove</button>
        </div>
    </div>
    );
}
