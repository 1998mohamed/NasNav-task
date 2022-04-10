import React, { Component } from 'react'
import {DataContext} from '../Context'
import {Link} from 'react-router-dom'
import Colors from './Colors'
import '../css/Details.css'
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


export class Details extends Component {
    static contextType = DataContext;
    state = {
        product: []
    }

    getProduct = () =>{
        if(this.props.match.params.id){
            const res = this.context.products;
            const data = res.filter(item =>{
                return item._id === this.props.match.params.id
            })
            this.setState({product: data})
        }
    };

    componentDidMount(){
        this.getProduct();
    }
    static contextType = DataContext;

    render() {
        const {product} = this.state;
        const {addCart,removeProduct,total} = this.context;
        return (
            <>
            <div className='show' >
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
                {
                    product.map(item =>(
                        <div className="details" key={item._id}>
                            <h2>My Cart</h2>
                            <h5>Cart Summary</h5>
                            <div className='image'>
                                <img src={item.src} alt=""/>
                                <ul>
                                    <li><p>{item.description}</p></li>
                                    <li><p>Quantity: {item.count}</p></li>
                                    <li>
                                        <span>${item.price}</span>LE  <button className="remove-button" onClick={() => removeProduct(item._id)}>remove</button>
                                        
                                    </li>
                                </ul>
                            </div>
                            <div className="totall">
                                <h3>Total: {total} LE</h3>
                            </div>
                            <ul className='cart-button'>
                                <li><Link  className='cart-link' to="/">Review Cart</Link></li>
                                <li><span className='cart-ckeck'>Complete Checkout</span></li>
                            </ul>
                            {/* <div className="box">
                                <div className="row">
                                    <h2>{item.title}</h2>
                                    <span>${item.price}</span>
                                </div>
                                <Colors colors={item.colors}/>
                                <p>{item.description}</p>
                                <p>{item.content}</p>
                                <Link to="/cart" className="cart" onClick={() => addCart(item._id)}>
                                    Add to cart
                                </Link>
                            </div> */}
                        </div>
                    ))
                }
            </div>
            
                
            </>
        )
    }
}

export default Details
