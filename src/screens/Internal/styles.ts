import { SafeAreaView } from 'react-native-safe-area-context';
import styled from "styled-components/native";
import Text from '../../components/Text';

export const Container = styled(SafeAreaView)`
    flex: 1;
    justify-content: space-between;
    padding-bottom: 20px;
`;

export const Content = styled.View`
    flex: 1;
    justify-content: space-between;
    margin: 0 20px;
`;

export const CharacterImage = styled.Image`
    width: 100%;
    height: 45%;
`;

export const CharacterInfo = styled.View`
`;

export const DescriptionCharacter = styled(Text)`
`;
