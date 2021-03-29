export const initialState={
    cart : [],
    user : [],
};
//this is selector
export const getCartTotal =(cart) => cart?.reduce((amount,item)=> item.price + amount, 0);
// export const getAmountTotal = (cart)=>cart?.reduce((total, item)=>  item.price+total, 0);



const reducer = (state,action)=>{
    // console.log("this is cat",action)s
    switch (action.type) {
     case 'ADD_TO_CART':
         return {
             ...state, cart: [...state.cart,action.item],
         };

        //  this action or this case remove all the cart item which id is match
// case 'REMOVE_FROM_CART':
//     return{
//         ...state, cart:[...state.cart.filter(item=>item.id !== action.id)]
//     }

// this action or case only delete those item wehich are select
        case 'REMOVE_FROM_CART':
        const index = state.cart.findIndex((cartItem)=>cartItem.id === action.id);
        let newCart = [...state.cart];

        if (index >=0){
            newCart.splice(index,1);

        } else{
            console.warn(`Cant remove product (id: ${action.id}) as it is not in cart `)
        }
        return{
            ...state, cart:newCart
        }

       

        case 'SET_USER':
            return{
                ...state, user:action.user
            }
            
            case 'EMPTY_CART':
                return{
                    ...state, cart:[]
                }

         default:
             return state;
}
};
export default reducer;
    