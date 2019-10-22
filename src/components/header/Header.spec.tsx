import { shallow } from 'enzyme';
import * as React from 'react';
import Header from './Header';
import { useHeaderElements } from './Header'
import { BrowserRouter } from 'react-router-dom';

describe('<Header/>', () => {
    const container = shallow(<BrowserRouter><Header /></BrowserRouter>);
    it('should match the snapshot', () => {
        expect(container.html()).toMatchSnapshot();
    });
});

describe('useHeaderElements', () => {
    const Elements = () => {
      const props = useHeaderElements({});
      return <div {...props} />;
    };
    const container = shallow(<Elements />);
  
    it('should have proper props for email field', () => {
      expect(container.prop('btnClick')).toEqual({
        toggle: expect.any(Function),
        close: expect.any(Function),
        currentValue: false
      });
    });
  });