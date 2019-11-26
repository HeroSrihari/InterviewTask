import React from 'react'
import './cart.css'
//This is a Cart component,It contains all the Cart details
class Cart extends React.Component {
  constructor() {
    super()

    this.state = { data: [], value: 100 }

    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    fetch('https://api.myjson.com/bins/qzuzi')
      .then((Response) => Response.json())
      .then((findrespone) => {
        // console.log(findrespone)
        this.setState({
          data: findrespone
        })
      })
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  render() {
    return (
      <div className="container">
        <div className="filter">
          <div>Filter</div>
        <label>
          <input 
            id="typeinp" 
            type="range" 
            min="100" max="10000" 
            value={this.state.value} 
            onChange={this.handleChange}
            step="10"/>
          {this.state.value}
        </label>
        </div>
        <div className="header">
          <div className="star"><i className="fas fa-star"></i></div>
          <div className="search"><i className="fas fa-search"></i></div>
          <div className="cart"><i className="fas fa-shopping-cart"></i></div>
        </div>
        <div className="sort-component">
          <h5><span>Sort By</span></h5>
          <h5>Price -- High Low</h5>
          <h5>Price -- Low High</h5>
          <h5>Discount</h5>
        </div>
        {
          this.state.data.map((dynamicData, key) =>
            <div className="data">
              <div className="pic"><img src={dynamicData.img_url} style={{ height: '100px', width: '200px' }} alt="" /></div>

              <div className="name">{dynamicData.name}</div>
              <div className="id">{dynamicData.id}</div>
              <div className="price-symbol"><i className="fas fa-rupee-sign"></i></div>
              <div className="price">{dynamicData.price}</div>
              <div className="discount">{dynamicData.discount}</div>
              <div className="add-cart">Add to Cart</div>
              {/* <div className="name">{dynamicData.category}</div> */}
            </div>
          )
        }
        <div className="footer"><h4>@Copyright</h4></div>
      </div>
    )
  }
}
export default Cart