import "../AllCss.css"
import Home from "../Components/Home";
import { Fragment } from "react";
const Front = (props) => {
    console.log("This.props From Front.js", props);
    return (
        <Fragment >
            <div className="second-div">
                <div className="grid1">
                    <h2 className=" cart-comp">Cart Component</h2>
                </div>
                <div className="grid2">
                    <img id="cart-image" className="" src="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/256x256/shopping_cart.png" />
                </div>
            </div>
            <div className="first-disp">
                <Home name="IPhone" src="https://static.toiimg.com/photo/73078527.cms" price="$30" cart={() => { props.addToCartHandler({ price: "$100", name: "Vivo 10" }) }} />
                <Home name="Oppo A7" src="https://static.toiimg.com/photo/73078527.cms" price="$40" cart={() => { props.addToCartHandler({ price: "$100", name: "IPhone" }) }} />
                <Home name="Vivo v10" src="https://static.toiimg.com/photo/73078527.cms" price="$35" cart={() => { props.addToCartHandler({ price: "$100", name: "Oppo A7" }) }} />
                <Home name="Pocco" src="https://static.toiimg.com/photo/73078527.cms" price="$60" cart={() => { props.addToCartHandler({ price: "$100", name: "Pocco X" }) }} />
            </div>
        </Fragment>)
}
export default Front;