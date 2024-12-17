import * as React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const Map = (props: SvgProps) => (
  <Svg
     width={20}
    height={20}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <G clipPath="url(#b)">
        <Path
          fill="#043024"
          d="m10 17.417 4.125-4.125a5.833 5.833 0 1 0-8.25 0L10 17.417Zm0 2.356L4.697 14.47a7.5 7.5 0 1 1 10.606 0L10 19.773Zm0-8.94A1.667 1.667 0 1 0 10 7.5a1.667 1.667 0 0 0 0 3.333Zm0 1.667a3.333 3.333 0 1 1 0-6.667 3.333 3.333 0 0 1 0 6.667Z"
        />
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h20v20H0z" />
      </ClipPath>
      <ClipPath id="b">
        <Path fill="#fff" d="M0 0h20v20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default Map
