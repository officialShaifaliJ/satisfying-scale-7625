export default function Order(){
    return (<>
    <div className="orderSummary">
        <h1>ORDER SUMMARY</h1>
        <div>
            <h1>First delivery date</h1>
            <input type="date"/>
        </div>
        <div>
            Your weekly delivery day will be set to Thursday.
            <br/>
           You can always change it for upcoming deliveries.
        </div>
        <div>
            <p>2 serving plan</p>
            <p>$47.99</p>
        </div>
        <div>
            <p>2 recipes per week</p>
            <p>$11.99</p>
        </div>
        <div>
            <p>Shipping</p>
            <p>$9.99</p>
        </div>
        <div>
            <p>Est. Tax</p>
            <p>TBD</p>
        </div>
        <hr/>
        <div>
            <h1>First Order Total</h1>
            <h1>$57.95</h1>
        </div>
    </div>
    </>)
}