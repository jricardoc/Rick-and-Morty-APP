import { ImageProps } from "react-native";
import { NameIconTypes } from "../../constants/icons";

export interface IconOptionsProps {
  icon: NameIconTypes;
  size?: number;
  color?: string;
  bold?: boolean;
}

export interface IconProps extends ImageProps, IconOptionsProps {}
