import { useState } from 'react';
import p1 from '../images/price1.png';
import p2 from '../images/price2.png';
import p3 from '../images/price3.png';
import p4 from '../images/price4.png';
import p5 from '../images/price5.png';
import p6 from '../images/price6.png';
import Footer from '../components/Footer';

export default function Pricing(){
    const [price,setPrice]= useState(11.99);
    const [shipping,setShipping]=useState(9.99);
    const [num,setNum]=useState(4);
    
    return (<>
    <div className='mainBillingDiv'>
    <div className="personalize">
        <h1>Personalize your meal kit</h1>
        <p>Get excited—your choice of 60+ weekly meals is just a few steps away!</p>
    </div>
    <div className='pricingSteps'>
        <div>
            <h1>1.Tell us your preference</h1>
            <img src={p1} alt="p1"/>
            <img src={p2} alt="p2"/>
            <img src={p3} alt="p3"/>
            <img src={p4} alt="p4"/>
            <img src={p5} alt="p5"/>
            <img src={p6} alt="p6"/>
        </div>
        <div>
            <h1>2.Select your Plan</h1>
            <div className='plan'>
                <h2>Number of serving</h2>
                <div>
                    <button>2</button>
                <button>4</button>
                </div>
            </div>
            <div className='serving'>
                <h2>Number of serving</h2>
                <div>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                </div>
            </div>
            <div>
                <h1>Order Summary</h1>
                <div className='pricePerServe'>
                    <p>Price per serving</p>
                    <p>${price}</p>
                </div>
                <div className='shippingPrice'>
                    <p>Shipping</p>
                    <p>${shipping}</p>
                </div>
                <div className='totalPrice'>
                    <p>Shipping</p>
                    <p>${price*num+shipping}</p>
                </div>
                <button className='continue'>CONTINUE</button>
                <p>You can update your preferences
                and skip, pause, or cancel at any time.*
                Learn More
                </p>
            </div>
        </div>
    </div>
    <Footer/>
 </div>
    </>)
}