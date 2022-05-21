import styled from "styled-components/native";
import { ContainerWithMarginHorizontalProps } from "./types";

export const Container = styled.View<ContainerWithMarginHorizontalProps>`
  ${({ isFlex }) => isFlex && "flex: 1;"}
  margin-left: 20px;
  margin-right: 20px;
  max-width: 100%;
`;
