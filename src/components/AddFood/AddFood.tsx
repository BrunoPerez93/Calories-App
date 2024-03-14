import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../Header";
import { Button, Input } from "@rneui/themed";

const AddFood = () => {
  return (
    <View style={styles.container} >
      <Header />

      <View style={styles.addFoodContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Add Food</Text>
        </View>

        <View style={styles.addFoodButtonContainer}>
          <Button radius="lg" color='#4ecb71'>
            Add
          </Button>
        </View>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.inputContainer}>
          <Input
            placeholder="apple, pie, soda..."

          />
        </View>
        <Button
          title='Search'
          radius='lg'
          color='#6FF085'
          titleStyle={styles.searchBtnTitle}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
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
  }
})

export default AddFood;