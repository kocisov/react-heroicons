import React from 'react';
import { Svg, Path } from 'react-native-svg';

export default function BookmarkAlt(props) {
  return (
    <Svg viewBox="0 0 20 20" fill="currentColor">
      <Path
        fillRule="evenodd"
        d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm11 1H6v8l4-2 4 2V6z"
        clipRule="evenodd"
      />
    </Svg>
  );
}