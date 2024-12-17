import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const Drawer = (props: SvgProps) => (
  <Svg
    width={34} // Increased size here
    height={34} // Increased size here
    viewBox="0 0 27 27" // This ensures the SVG scales properly
    fill="none"
    {...props}
  >
    <Path
      fill="#ffff"
      d="M3.537 6.194v2.125h20.191V6.194H3.537Zm0 8.501h20.191V12.57H3.537v2.125Zm0 6.377h20.191v-2.126H3.537v2.126Z"
    />
  </Svg>
);

export default Drawer;
