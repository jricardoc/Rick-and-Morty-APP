import styled from "styled-components/native";
import { Props } from "./types";

type ContainerProps = Required<Pick<Props, "color" | "size" | "bold">>;

export const Container = styled.Text<ContainerProps>`
  color: ${({ color }) => color};
  font-size: ${({ size }) => size}px;
  font-weight: ${({ bold }) => bold ? "bold" : "normal"};
`;
