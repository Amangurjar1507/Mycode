import * as React from 'react';
import Svg, {SvgProps, Rect, Path, Circle} from 'react-native-svg';
const Money = (props: SvgProps) => (
  <Svg width={25} height={25} fill="none" {...props}>
    <Rect
      width={18.75}
      height={12.5}
      x={3.125}
      y={6.25}
      stroke="#2F3236"
      strokeWidth={1.875}
      rx={2.083}
    />
    <Path
      stroke="#2F3236"
      strokeLinecap="round"
      strokeWidth={1.875}
      d="M6.25 9.375h2.083M16.667 15.625h2.083"
    />
    <Circle
      cx={12.5}
      cy={12.5}
      r={2.188}
      stroke="#2F3236"
      strokeWidth={1.875}
    />
  </Svg>
);
export default Money;
