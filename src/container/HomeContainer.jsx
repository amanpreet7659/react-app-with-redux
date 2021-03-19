
import "tachyons"
import "../AllCss.css"
import Front from "../Components/Front";
import { addToCart } from "../services/action/action";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => ({
    addToCartHandler:data=>dispatch(addToCart(data))
})
const mapStateToProps = state => ({
    cardDate:state    
})




export default connect(mapStateToProps,mapDispatchToProps)(Front);