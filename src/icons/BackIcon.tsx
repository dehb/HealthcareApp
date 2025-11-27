import * as React from "react";
import Svg, { Path } from "react-native-svg";

interface BackIconProps {
  size?: number;
  width?: number;
  height?: number;
  color?: string;
  strokewidth1?: string;
  strokewidth2?: string;
}

function BackIcon({
  width = 22,
  height = 22,
  color = "#01060D",
  strokewidth1 = "1.75",
  strokewidth2 = "2",
  ...props
}: BackIconProps) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 28 28"
      fill="none"
      //   xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M13.3438 21.875L5.46875 14L13.3438 6.125M6.5625 14H22.5312"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default BackIcon;
