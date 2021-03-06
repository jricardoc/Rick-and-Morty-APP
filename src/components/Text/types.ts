import { TextProps } from "react-native";

export interface Props extends TextProps {
  children?: string;
  color?: string;
  size?: number;
  bold?: boolean;
}
