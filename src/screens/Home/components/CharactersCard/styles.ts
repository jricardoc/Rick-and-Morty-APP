import styled from "styled-components/native";
import Text from "../../../../components/Text";

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  height: 230px;
  background-color: white;
`;

export const CharacterImage = styled.Image.attrs({
  borderTopLeftRadius: 25,
  borderBottomLeftRadius: 25,
})`
  width: 40%;
  height: 100%;
`;
export const CharacterInfo = styled.View`
  padding: 20px 20px 0 20px;
  flex: 1;
  justify-content: space-between;
`;
export const CharacterName = styled(Text)`
  font-size: 20px;
  font-weight: bold;
`;
export const CharacterOrigin = styled(Text)`
  margin-bottom: 20px;
  font-weight: 700;
`;
export const CharacterDescription = styled(Text)`
  text-align: left;
`;
export const CharacterMoreInfo = styled(Text)`
  font-weight: bold;
`;

export const RowBetween = styled.View`
  flex-direction: row;
  width: 100%;
  height: 30px;
  justify-content: space-between;
`;
