import { DELETE_RESULT, STORE_RESULT } from './actionTypes';

export const storeResult = (result) => {
    return function (dispatch, getState) {
        // console.log(getState().ctr.counter);
        setTimeout(() => {
            dispatch(saveResult(result));
        }, 2000);
    }
    
}

export const deleteResult = (key) => {
    return {
        type: DELETE_RESULT,
        id: key
    }
}

export const saveResult = (result) => {
    return {
        type: STORE_RESULT,
        result: result
    }
}