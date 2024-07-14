import {combineReducers} from 'redux'
import amountReducer from './amountReducer'
import bonusReducers from './bonusReducers'

const rootReducer = combineReducers({
    amountReducer,
    bonusReducers
})

export default rootReducer