import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const Paid = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#34A853"
      fillRule="evenodd"
      d="M12 21a9 9 0 0 0 7.51-13.961l-7.155 7.95a2 2 0 0 1-2.687.262L6.4 12.8a1 1 0 0 1 1.2-1.6l3.268 2.451 7.346-8.161A9 9 0 1 0 12 21Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default Paid;
