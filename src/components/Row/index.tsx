import React from "react";
import { View } from "react-native";
import { Props } from "./types";

import { Container } from "./styles";

const Row = ({ children, ...rest }: Props) => {
  return <Container {...rest}>{children}</Container>;
};

export default Row;
