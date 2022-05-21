import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ResponseProps } from "../../@types/DTOS/charactersDTO";
import Button from "../../components/Button";
import Icon from "../../components/Icon";
import RowBetween from "../../components/RowBetween";
import Separator from "../../components/Separator";
import Text from "../../components/Text";
import {
  CharacterImage,
  CharacterInfo,
  Container,
  DescriptionCharacter,
  Content,
} from "./styles";
import { View } from "react-native";

const Internal = () => {
  const { goBack } = useNavigation();

  const handleGoBack = () => {
    goBack();
  };

  const route = useRoute();
  const { item } = route.params as ResponseProps;

  return (
    <Container>
      <CharacterImage source={{ uri: item?.image }} />
      <Content>
        <View>
          <Separator height={20} />
          <CharacterInfo>
            <RowBetween>
              <Text size={40} bold>
                {item?.name}
              </Text>
              <Icon icon="uploadIcon" size={25} color="black" />
            </RowBetween>
            <Text size={15}>{item?.origin?.name}</Text>
            <Separator height={20} />
            <DescriptionCharacter>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
              possimus rem. Accusantium, impedit eos consequuntur possimus
              perferendis corporis animi? Consectetur est libero cupiditate
              accusamus ipsam placeat, repudiandae hic quod nulla voluptatibus
              quasi corporis minus reiciendis nemo culpa obcaecati soluta
              dolorem pariatur. Eligendi mollitia iure, modi error provident
              impedit nam similique.
            </DescriptionCharacter>
          </CharacterInfo>
          <Separator height={20} />
        </View>
        <Button
          mode="contained"
          color="blue"
          children="Back"
          onPress={handleGoBack}
        />
      </Content>
    </Container>
  );
};

export default Internal;
