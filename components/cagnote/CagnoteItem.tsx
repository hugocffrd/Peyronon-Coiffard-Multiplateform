import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Card, Title, Paragraph, TextInput, Button } from "react-native-paper";
import { useDispatch } from "react-redux";
import { AnimalModel } from "../../models/animal.model";
import { UserModel } from "../../models/user.model";
import { updateCagnote } from "../../redux/actions/cagnote.action";

interface CagnoteItemProps {
  item: {
    id: string;
    amount: number;
    animal: AnimalModel;
    users: UserModel[];
  };
  user: UserModel;
}

export const CagnoteItem = (props: CagnoteItemProps) => {
  const { amount, animal, users, id } = props.item;
  const { user } = props;
  const [donationAmount, setDonationAmount] = useState("");
  const dispatch = useDispatch();

  const handleDonation = (): void => {
    setDonationAmount("");
    //@ts-ignore
    dispatch(updateCagnote(id, donationAmount, user.id));
  };
  return (
    <Card style={styles.card}>
      <Card.Content>
        <View style={styles.row}>
          <View style={styles.leftColumn}>
            <Title>{animal.name}</Title>
            <Paragraph>Type: {animal.typeAnimal}</Paragraph>
            <Paragraph>Dons total : {amount} €</Paragraph>
            <View style={styles.donnationContainer}>
              <TextInput
                style={styles.input}
                placeholder="Montant du don"
                value={donationAmount}
                onChangeText={setDonationAmount}
                keyboardType="numeric"
              />
              <Button
                mode="contained"
                onPress={() => handleDonation()}
                style={styles.button}
              >
                Faire un don
              </Button>
            </View>
          </View>
          <View style={styles.rightColumn}>
            {users?.map((user, index) => (
              <Paragraph key={index}>{user.surname}</Paragraph>
            ))}
          </View>
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leftColumn: {
    marginRight: 5,
  },
  rightColumn: {
    marginLeft: 5,
  },
  input: {
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
  },
  donnationContainer: {
    display: "flex",
  },
});
