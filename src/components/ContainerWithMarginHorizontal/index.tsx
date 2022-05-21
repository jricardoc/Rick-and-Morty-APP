import React from "react";

import { Container } from "./styles";
import { ContainerWithMarginHorizontalProps } from "./types";

const ContainerWithMarginHorizontal: React.FC<
  ContainerWithMarginHorizontalProps
> = ({ children, isFlex = true }) => {
  return <Container isFlex={isFlex}>{children}</Container>;
};

export default ContainerWithMarginHorizontal;
