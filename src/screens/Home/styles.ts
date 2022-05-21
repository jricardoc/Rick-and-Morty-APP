import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import Text from "../../components/Text";

interface IsPressed {
  isPressed: boolean;
}

export const Container = styled(SafeAreaView)`
  flex: 1;
`;

export const Content = styled.View`
  margin: 0 20px;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.Image`
  width: 100px;
  height: 50px;
`;

export const MenuOptionsContainer = styled.View`
  flex-direction: row;

`;

export const MenuOptionsLabel = styled(Text)<IsPressed>`
  color: ${({ isPressed }) => (isPressed ? "white" : "black")};
  font-weight: bold;
`;

export const MenuOptionPressable = styled.Pressable<IsPressed>`
  background-color: ${({ isPressed }) => (isPressed ? "red" : "white")};
  border-radius: 14px;
  padding: 8px 15px;
  margin-right: 10px;

`;
