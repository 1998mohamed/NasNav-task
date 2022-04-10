import React, { Component } from 'react'
import Menu from './svg/bars-solid.svg'

import Close from './svg/times-solid.svg'

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
