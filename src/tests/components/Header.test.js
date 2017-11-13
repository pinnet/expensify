import ReactShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import Header from './../../components/Header';

it('should render correctly', () => {
  const renderer =  new ReactShallowRenderer();
     renderer.render(<Header/>);
        expect(renderer.getRenderOutput()).toMatchSnapshot();
});