import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {DataContext} from '../Context'
import '../css/Products.css'
import Main from '../images/main.JPG'
import Left from '../images/left.png'
import Right from '../images/right.png'
import Img1 from '../images/1.png'
import Img2 from '../images/2.png'
import Img3 from '../images/3.png'
import Img4 from '../images/4.png'
import Adidas from '../images/addidas.png'
import Star from '../images/star.svg'
import Lightstar from '../images/star.png'
import Addidas from '../images/circle1.png'
import Adiddas from '../images/circle2.png'


export class Products extends Component {

    static contextType = DataContext;

    render() {
        const {products,addCart,increase,reduction} = this.context;
        const item = "0";
        return (
            <>
            <div className='show' key={item._id}>
                <div className='left'>
                    <div className='main'>
                        <img src={Main} alt=""/>
                    </div>
                    <div className='list'>
                        <ul>
                            <li><img src={Left} width="20" height="28" /></li>
                            <li><img src={Img1} width="90" height="90"/></li>
                            <li><img src={Img2} width="90" height="90"/></li>
                            <li><img src={Img3} width="90" height="90"/></li>
                            <li><img src={Img4} width="90" height="90"/></li>
                            <li><img src={Right} width="20" height="28"/></li>
                        </ul> 
                    </div>
                </div>
                <div className='right'>
                    <img src={Adidas} width="45" height="30" />
                    <p className='text-bold'>Adidas black t-shirt lorem ipsum dolor sit</p>
                    <p className='text-bold'>amet, consectetuer adipiscing elit.</p>
                    <p className='text-light'>Men</p>
                    <ul>
                        <li>
                            <ul>
                                <li><img src={Star} width="25" height="25"/></li>
                                <li><img src={Star} width="25" height="25"/></li>
                                <li><img src={Star} width="25" height="25"/></li>
                                <li><img src={Star} width="25" height="25"/></li>
                                <li><img src={Lightstar} width="25" height="25"/></li>
                            </ul>
                        </li>
                        <li>
                            <p className='text-bold'>4.9 of 5</p>
                        </li>
                        <li>
                            <p className='rate-light'>22 Rates</p>
                        </li>
                    </ul>
                    <ul>
                        <li><span>9,999</span>LE</li>
                        <li>
                            <p className='rate-light'>9,999</p>
                        </li>
                        <li>
                            <span className='back-span'>30% Off</span>
                        </li>
                    </ul>
                    <p className='size'>Size</p>
                    <ul>
                        <li className='circle'>Small</li>
                        <li className='circle'>Medium</li>
                        <li className='dark-circle'>Large</li>
                        <li className='circle'>X Large</li>
                        <li className='circle'>XX Large</li>
                    </ul>
                    <p className='color'>Color</p>
                    <ul>
                        <li><img src={Addidas} width="60" height="60" /></li>
                        <li><img src={Adiddas} width="60" height="60" /></li>
                    </ul>
                    <p className='color'>Quantity</p>
                    <div className="amount">
                        <button> - </button>
                        <span>1</span>
                        <button> + </button>
                    </div>
                    <ul>
                        <li className='li-link'><Link  className='link' to="/cart">Add to cart</Link></li>
                        <li className='li-link'><span className='buttonn'>Pickup From Store</span></li>
                    </ul>
                </div>
            </div>
            <div className='main-text'>
                <h3>Similar Products</h3>
                <p>You may like these products also</p>
            </div>
            <div id="product">
               {
                   products.map(product =>(
                       <div className="card" key={product._id}>
                           <Link to={`/product/${product._id}`}>
                               <img src={product.src} alt=""/>
                           </Link>
                           <div className="content">
                               {/* <h3>
                                   <Link to={`/product/${product._id}`}>{product.title}</Link>
                               </h3> */}
                               
                               <p>{product.description}</p>
                               <h4>${product.price} LE</h4>
                               <ul>
                                   <li><p className='offer-light'>9,999 LE</p></li>
                                   <li><span className='offer-span'>30% Off</span></li>
                                   <li><img src={Adidas} width="45" height="30" /></li>
                               </ul>
                               <div className='offer-list'>
                               <ul>
                                <li>
                                    <ul>
                                       <li><img src={Star} width="20" height="20"/></li>
                                       <li><img src={Star} width="20" height="20"/></li>
                                       <li><img src={Star} width="20" height="20"/></li>
                                       <li><img src={Star} width="20" height="20"/></li>
                                       <li><img src={Lightstar} width="20" height="20"/></li>
                                    </ul>
                                    </li>
                                    <li>
                                        <p className='text-bold'>4.9 of 5</p>
                                    </li>
                               </ul>
                               </div>
                               <div className='detail'>
                                    <p>{product.from}</p>
                                    <p>{product.to}</p>
                                    <p>{product.in}</p>
                               </div>
                                   
                               {/* <button onClick={()=> addCart(product._id)}>Add to cart</button> */}
                           </div>
                       </div>
                   ))
               }
            </div>
            {/* //modale */}
           
            </>
        )
    }
}

export default Products
