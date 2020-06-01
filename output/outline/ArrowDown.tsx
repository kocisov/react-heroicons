import React from 'react';
import { Svg, Path } from 'react-native-svg';

export default function ArrowDown(props) {
  return (
    <Svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 14l-7 7m0 0l-7-7m7 7V3"
      />
    </Svg>
  );
}
