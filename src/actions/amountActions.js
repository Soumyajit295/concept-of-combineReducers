export const incrementAmount = () =>{
    return {
        type : "INCREMENT_AMOUNT"
    }
}

export const decrementAmount = () =>{
    return {
        type : "DECREMENT_AMOUNT",
    }
}

export const incrementAmountByValue = (val) =>{
    return {
        type : "INCREMENT_BY_VALUE",
        payload : val
    }
}