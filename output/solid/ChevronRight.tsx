import React from 'react';
import { Svg, Path } from 'react-native-svg';

export default function ChevronRight(props) {
  return (
    <Svg viewBox="0 0 20 20" fill="currentColor">
      <Path
        fillRule="evenodd"
        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
        clipRule="evenodd"
      />
    </Svg>
  );
}
