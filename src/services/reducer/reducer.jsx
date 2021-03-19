import { ADD_TO_CART } from "../constants"

const initialState = { cartData: [] }
export const cardItems = (state = initialState, actions) => {
    switch (actions.type) {
        case ADD_TO_CART:
            console.log("Reducer : ", actions);
            return {
                ...state,
                cartData: actions.data,
            }
            break;
        default:
            {
                return state
            }
    }

}