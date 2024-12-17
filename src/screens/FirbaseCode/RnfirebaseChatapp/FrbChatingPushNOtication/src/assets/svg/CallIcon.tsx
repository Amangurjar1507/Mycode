import * as React from 'react';
import Svg, {SvgProps, Circle, Path} from 'react-native-svg';
const CallIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Circle cx={12} cy={12} r={12} fill="#FEEBDB" />
    <Path
      fill="#043024"
      d="m15.9 13.279 1.613 1.613a.786.786 0 0 1 0 1.112 4.716 4.716 0 0 1-6.164.438l-.11-.082a18.685 18.685 0 0 1-3.737-3.737l-.082-.11a4.716 4.716 0 0 1 .438-6.164.786.786 0 0 1 1.112 0l1.614 1.613a.833.833 0 0 1 0 1.179l-1.135 1.134a.677.677 0 0 0-.127.782 7.788 7.788 0 0 0 3.483 3.483c.26.13.576.08.782-.127l1.134-1.134a.833.833 0 0 1 1.179 0Z"
    />
  </Svg>
);
export default CallIcon;
