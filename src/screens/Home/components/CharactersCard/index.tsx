import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { ResponseProps } from "../../../../@types/DTOS/charactersDTO";
import Icon from "../../../../components/Icon";
import Separator from "../../../../components/Separator";

import {
  Container,
  CharacterImage,
  CharacterInfo,
  CharacterName,
  CharacterOrigin,
  CharacterDescription,
  CharacterMoreInfo,
  RowBetween,
} from "./styles";

const CharactersCard = ({ item }: ResponseProps) => {

  const { navigate } = useNavigation();

  const handleNavigateContainer = (item: ResponseProps) => () => {
    navigate('Internal', {
      item
    })
  }
    
  

  return (
    <Container onPress={handleNavigateContainer(item)}>
      <CharacterImage source={{ uri: item?.image }} />
      <CharacterInfo>
        <View>
          <CharacterName>{item.name}</CharacterName>
          <CharacterOrigin color="#9e9c9c">{item.origin?.name}</CharacterOrigin>
          <CharacterDescription color="#9e9c9c">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
            quo qui quidem, aliquid eligendi laudantium?
          </CharacterDescription>
        </View>
        <RowBetween>
          <CharacterMoreInfo>More Info</CharacterMoreInfo>
          <Icon icon="chevronRight" size={15} color="black" />
        </RowBetween>
      </CharacterInfo>
    </Container>
  );
};

export default CharactersCard;
