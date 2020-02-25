import React from 'react';
import { Svg, Path } from 'react-native-svg';

export default function SmFilter(props) {
  return (
    <Svg viewBox="0 0 20 20" fill="currentColor">
      <Path
        fillRule="evenodd"
        d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
        clipRule="evenodd"
      />
    </Svg>
  );
}
