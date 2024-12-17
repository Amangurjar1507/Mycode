import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const Gaol = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      fill="#0062FF"
      fillRule="evenodd"
      d="M16.02 5.129a7.867 7.867 0 1 1-1.115-1.11l.434-.434.205-1.096a.787.787 0 0 1 1.547.29l-.045.239.239-.045a.787.787 0 0 1 .29 1.546l-1.164.219-.39.39Zm-2.235.01a6.293 6.293 0 1 0 1.116 1.11L13.778 7.37a4.72 4.72 0 1 1-1.117-1.108l1.124-1.124ZM11.523 7.4a3.147 3.147 0 1 0 1.12 1.105l-1.187 1.187a1.577 1.577 0 0 1-1.514 2.002 1.573 1.573 0 1 1 .386-3.098L11.523 7.4Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default Gaol;
