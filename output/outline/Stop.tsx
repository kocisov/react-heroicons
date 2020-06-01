import React from 'react';
import { Svg, Path } from 'react-native-svg';

export default function Stop(props) {
  return (
    <Svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"
      />
    </Svg>
  );
}
