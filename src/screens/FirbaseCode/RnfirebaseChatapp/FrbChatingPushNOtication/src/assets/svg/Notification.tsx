import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const Notification = (props: SvgProps) => (
  <Svg width={26} height={26} fill="none" viewBox="0 0 24 24" {...props}>
    {/* Bell shape */}
    <Path
      d="M18 8c0-3.313-2.687-6-6-6s-6 2.687-6 6v5c0 .55-.45 1-1 1H4c-.552 0-1 .45-1 1s.448 1 1 1h16c.552 0 1-.45 1-1s-.448-1-1-1h-1c-.55 0-1-.45-1-1V8z"
      stroke="#FFFFFF" // White border color
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Bell clapper */}
    <Path
      d="M13.73 21a2 2 0 0 1-3.46 0"
      stroke="#FFFFFF"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Notification;
