export const deposit = (balance) => {
    return (dispatch) => {
        dispatch({
            type: "deposit",
            payload: balance
        })
    }
}

export const withdraw = (balance) => {
    return (dispatch) => {
        dispatch({
            type: "withdraw",
            payload: balance
        })
    }
}