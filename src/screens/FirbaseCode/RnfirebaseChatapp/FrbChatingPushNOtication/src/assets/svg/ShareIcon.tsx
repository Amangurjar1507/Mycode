import * as React from 'react';
import Svg, {SvgProps, Circle, Path} from 'react-native-svg';
const ShareIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Circle cx={12} cy={12} r={12} fill="#FEEBDB" />
    <Path
      fill="#043024"
      fillRule="evenodd"
      d="m9.564 13.17-.696-.231c-2.354-.784-3.53-1.177-3.53-1.898 0-.72 1.176-1.112 3.53-1.897l5.41-1.803c1.655-.552 2.483-.828 2.92-.39.437.436.161 1.264-.39 2.92l-1.804 5.41c-.784 2.353-1.177 3.53-1.897 3.53-.721 0-1.113-1.177-1.898-3.53l-.232-.696 3.665-3.664a1 1 0 0 0-1.414-1.414L9.564 13.17Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default ShareIcon;
