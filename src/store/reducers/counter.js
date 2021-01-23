import * as actionTypes from '../actions';

export const initialStore = {
    counter: 0
}

export const counterReducer = (store = initialStore, action) => {
    switch(action.type) {
        case(actionTypes.INCREMENT):
            return {
                ...store,
                counter: store.counter + 1
            };
        case(actionTypes.DECREMENT):
            return {
                ...store,
                counter: store.counter - 1
            }
        case(actionTypes.ADD):
            return {
                ...store,
                counter: store.counter + action.value
            }
        case(actionTypes.SUBTRACT):
            return {
                ...store,
                counter: store.counter - action.value
            }
        default:
            return store;
    }
}