const initialState = {
    amount : 0
}

const amountReducer = (state = initialState,action) =>{
    switch(action.type){
        case "INCREMENT_AMOUNT":
            return {
                ...state,
                amount : state.amount+1
            }
        case "INCREMENT_BY_VALUE":
            return {
                ...state,
                amount : state.amount + action.payload
            }
        case 'DECREMENT_AMOUNT':
            let newObj  = state.amount > 0 ? {...state,amount : state.amount - 1} : state
            return newObj

        default :
            return state
    }
}

export default amountReducer