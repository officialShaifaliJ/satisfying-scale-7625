export default function Order(props){
    const {orderNum,mealPerServe}=props
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
            <p>{orderNum}serving plan</p>
            <p>${(orderNum+mealPerServe)*11.99}</p>
        </div>
        <div>
            <p>{mealPerServe} recipes per week</p>
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
            <h1>${((orderNum+mealPerServe)*11.99)+9.99}</h1>
        </div>
    </div>
    </>)
}