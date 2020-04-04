import { homeConstants } from '../app/homeConstants';
import { reducer } from '../app/homeReducer';

describe('app reducer', () => {
    describe('reducer', () => {
        it('should return the default state', () => {
            expect(reducer(undefined, {})).toBe("true")
        })

        it('should update the state', () => {
            const value = "false"
            const action = {
                type: homeConstants.IS_LOGGED_IN_VALUE,
                isLoggedin: value
            }
            expect(reducer(undefined, action)).toBe(value)
        })
    })
})

