import React from 'react';
import { Svg, Path } from 'react-native-svg';

export default function SmDuplicate(props) {
  return (
    <Svg viewBox="0 0 20 20" fill="currentColor">
      <Path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z" />
      <Path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z" />
    </Svg>
  );
}
