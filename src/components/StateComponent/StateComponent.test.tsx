import * as React from 'react';
import * as enzyme from 'enzyme';
import * as Adapter from "enzyme-adapter-react-16";
import StateComponent from './StateComponent';

enzyme.configure({ adapter: new Adapter() });

it('renders the correct value (REPLACE ME)', () => {
  const component = enzyme.shallow(<StateComponent value='dummy' />);
  expect(component.find("input").props().value).toEqual('dummy');
});