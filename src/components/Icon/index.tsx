import React from "react";
import icons from "../../constants/icons";
import { Container } from "./styles";
import { IconProps } from "./types";

export const Icon = ({
  icon,
  color,
  size = 20,
  style,
  bold = false,
}: Omit<IconProps, "source">) => {
  if (color)
    return (
      <Container
        size={size}
        source={icons[icon]}
        style={[{ tintColor: color }, style]}
        resizeMode="contain"
      />
    );

  return (
    <Container
      size={size}
      source={icons[icon]}
      style={style}
      bold={bold}
      resizeMode="contain"
    />
  );
};

export default Icon;
