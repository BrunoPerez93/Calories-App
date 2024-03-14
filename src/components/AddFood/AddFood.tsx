import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../Header";
import { Button, Input } from "@rneui/themed";
import AddFoodModal from "../AddFoodModal";

const AddFood = () => {

  const [visible, setVisible] = useState<boolean>(false);

  const handleModalClose = () => {
    setVisible(false);
  }

  return (
    <View style={styles.container} >
      <Header />

      <View style={styles.addFoodContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Add Food</Text>
        </View>

        <View style={styles.addFoodButtonContainer}>
          <Button
            radius="lg"
            color='#4ecb71'
            onPress={() => setVisible(true)}
            title='+'
            titleStyle={styles.titleButton}
          />
        </View>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.inputContainer}>
          <Input
            placeholder="apple, pie, soda..."

          />
        </View>
        <Button
          title='Buscar'
          radius='lg'
          color='#6FF085'
          titleStyle={styles.searchBtnTitle}
        />
      </View>
      <AddFoodModal visible={visible} onClose={handleModalClose} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: '#fff',
    flex: 1,
  },
  addFoodContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24,
  },
  textContainer: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  addFoodButtonContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  searchContainer: {
    flexDirection: 'row',
  },
  inputContainer: {
    flex: 1,
    alignItems: 'flex-end',
    marginLeft: -12,
  },
  searchBtnTitle: {
    color: '#000',
    fontSize: 14,
  },
  titleButton: {
    fontSize: 20,
    fontWeight: 'bold',
    width: 30,
  }
})

export default AddFood;