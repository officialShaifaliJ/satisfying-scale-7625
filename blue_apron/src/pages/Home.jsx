import { Link } from "@chakra-ui/react";
import React from "react";
const views =[{}]
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
    <div></div>
    </>
   )
}