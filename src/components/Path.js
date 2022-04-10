import React, { Component } from 'react'
import './css/Path.css'
import {DataContext} from './Context'



export class Path extends Component {
    render() {
        return (
            <>
            <path>
                <p>Men </p>/<p>Clothing </p>/<p>Tops </p>/<p>Adidas </p>/<span>Adidas Black T-Shirt</span>
            </path>
            </>
        )
    }
}

export default Path;

{/* <li>
                            <div className="nav-cart">
                                <span>{cart.length}</span>
                                <Link to="/cart">
                                    <img src={CartIcon} alt="" width="20"/>
                                </Link>medoo
                            </div>
                        </li> */}