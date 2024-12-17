import * as React from 'react';
import Svg, {SvgProps, Circle, Path} from 'react-native-svg';
const User = (props: SvgProps) => (
  <Svg width={26} height={26} fill="none" {...props}>
    <Circle
      cx={13}
      cy={8.667}
      r={3.358}
      stroke="#043024"
      strokeLinecap="round"
      strokeWidth={1.95}
    />
    <Path
      stroke="#043024"
      strokeLinecap="round"
      strokeWidth={1.95}
      d="M5.253 18.36c.693-2.54 3.321-3.735 5.954-3.735h3.586c2.633 0 5.26 1.195 5.954 3.735.142.521.255 1.085.32 1.683.064.595-.427 1.082-1.025 1.082H5.958c-.598 0-1.089-.487-1.025-1.082.065-.598.178-1.162.32-1.683Z"
    />
  </Svg>
);
export default User;
