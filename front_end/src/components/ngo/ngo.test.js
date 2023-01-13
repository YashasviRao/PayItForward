import React from 'react';
import { shallow, render, mount } from 'enzyme';
import ngo from './ngo';

describe('ngo', () => {
  let props;
  let shallowngo;
  let renderedngo;
  let mountedngo;

  const shallowTestComponent = () => {
    if (!shallowngo) {
      shallowngo = shallow(<ngo {...props} />);
    }
    return shallowngo;
  };

  const renderTestComponent = () => {
    if (!renderedngo) {
      renderedngo = render(<ngo {...props} />);
    }
    return renderedngo;
  };

  const mountTestComponent = () => {
    if (!mountedngo) {
      mountedngo = mount(<ngo {...props} />);
    }
    return mountedngo;
  };  

  beforeEach(() => {
    props = {};
    shallowngo = undefined;
    renderedngo = undefined;
    mountedngo = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
