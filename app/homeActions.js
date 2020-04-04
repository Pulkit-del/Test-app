import { homeConstants }  from './homeConstants';

export const homeActions = {
    isLoggedin,
};

function isLoggedin(value) {
    return {
        type: homeConstants.IS_LOGGED_IN_VALUE,
        isLoggedin: value
    }
}
