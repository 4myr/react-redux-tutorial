import { INCREMENT, DECREMENT, ADD, SUBTRACT } from './actionTypes';

export const increment = () => {
    return {
        type: INCREMENT
    }
}
export const decrement = () => {
    return {
        type: DECREMENT
    }
}
export const add = (value) => {
    return {
        type: ADD,
        value: value
    }
}
export const subtract = (value) => {
    return {
        type: SUBTRACT,
        value: value
    }
}