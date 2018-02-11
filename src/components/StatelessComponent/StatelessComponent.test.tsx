import * as React from 'react';
import * as enzyme from 'enzyme';
import * as Adapter from "enzyme-adapter-react-16";

import StatelessComponent from "./StatelessComponent";

enzyme.configure({ adapter: new Adapter() });

it('renders the correct name (REPLACE ME)', () => {
  const component = enzyme.shallow(<StatelessComponent name='dummy' />);
  expect(component.find("p").text()).toEqual('dummy');
});