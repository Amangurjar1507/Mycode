import * as React from 'react';
import Svg, {
  SvgProps,
  G,
  Mask,
  Path,
  Defs,
  ClipPath,
  Rect,
} from 'react-native-svg';
const SmallHome = (props: SvgProps) => (
  <Svg width={25} height={25} fill="none" {...props}>
    <Rect
      x="0"
      y="0"
      width="25"
      height="25"
      stroke="#043024"
      strokeWidth="2"
      fill="none"
    />
    <G clipPath="url(#a)">
      <Mask
        id="b"
        width={25}
        height={25}
        x={0}
        y={0}
        // maskUnits="userSpaceOnUse"
        style={{
          maskType: 'luminance',
        }}>
        <Path fill="#fff" d="M25 0H0v25h25V0Z" />
      </Mask>
      <G mask="url(#b)">
        <Path fill="#fff" d="M25 0H0v25h25V0Z" />
        <Path
          stroke="#043024"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.6 22.4H4.267A1.067 1.067 0 0 1 3.2 20V13.276c0-.282.112-.553.312-.752L12.048 3.94c.416-.416.956-.416 1.372 0l8.504 8.504a1.067 1.067 0 0 1 .312.752v8.057a1.067 1.067 0 0 1-1.067 1.067H16m-6.4 0h6.4m-6.4 0v-6.4c0-.588.476-.976 1.067-.976h4.267c.588 0 1.067.388 1.067.976v8"
        />
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h25v25H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SmallHome;