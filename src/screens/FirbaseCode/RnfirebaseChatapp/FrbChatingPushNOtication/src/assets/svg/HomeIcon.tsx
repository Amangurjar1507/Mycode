import * as React from 'react';
import Svg, {SvgProps, Path, Mask, G} from 'react-native-svg';

const HomeIcon = (props: SvgProps) => (
  <Svg width={32} height={32} fill={props?.fill} {...props}>
    <Mask
      id="a"
      width={30}
      height={32}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}>
      <Path fill={props?.fill} d="M0 0h32v32H0z" />
    </Mask>
    <G mask="url(#a)">
      <Path
        fill="none"
        stroke={props?.fill}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 12L16 3l13 9v11a1 1 0 0 1-1 1h-8v-7h-8v7H4a1 1 0 0 1-1-1V12z"
      />
    </G>
  </Svg>
);

export default HomeIcon;
