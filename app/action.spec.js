import { homeActions } from './homeActions';
import { homeConstants} from './homeConstants'

describe('homeActions', () => {
    const x = "true"

    describe('isLoggedin', () => {
        it('should create action', () => {
            const expectedAction = {
                type: homeConstants.IS_LOGGED_IN_VALUE,
                isLoggedin: x
            }
            expect(homeActions.isLoggedin(x)).toEqual(expectedAction)
        })
    })
})