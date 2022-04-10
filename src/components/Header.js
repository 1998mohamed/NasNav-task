import React, { Component } from 'react'
import Menu from './svg/bars-solid.svg'
import Submenu from './svg/menu.svg'
import Logo from './svg/yeshtery.svg'
import Close from './svg/times-solid.svg'
import Phone from './svg/phone.svg'
import Cart from './svg/cart.svg'
import Loc from './svg/loc.svg'
import './css/Header.css'
import {DataContext} from './Context'



export class Header extends Component {
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
            <header>
                <div className="menu" onClick={this.menuToggle}>
                    <img src={Menu} alt="" width="20"/>
                </div>
                <div className="logo">
                    <img className='submenu' src={Submenu} alt=""/>
                    <img src={Logo} alt="" width="90" height="20"/>
                </div>
                <nav> 
                    <ul className={toggle ? "toggle" : ""}>
                        <li>
                            <div className='text'>
                                <p>Valentine’s Day Offers! Buy Two Get One Free </p>
                                <span>Shop Now</span>
                            </div>
                        </li>
                        <li>
                            <div className='icon'>
                                <img src={Phone} alt="" width="22"/>
                                <p>Contact Us</p>
                            </div>
                        </li>
                        <li>
                            <div className='icon'>
                                <img src={Cart} alt="" width="22"/>
                                <p>Track Order</p>
                            </div>
                        </li>
                        <li>
                            <div className='icon'>
                                <img src={Loc} alt="" width="22"/>
                                <p>Find A Store</p>
                            </div>
                        </li>
                        <li className="close" onClick={this.menuToggle}>
                            <img src={Close} alt="" width="20"/>
                        </li>
                    </ul>
                </nav>
            </header>

            </>
        )
    }
}

export default Header

{/* <li>
                            <div className="nav-cart">
                                <span>{cart.length}</span>
                                <Link to="/cart">
                                    <img src={CartIcon} alt="" width="20"/>
                                </Link>medoo
                            </div>
                        </li> */}