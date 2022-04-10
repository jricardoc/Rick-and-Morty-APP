import React, { useCallback, useEffect, useState } from "react";
import { Alert, FlatList, Pressable, View } from "react-native";
import { ResponseProps } from "../../@types/DTOS/charactersDTO";
import Icon from "../../components/Icon";
import Separator from "../../components/Separator";
import { getCharacters } from "../../services/resources/characters";

import {
  Container,
  Header,
  Logo,
  Content,
  MenuOptionsContainer,
  MenuOptionsLabel,
  MenuOptionPressable,
} from "./styles";

const Home: React.FC = () => {
  const [selectedMenu, setSelectedMenu] = useState<number>(1);
  const [characters, setCharacters] = useState<ResponseProps[]>([]);
  const [page, setPage] = useState(1);

  const menuOptions = [
    {
      id: 1,
      label: "Popular",
    },
    {
      id: 2,
      label: "A-Z",
    },
    {
      id: 3,
      label: "Last Viewed",
    },
  ];

  const getData = useCallback(async () => {
    try {
      const { results } = await getCharacters(page);
      console.log(results);
      setCharacters(results);
      setPage((oldState) => oldState + 1);
    } catch (error) {
      Alert.alert("Oops", "Something went wrong");
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <Container>
      <Content>
        <Header>
          <Logo
            resizeMode="contain"
            source={require("../../assets/images/logo.png")}
          />
          <Icon icon="search" size={25} color="black" />
        </Header>
        <Separator height={20} />
        <MenuOptionsContainer>
          {menuOptions.map((element) => (
            <>
              <MenuOptionPressable
                isPressed={selectedMenu === element.id}
                onPress={() => setSelectedMenu(element.id)}
              >
                <MenuOptionsLabel
                  isPressed={selectedMenu === element.id}
                  color="white"
                  size={16}
                >
                  {element.label}
                </MenuOptionsLabel>
              </MenuOptionPressable>
              <Separator width={5} />
            </>
          ))}
        </MenuOptionsContainer>

        <Separator height={20} />

        <FlatList
          data={characters}
          renderItem={renderItem}
          keyExtractor={(item) => `${item.id}`}
        />
      </Content>
    </Container>
  );
};

export default Home;
