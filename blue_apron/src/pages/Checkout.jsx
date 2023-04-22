import { AuthContext } from '../context/AuthContext';
import { useContext ,useState} from 'react';
import Order from './OrderSummary';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Checkout(props){
    const nav=useNavigate()
    const {server2,mealper}=props;
    const {ischeckout,setCheckout}=useContext(AuthContext);
    const [firstN,setFirstN]=useState("Shaifali");
    const [lastN,setLastN]=useState("Jangra");
    const [add,setAdd]=useState("RZ-s-44");
    const [zip,setZip]=useState("110022");
    const [state,setState]=useState("Delhi");
    const [city,setCity]=useState("Dawarka");
    const [cardLength,setcardNum]=useState("")
    const [phone,setPhone]=useState("7456328950");
    // const nav=useNavigate();
    let emty=0
    const handlesubmit = () =>{
        emty=0;
        let details={firstN,lastN,add,zip,state,city,phone};
        console.log(details)
        if(firstN===""||lastN===""||add===""||zip===""||state===""||city===""||phone===""){
            emty=1; 
        }
        if(emty===1){
            alert("Please fill all details");
            return
        }
        setCheckout(true);
    }
    useEffect(()=>{
        if(cardLength.length>16){
            return alert ("Card number length should not exceed 16")
        }
    },[cardLength])
    return (<>
        <div className="checkoutMainDiv">
            <div className="deliveryForm">
                <h1>Checkout</h1>
                <p>You won’t be charged until your first order ships.</p>
            {!ischeckout?( 
            <form>
                <h2>Delivery Information</h2>
                    <div>
                    <label>FIRST NAME<br/>
                    <input 
                    type="text" 
                    placeholder="First name" 
                    value={firstN} 
                    onChange={(e)=>{setFirstN(e.target.value)}}/>
                    </label>
                    <label>LAST NAME<br/>
                    <input 
                    type="text" 
                    placeholder="Last name"
                    value={lastN} 
                    onChange={(e)=>{setLastN(e.target.value)}}/>
                    </label>
                    </div>
                    <div>
                        <label>
                            ADDRESS LINE 1<br/>
                            <input type="address" placeholder="Enter Address"
                            value={add} 
                            onChange={(e)=>{setAdd(e.target.value)}}/>
                        </label>
                        <label>
                            ZIP<br/>
                            <input type="number" placeholder="Zip code"
                            value={zip} 
                            onChange={(e)=>{setZip(e.target.value)}}/>
                        </label>
                        <label>STATE<br/>
                            <select 
                            name="select state"
                            value={state}
                            onChange={(e)=>{setState(e.target.value);
                            console.log(e.target.value)
                            }}>
                                <option>Choose state</option>
                                <option value={"delhi"}>Delhi</option>
                                <option value={"haryana"}>Haryana</option>
                                <option value={"punjab"}>Punjab</option>
                                <option value={"uttarakhand"}>Uttarakhand</option>
                                <option value={"rajasthan"}>Rajasthan</option>
                                <option value={"kerala"}>Kerala</option>
                                <option value={"maharashtra"}>Maharashtra</option>
                                <option value={"up"}>Uttar Pradesh</option>
                                <option value={"mp"}>Madhya Pradesh</option>
                                <option value={"karnataka"}>Karnataka</option>
                                <option value={"tN"}>Tamil Nadu</option>
                                <option value={"odisha"}>Odisha</option>
                            </select>
                        </label>
                    </div>
                    <div>
                        <label>CITY<br/>
                            <input type="text" placeholder="City Name"
                            value={city}
                            onChange={(e)=>{setCity(e.target.value)}}
                            />
                        </label>
                        <label>
                            PHONE NO.<br/>
                            <input type="number" placeholder="Phone no."
                            value={phone}
                            onChange={(e)=>{setPhone(e.target.value)}}
                            />
                        </label>
                    </div>
                    <div>
                        <button className="submit" onClick={()=>{handlesubmit()}}>CONTINUE TO BILLING</button>
                    </div>
            </form>
            ):(<div>
                <div className='LastInfo'>
                    <div className='headingDilevery'>
                    <h1>Delivery Information</h1>
                    <p onClick={()=>{setCheckout(!ischeckout)}}>Change</p>
                    </div>
                    <div>
                        {firstN} {lastN}
                    </div>
                    <div>
                        {add} {city} {state} {zip}
                    </div>
                    <div>
                        {phone}
                    </div>
                </div>
                <div className='billingInfo'>
                    <h1>Billing Information</h1>
                    <label>CARD NUMBER
                        <input type="number" placeholder="1234 1234 1234 1234"/>
                    </label>
                    <button className="submit" onClick={()=>{
                        alert("🎊🎉Hurray!Order is placed🥗🍽🥢");
                        nav("/");
                        }}>Place order</button>
                </div>
            </div>
            )}
            </div>
            <Order orderNum={server2} mealPerServe={mealper}/>
        </div>
    </>)
}