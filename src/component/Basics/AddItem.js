import React from 'react';


// when we used class component then we add props and state with the help of this.prop.
class AddItem extends React.Component {
    constructor(props){
        super(props);
        this.state= {
                productName:"",
                productPrice: "",
        };
    }

    render() { 
        return (
             <form className='row' onSubmit={(e) => {
                 e.preventDefault();           // to stop reloading after change
                this.props.addItem(this.state.productName, Number(this.state.productPrice));
                this.state.productName= "";
                this.state.productPrice= "";
            }}>
    <div className="mb-3 col-5 ">
          <label htmlFor="inputName" className="form-label">Name</label>
          <input type="text" 
          className="form-control" 
          id="inputName" aria-describedby="name" 
          name="productName"
          onChange={(e)=>{
                this.setState({
                productName: e.currentTarget.value
                });
          }}
          value={this.state.productName}/>
    </div>
        <div className="mb-3 col-5">
          <label htmlFor="inputPrice" className="form-label">price</label>
          <input type="number" className="form-control" id="price" name="productPrice"
          onChange={(e)=>{
            this.setState({
            productPrice: e.currentTarget.value
            });
      }}
      value={this.state.productPrice}
          />
        </div>
        <button type="submit" className="btn btn-primary col-2 " >ADD</button>
      </form>)
      
    }
}
 
export default AddItem;