import React from 'react';
import { Svg, Path } from 'react-native-svg';

export default function ArrowRight(props) {
  return (
    <Svg viewBox="0 0 20 20" fill="currentColor">
      <Path
        fillRule="evenodd"
        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </Svg>
  );
}