import React from 'react'
import './cart.css'

export class CheckItem extends React.Component {
    render() {
        return (
            <div className="container cont">
                <div className="header">
                <div className="star"><i className="fas fa-star"></i></div>
                <div>
                    <input type="text" id="search-item" placeholder="Search" />
                </div>
                <div className="search"><i className="fas fa-search search-check"></i></div>
                </div>
                <div className="check-data">
                    <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6Gly83W4-QM0o-zJ3xpI3jfcmhqWa8k-U8hy6xABT1mJrp73O&s'} alt="" style={{width:'200px', height:'150px'}}/>
                    <div className="check-item">Item1</div>
                    <div className="check-price"><i className="fas fa-rupee-sign"></i>319</div>
                    <div className="check-discount">64% off</div>
                    <div className="howmany-items">
                        <div className="decrease">-</div>
                        <div className="count">2</div>
                        <div className="increament">+</div>
                    </div>
                    <div className="remove">Remove</div>
                </div>

                <div className="check-data">
                    <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6Gly83W4-QM0o-zJ3xpI3jfcmhqWa8k-U8hy6xABT1mJrp73O&s'} alt="" style={{width:'200px', height:'150px'}}/>
                    <div className="check-item">Item1</div>
                    <div className="check-price"><i className="fas fa-rupee-sign"></i>319</div>
                    <div className="check-discount">64% off</div>
                    <div className="howmany-items">
                        <div className="decrease">-</div>
                        <div className="count">2</div>
                        <div className="increament">+</div>
                    </div>
                    <div className="remove">Remove</div>
                </div>

                <div className="check-data">
                    <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6Gly83W4-QM0o-zJ3xpI3jfcmhqWa8k-U8hy6xABT1mJrp73O&s'} alt="" style={{width:'200px', height:'150px'}}/>
                    <div className="check-item">Item1</div>
                    <div className="check-price"><i className="fas fa-rupee-sign"></i>319</div>
                    <div className="check-discount">64% off</div>
                    <div className="howmany-items">
                        <div className="decrease">-</div>
                        <div className="count">2</div>
                        <div className="increament">+</div>
                    </div>
                    <div className="remove">Remove</div>
                </div>
                <div className="price-detalis-main">
                    <div className="price-detalis">PRICE DETAILS</div>
                    <hr />
                    <div className="item-sale">Price (1 item) :<span className="sale-price"><i className="fas fa-rupee-sign"></i>900</span></div> <br />
                    <div className="item-discounts">Discount : <span className="sale-discounts"><i className="fas fa-rupee-sign"></i>500</span></div>
                    <hr />
                    <div className="total">Total Payable  <span className="total-pay"><i className="fas fa-rupee-sign"></i>400</span></div>
                </div>
            </div>
        )
    }
}

export default CheckItem

