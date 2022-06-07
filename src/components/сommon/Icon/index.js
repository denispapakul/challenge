import React from 'react';
import {Image} from 'react-native';

import icons from '../../../assets/icons';

const Icon = ({name, size, style, ...rest}) => {
  return (
    <Image
      source={icons[name]}
      style={[{width: size, height: size}, style]}
      {...rest}
    />
  );
};

export default Icon;
