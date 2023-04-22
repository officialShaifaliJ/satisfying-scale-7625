import { Link } from "@chakra-ui/react";
import React from "react";
import p1 from '../images/c1.png';
import p2 from '../images/c2.png';
import p3 from '../images/c3.png';
import p4 from '../images/c4.png';
import p5 from '../images/c5.png';
import p6 from '../images/c6.png';
import p7 from '../images/c7.png';
import p8 from '../images/c8.png';
import p9 from '../images/c9.png';
import p10 from '../images/c10.png';
import c1 from '../images/celebrate.png';
import carb from '../images/carbon.png';
import Footer from "../components/Footer";

// const views =[{}]
export default function Home(){
    return (<>
    <div className="meal1">
        <div className="absoluteDiv">
        <h1>The meal kit that puts quality First</h1>
        <Link href='/pricing'>
        <button className="getCookiBtn">GET COOIKN'</button>
        </Link>
        </div>
        <img 
        src='https://media.blueapron.com/assets/registration/homepage/desktop-splash-v2.webp?height=800&quality=90'
        alt='mealFirst'
        className="mealImg1"
        />
    </div>
    <div className="millionViews">
        <h1>465+ million meals shipped</h1>
        <p>See why home cooks stick with the original American meal kit</p>
    </div>
    <div className="steps">
        <div>
            <img src="https://media.blueapron.com/assets/registration/homepage/chef-experience.webp?height=374&quality=90" alt="5 Decades" />
            <h4>5 decades of top restaurant experience</h4>
            <p>Our chefs bring high standards to crafting your meals.</p>
        </div>
        <div>
            <img src="https://media.blueapron.com/assets/registration/homepage/fresh-ingredients.webp?height=374&quality=90" alt="Fresh Ingredients" />
            <h4>5 decades of top restaurant experience</h4>
            <p>Our chefs bring high standards to crafting your meals.</p>
        </div>
        <div>
            <img src="https://media.blueapron.com/assets/registration/homepage/flexible-mobile.webp?height=374&quality=90" alt="Busy&Flexible" />
            <h4>5 decades of top restaurant experience</h4>
            <p>Our chefs bring high standards to crafting your meals.</p>
        </div>
    </div>
    <div className="GetStarted">
        <p>Get started for as little as $7.99 per serving
        </p>
        <Link href='/pricing'>
        <button className="getCookiBtn">GET COOIKN'</button>
        </Link>
    </div>
    <div className="chooseDiv">
        <h1>CHOOSE FROM</h1>
        <p>60+ weekly options</p>
        <div>
            <img src={p1} alt="" />
            <img src={p2} alt="" />
            <img src={p3} alt="" />
            <img src={p4} alt="" />
            <img src={p5} alt="" />
            <img src={p6} alt="" />
            <img src={p7} alt="" />
            <img src={p8} alt="" />
            <img src={p9} alt="" />
            <img src={p10} alt="" />
        </div>
    </div>
    <div>
        <Link href="/on_the_menu">
        <button className="browserMenuBtn">
            BROWSER OUR MENUS
        </button>
        </Link>
    </div>
    <div className="celebratingDiv">
        <div className="timeOutCelebrate">
        <img src={c1} alt="c1" />    
        </div>
        <img src="https://media.blueapron.com/assets/registration/homepage/cooking-pot.webp?height=605&quality=90" alt="celebrating" />
    </div>
    <div>
        <img src={carb} alt="carbonNeutral" style={{margin:"auto",padding:"4rem"}} />
    </div>
    <div style={{margin:"auto",textAlign:"center"}}>
        <div className="GetStarted2">
            <p>
                Get started now
            </p>
            <h5>
            for as little as <b style={{color:"rgb(50, 188, 240)"}}>$7.99 per serving</b>
            </h5>
            <Link href='/pricing'>
                <button className="getCookiBtn">
                    GET COOIKN'
                </button>
            </Link>
        </div>
        <img src="https://media.blueapron.com/assets/registration/homepage/gnocchi-ingredients.webp?height=400&quality=90" alt="getStarted2" />
    </div>
    <div className="inputBoxParent">
        <p>DISCOVER WHAT 'S COOKIN'</p>
        <input type="text" 
               placeholder="Enter Email" 
               />
        <Link href="/login">
        <button style={{
            border:"1px solid darkblue",
            padding:"0.3rem",
            backgroundColor:"darkblue",
            borderRadius:"5px",
            color:"white"
        }}
            >
            GO</button>
        </Link>
        <h3>Sign up for offers , recipes ,news & more</h3>
    </div>
    <Footer/>
    </>
   )
}