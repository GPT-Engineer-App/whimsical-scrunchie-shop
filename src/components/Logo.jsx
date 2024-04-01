import React from 'react';
import { Image } from '@chakra-ui/react';

const Logo = ({ src, ...rest }) => {
  return <Image src={src} {...rest} />;
};

export default Logo;