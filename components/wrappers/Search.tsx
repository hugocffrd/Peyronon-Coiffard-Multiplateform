import React, { useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Card, Paragraph, Searchbar } from "react-native-paper";
import { useDispatch } from "react-redux";
import { AnimalModel } from "../../models/animal.model";

interface SearchProps {
  animals: AnimalModel[];
  navigation: any;
}

export const Search = (props: SearchProps) => {
  const { animals, navigation } = props;
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

  const handleInputChange = (text) => {
    setSearchText(text);
    setFilteredAnimals(
      animals.filter((animal) =>
        animal.name.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  const goToAnimalDetail = (animal: AnimalModel) => {
    navigation.navigation.navigate("Details", { animal });
    setSearchText("");
  };

  return (
    <View>
      <Searchbar
        placeholder="Rechercher..."
        onChangeText={handleInputChange}
        value={searchText}
      />

      {searchText !== "" && filteredAnimals.length > 0 ? (
        filteredAnimals.map((animal) => (
          <TouchableOpacity
            key={animal.id}
            style={styles.cardClick}
            onPress={() => goToAnimalDetail(animal)}
          >
            <Card>
              <Card.Title title={animal.name} />
              <Card.Content>
                <Paragraph>{animal.typeAnimal}</Paragraph>
              </Card.Content>
            </Card>
          </TouchableOpacity>
        ))
      ) : (
        <View></View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cardClick: {
    margin: 10,
  },
});
