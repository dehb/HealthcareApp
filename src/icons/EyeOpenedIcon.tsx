import * as React from "react";
import Svg, { Path } from "react-native-svg";

interface EyeOpenedIconProps {
  width?: number;
  height?: number;
  color?: string;
}

function EyeOpenedIcon({
  width = 24,
  height = 25,
  color = "#AEADAE",
  ...props
}: EyeOpenedIconProps) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 25"
      fill="none"
      {...props}
    >
      <Path
        d="M11.984 5.40039C8.33061 5.40039 4.58295 7.51492 1.63264 11.744C1.54843 11.866 1.50228 12.0103 1.50003 12.1586C1.49777 12.3068 1.53952 12.4524 1.61998 12.577C3.88686 16.1254 7.58436 18.9004 11.984 18.9004C16.3359 18.9004 20.1094 16.117 22.3805 12.5605C22.459 12.4384 22.5008 12.2963 22.5008 12.1511C22.5008 12.0059 22.459 11.8637 22.3805 11.7416C20.1042 8.22602 16.3031 5.40039 11.984 5.40039Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 15.9004C14.0711 15.9004 15.75 14.2215 15.75 12.1504C15.75 10.0793 14.0711 8.40039 12 8.40039C9.92893 8.40039 8.25 10.0793 8.25 12.1504C8.25 14.2215 9.92893 15.9004 12 15.9004Z"
        stroke={color}
        strokeMiterlimit="10"
      />
    </Svg>
  );
}

export default EyeOpenedIcon;
