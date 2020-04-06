import { homeConstants } from './homeConstants';
import { reducer, initialState } from './homeReducer';

describe('app reducer', () => {
    describe('reducer', () => {
        it('should return the default state', () => {
            expect(reducer(undefined, {})).toBe(initialState)
        }),

        it('should update the state', () => {
            const value = "false"
            const action = {
                type: homeConstants.IS_LOGGED_IN_VALUE,
                isLoggedin: value
            }
            expect(reducer(initialState, action)).toStrictEqual({"isLoggedin": "false"})
        })
    })
})

