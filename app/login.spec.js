import React from 'react';
import Login from './Login';
import renderer from 'react-test-renderer';


describe('snapshot', () => {
    it('component renders properly', () => {
        const component = renderer.create(<Login />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
