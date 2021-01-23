import * as actionTypes from '../actions';

export const initialStore = {
    result: []
}
export const resultReducer = (store = initialStore, action) => {
    switch(action.type) {
        case(actionTypes.STORE_RESULT):
            return {
                ...store,
                result: store.result.concat({id: store.result.length, value: action.result})
            }
        case(actionTypes.DELETE_RESULT):
            return {
                ...store,
                result: store.result.filter(k => {
                    return k.id != action.id;
                })
            }
        default:
            return store;
    }
}