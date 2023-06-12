import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Card, Paragraph, Searchbar } from "react-native-paper";
import { useDispatch } from "react-redux";
import { AnimalModel } from "../../models/animal.model";

interface SearchProps {
  animals: AnimalModel[];
}

export const Search = (props: SearchProps) => {
  const { animals } = props;
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [filteredAnimals, setFilteredAnimals] = useState<AnimalModel[]>([]);

  useEffect(() => {
    const delay = setTimeout(() => {
      //@ts-ignore
      dispatch(search(searchText));
    }, 1000);

    return () => clearTimeout(delay);
  }, [searchText, dispatch]);

  const onChangeValue = (text: string): void => {
    setSearchText(text);
    setFilteredAnimals(
      animals.filter((animal) =>
        animal.name.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  return (
    <View>
      <Searchbar
        placeholder="Rechercher..."
        onChangeText={(text) => onChangeValue(text)}
      />

      {searchText !== "" && filteredAnimals.length > 0 ? (
        filteredAnimals.map((animal) => (
          <Card key={animal.id} style={{ margin: 10 }}>
            <Card.Title title={animal.name} />
            <Card.Content>
              <Paragraph>{animal.typeAnimal} </Paragraph>
            </Card.Content>
          </Card>
        ))
      ) : (
        <View></View>
      )}
    </View>
  );
};
