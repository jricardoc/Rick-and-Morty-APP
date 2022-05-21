import React from "react";

import { Container } from "./styles";
import { Props } from "./types";

const Text = ({ children, color = "black", size = 14, bold = false, ...rest }: Props) => {
  return (
    <Container color={color} size={size} bold={bold} {...rest}>
      {children}
    </Container>
  );
};

export default Text;
