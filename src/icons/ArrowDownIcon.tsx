import * as React from "react";
import Svg, { Path } from "react-native-svg";

interface ArrowIconProps {
  size?: number;
  width?: number;
  height?: number;
  color?: string;
}

function ArrowDownIcon({
  width = 21,
  height = 20,
  color = "#007AFF",
  ...props
}: ArrowIconProps) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 21 20"
      fill="none"
      {...props}
    >
      <Path
        d="M2.54469 6.61598C2.7791 6.38164 3.09699 6.25 3.42844 6.25C3.7599 6.25 4.07778 6.38164 4.31219 6.61598L10.4997
 12.8035L16.6872 6.61598C16.9229 6.38829 17.2387 6.26229 17.5664 6.26514C17.8942 6.26799 18.2077 6.39945 18.4395 6.63121C18.6712 
 6.86297 18.8027 7.17649 18.8055 7.50423C18.8084 7.83198 18.6824 8.14773 18.4547 8.38348L11.3834 15.4547C11.149 15.6891 10.8312 
 15.8207 10.4997 15.8207C10.1682 15.8207 9.85035 15.6891 9.61594 15.4547L2.54469 8.38348C2.31036 8.14907 2.17871 7.83119 2.17871
 7.49973C2.17871 7.16828 2.31036 6.85039 2.54469 6.61598Z"
        fill={color}
      />
    </Svg>
  );
}

export default ArrowDownIcon;
