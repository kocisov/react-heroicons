import React from 'react';
import { Svg, Path } from 'react-native-svg';

export default function DocumentDuplicate(props) {
  return (
    <Svg viewBox="0 0 20 20" fill="currentColor">
      <Path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" />
      <Path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
    </Svg>
  );
}