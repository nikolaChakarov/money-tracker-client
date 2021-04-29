const AppReducer = (state, action) => {

    switch (action.type) {

        case 'REGISTER':
            return {
                ...state,
                token: action.payload
            };

        case 'LOGIN':
            return {
                ...state,
                token: action.payload
            };

        case 'LOGOUT':
            return {
                ...state,
                token: null
            };


        case 'GET_ALL':
            return {
                ...state,
                transactions: action.payload
            }

        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            };
        case 'DELETE':
            return {
                ...state,
                transactions: state.transactions.filter(el => el._id !== action.payload)
            }

        case 'ERR':
            return {
                ...state,
                error: action.payload
            };

        case 'RESET_ERROR':
            return {
                ...state,
                error: []
            }
        default:
            return state;
    }

}

export default AppReducer;