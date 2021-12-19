
const initialState = {
    cart:0
};

const reducer = (state = initialState, action) =>{
    const newState = {...state};


    if(action.type === 'UP'){
        newState.cart += action.value;
    }

    if(action.type === 'DOWN'){
        newState.cart-= action.value;
    }

    if(action.type === 'RESET'){
        newState.cart = 0;
    }

    return newState;
};

export default reducer;