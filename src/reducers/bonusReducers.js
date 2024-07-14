const initialState = {
    points : 0
}

const bonusReducers = (state = initialState,action)=>{
    switch(action.type){
        case 'INCREMENT_BONUS':
            return {
                ...state,
                points : state.points+1
            }
        default :
            return state
    }
}

export default bonusReducers