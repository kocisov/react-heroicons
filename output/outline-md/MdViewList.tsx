import React from 'react';
import { Svg, Path } from 'react-native-svg';

export default function MdViewList(props) {
  return (
    <Svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 10h16M4 14h16M4 18h16"
      />
    </Svg>
  );
}