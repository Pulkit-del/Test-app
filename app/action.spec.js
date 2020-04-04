import { homeActions } from '../app/homeActions';
import { homeConstants} from '../app/homeConstants'

describe('homeActions', () => {
    const value = "true"

    describe('isLoggedin', () => {
        it('should fire action', () => {
            const expectedAction = {
                type: homeConstants.IS_LOGGED_IN_VALUE,
                isLoggedin: value
            }
            expect(homeActions.isLoggedin(value)).toEqual(expectedAction)
        })
    })
})