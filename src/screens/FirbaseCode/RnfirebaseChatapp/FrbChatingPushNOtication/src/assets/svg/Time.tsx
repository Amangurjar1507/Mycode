import * as React from 'react';
import Svg, {SvgProps, Circle, Path} from 'react-native-svg';
const Time = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Circle cx={10} cy={10} r={7.567} stroke="#043024" strokeWidth={1.8} />
    <Path
      stroke="#043024"
      strokeLinecap="round"
      strokeWidth={1.8}
      d="M13.75 10h-3.5a.25.25 0 0 1-.25-.25V7.083"
    />
  </Svg>
);
export default Time;
