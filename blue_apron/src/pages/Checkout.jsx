import {useNavigate} from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';
import Order from './OrderSummary';
export default function Checkout(){
    const {ischeckout,setCheckout}=useContext(AuthContext)
    const nav=useNavigate()
    return (<>
        <div className="checkoutMainDiv">
            <div className="deliveryForm">
                <h1>Checkout</h1>
                <p>You won’t be charged until your first order ships.</p>
            {!ischeckout?( <form>
                <h2>Delivery Information</h2>
                    <div>
                    <label>FIRST NAME<br/>
                    <input type="text" placeholder="First name"/>
                    </label>
                    <label>LAST NAME<br/>
                    <input type="text" placeholder="Last name"/>
                    </label>
                    </div>
                    <div>
                        <label>
                            ADDRESS LINE 1<br/>
                            <input type="address" placeholder="Enter Address"/>
                        </label>
                        <label>
                            ZIP<br/>
                            <input type="number" placeholder="Zip code"/>
                        </label>
                        <label>STATE<br/>
                            <select name="select state">
                                <option>Delhi</option>
                                <option>Haryana</option>
                                <option>Punjab</option>
                                <option>Uttarakhand</option>
                                <option>Rajasthan</option>
                                <option>Kerala</option>
                                <option>Maharashtra</option>
                                <option>Uttar Pradesh</option>
                                <option>Madhya Pradesh</option>
                                <option>Karnataka</option>
                                <option>Tamil Nadu</option>
                                <option>Odisha</option>
                            </select>
                        </label>
                    </div>
                    <div>
                        <label>CITY<br/>
                            <input type="text" placeholder="City Name"/>
                        </label>
                        <label>
                            PHONE NO.<br/>
                            <input type="number" placeholder="Phone no."/>
                        </label>
                    </div>
                    <div>
                        <button className="submit" onClick={()=>{setCheckout(true)}}>CONTINUE TO BILLING</button>
                    </div>
                </form>):(<h1>hi</h1>)}
            </div>
            <Order/>
        </div>
    </>)
}