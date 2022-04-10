import React, { Component } from 'react'
import Menu from './svg/bars-solid.svg'
import Search from './svg/search.svg'
import Logo from './svg/addidas.svg'
import Close from './svg/times-solid.svg'
import CartIcon from './svg/shopping-cart-solid.svg'
import Car from './svg/car.svg'
import Love from './svg/love.svg'
import Login from './svg/login.svg'
import {Link} from 'react-router-dom'
import './css/Types.css'
import {DataContext} from './Context'



export class Types extends Component {
    static contextType = DataContext;

    state = {
        toggle: false
    }

    menuToggle = () =>{
        this.setState({toggle: !this.state.toggle})
    }


    render() {
        const {toggle} = this.state;
        const {cart} = this.context;
        
        return (
            <>
            <types>
                <div className="menu" onClick={this.menuToggle}>
                    <img src={Menu} alt="" width="20"/>
                </div>
                <nav> 
                    <ul className={toggle ? "toggle" : ""}>
                        <li><p className='type'>Men</p></li>
                        <li><p className='type'>Women</p></li>
                        <li><p className='type'>Unisex</p></li>
                        <li><p className='type'>Kids</p></li>
                        <li><p className='type'>Best Seller</p></li>
                        <li><p className='type'>New Arrivals</p></li>
                        <li><p className='offer'>Offers</p></li>
                        <li className="close" onClick={this.menuToggle}>
                            <img src={Close} alt="" width="20"/>
                        </li>
                    </ul>
                </nav>
            </types>
            </>
        )
    }
}

export default Types;

{/* <li>
                            <div className="nav-cart">
                                <span>{cart.length}</span>
                                <Link to="/cart">
                                    <img src={CartIcon} alt="" width="20"/>
                                </Link>medoo
                            </div>
                        </li> */}