import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const Star = (props: SvgProps) => (
  <Svg width={17} height={17} fill="none" {...props}>
    <Path
      fill="#409261"
      d="M9.01.317a.569.569 0 0 0-1.02 0L5.671 5.015l-5.184.753a.569.569 0 0 0-.315.97l3.751 3.657-.885 5.164a.569.569 0 0 0 .825.6L8.5 13.72l4.637 2.438a.569.569 0 0 0 .825-.6l-.885-5.163 3.751-3.657a.569.569 0 0 0-.315-.97l-5.185-.753L9.01.317Z"
    />
  </Svg>
);
export default Star;
