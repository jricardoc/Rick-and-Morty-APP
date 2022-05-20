import { SafeAreaView } from 'react-native-safe-area-context';
import styled from "styled-components/native";
import Text from '../../components/Text';

export const Container = styled(SafeAreaView)`
    flex: 1;
`;
export const CharacterImage = styled.Image`
    width: 100%;
    height: 45%;
`;

export const CharacterInfo = styled.View`
    padding: 20px 20px 0 20px;
`;

export const DescriptionCharacter = styled(Text)``;

export const ButtonBack = styled.Button`
    height: 30px;
    width: 30px;
    color: red;

`;