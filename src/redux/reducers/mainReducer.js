import { createStore } from 'redux'

const initialState = {

};

const mainReducer = (state = initialState, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default createStore(mainReducer);