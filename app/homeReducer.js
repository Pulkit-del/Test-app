import { homeConstants }  from './homeConstants';

export const initialState = {
    isLoggedin: "false"
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case homeConstants.IS_LOGGED_IN_VALUE:
        return {
            ...state,
            isLoggedin: action.isLoggedin
        }
    break;
    default :
    return state
    }
}