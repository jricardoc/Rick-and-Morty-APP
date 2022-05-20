import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ResponseProps } from "../../@types/DTOS/charactersDTO";

import { Container, CharacterImage, CharacterInfo, DescriptionCharacter, ButtonBack } from "./styles";
import Text from "../../components/Text";
import Separator from "../../components/Separator";
import RowBetween from "../../components/RowBetween";
import Icon from "../../components/Icon";

const Internal = () => {

  const { navigate } = useNavigation();

  const handleNavigateContainer = (item: ResponseProps) => () => {
    navigate('Home', {
      item
    })
  }

  const route = useRoute();
  const { item } = route.params as ResponseProps;

  return (
    <Container>
      <CharacterImage source={{ uri: item?.image }} />
      <CharacterInfo>
        <RowBetween>
          <Text size={40} bold>{item?.name}</Text>
          <Icon icon="uploadIcon" size={25} color="black"/>
        </RowBetween>
        <Text size={15}>{item?.origin?.name}</Text>
        <Separator height={20} />
        <DescriptionCharacter>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio aut expedita animi voluptas corporis possimus, tempore error pariatur atque fuga accusantium unde non ad exercitationem iste, ratione maxime? Accusantium, doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus explicabo dolor non, exercitationem temporibus itaque, unde laboriosam eveniet ullam voluptates, commodi animi? Laboriosam nobis veritatis, quam nostrum vero assumenda minima? Lorem, ipsum dolor sit amet consectetur adipisicing elit.</DescriptionCharacter>
      </CharacterInfo>
      <Separator height={20}/>
      <ButtonBack 
      onPress={handleNavigateContainer(item)}
      title="back"
      />
    </Container>
  );
};

export default Internal;
