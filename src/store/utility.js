
export const updateObject = (oldState, updatedValue) => {
    return {
        ...oldState,
        ...updatedValue
    }
}