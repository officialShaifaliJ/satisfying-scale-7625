import { useState } from 'react';
import p1 from '../images/price1.png';
import p2 from '../images/price2.png';
import p3 from '../images/price3.png';
import p4 from '../images/price4.png';
import p6 from '../images/price6.png';
import Footer from '../components/Footer';
import { useEffect } from 'react';
import {AuthContext} from '../context/AuthContext';
import { useContext } from 'react';
import Login from './Login';
import Checkout from './Checkout';
// import Order from './OrderSummary';
export default function Pricing(){
    const {isAuth}=useContext(AuthContext);
    console.log("isAuth",isAuth)
    const item=[p1,p2,p3,p4,p6]
    let price= 11.99;
    let shipping=9.99;
    const [num,setNum]=useState(4);
    const [meal,setMeal]=useState(true);
    const [twoFour,setTwoFour]=useState(true);
    const [step12,setStep12]=useState(true);
    useEffect(()=>{
        let price=twoFour ? 2:4;
        let perMeal =meal ? 2:3;
        let total = price+perMeal;
        let changeBy= total.toFixed(2);
        setNum(changeBy)
    },[twoFour,meal]);

    return (<>
    {step12?(
    <div className='mainBillingDiv'>
    <div className="personalize">
        <h1>Personalize your meal kit</h1>
        <p>Get excited—your choice of 60+ weekly meals is just a few steps away!</p>
    </div>
    <div className='pricingSteps'>
        <div>
            <h1>1.Our Preference</h1>
            {item.map((el)=>{
                return <img src={el} key={el} alt={el}/>
            })}
        </div>
        <div>
            <h1>2.Select your Plan</h1>
            <div className='plan'>
                <h2>Number of serving</h2>
                <div>
                    <button
                    style={twoFour?{backgroundColor:"darkblue",color:"white"}:
                    {backgroundColor:"white",color:"darkblue"}}
                    onClick={()=>setTwoFour(!twoFour)} 
                    >2</button>
                <button style={!twoFour?{backgroundColor:"darkblue",color:"white"}:
                    {backgroundColor:"white",color:"darkblue"}}
                    onClick={()=>setTwoFour(!twoFour)}>4</button>
                </div>
            </div>
            <div className='serving'>
                <h2>Number of serving</h2>
                <div>
                    <button
                    style={meal?{backgroundColor:"darkblue",color:"white"}:
                    {backgroundColor:"white",color:"darkblue"}}
                    onClick={()=>setMeal(!meal)}>2</button>
                <button style={!meal?{backgroundColor:"darkblue",color:"white"}:
                    {backgroundColor:"white",color:"darkblue"}}
                    onClick={()=>setMeal(!meal)}>3</button>
                </div>
            </div>
            <div className='orderDiv'>
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
                    <p>${price*num + shipping}</p>
                </div>
                <button className='continue' onClick={(e)=>{setStep12(!step12)}}>CONTINUE</button>
                <p>You can update your preferences
                and skip, pause, or cancel at any time.*
                Learn More
                </p>
            </div>
        </div>
    </div>
    </div>
    ):(
        !isAuth?(<Login/>):
        (<Checkout/>)
    )}
    <Footer/>
    </>)
}