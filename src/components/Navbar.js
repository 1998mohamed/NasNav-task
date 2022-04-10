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
import './css/Navbar.css'
import {DataContext} from './Context'



export class Navbar extends Component {
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
            <navbar>
                <div className="menu" onClick={this.menuToggle}>
                    <img src={Menu} alt="" width="20"/>
                </div>
                <nav> 
                    <ul className={toggle ? "toggle" : ""}>
                        <li>
                            <div className='search'>
                                <img src={Search} alt="" width="20" height="20"/>
                                <a>Search</a>
                            </div>
                        </li>
                        <li className='addidas'>
                                <img src={Logo} alt="" width="80" height="30"/>
                        </li>
                        <li>
                            <div className='icone'>
                            <div className="nav-cart">
                                <span>{cart.length}</span>
                                <Link to="/cart">
                                    <img src={Car} alt="" width="25"/>
                                </Link>
                                <p>Cart</p>
                            </div>
                            </div>
                        </li>
                        <li>
                            <div className='icone'>
                                <img src={Love} alt="" width="25"/>
                                <p>Wishlist</p>
                            </div>
                        </li>
                        <li>
                            <div className='icone'>
                                <img src={Login} alt="" width="25"/>
                                <p>Login</p>
                            </div>
                        </li>
                        <li className="close" onClick={this.menuToggle}>
                            <img src={Close} alt="" width="20"/>
                        </li>
                    </ul>
                </nav>
            </navbar>
            </>
        )
    }
}

export default Navbar;

{/* <li>
                            <div className="nav-cart">
                                <span>{cart.length}</span>
                                <Link to="/cart">
                                    <img src={CartIcon} alt="" width="20"/>
                                </Link>medoo
                            </div>
                        </li> */}