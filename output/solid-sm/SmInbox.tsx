import React from 'react';
import { Svg, Path } from 'react-native-svg';

export default function SmInbox(props) {
  return (
    <Svg viewBox="0 0 20 20" fill="currentColor">
      <Path
        fillRule="evenodd"
        d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z"
        clipRule="evenodd"
      />
    </Svg>
  );
}
