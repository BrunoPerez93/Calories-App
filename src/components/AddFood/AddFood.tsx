import React, { useEffect, useState } from "react";
import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "../Header";
import { Button, Input } from "@rneui/themed";
import AddFoodModal from "../AddFoodModal";
import useFoodStorage from "../../hooks/useFoodStorage";
import { Meal } from "../../types";
import MealItem from "./MealItem";

const AddFood = () => {

  const [visible, setVisible] = useState<boolean>(false);
  const [foods, setFoods] = useState<Meal[]>([]);
  const [search, setSearch] = useState('');
  const { onGetFood } = useFoodStorage();

  const loadFoods = async () => {
    try {
      const foodResposne = await onGetFood();
      setFoods(foodResposne);

    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    loadFoods().catch(null)
  }, [])

  const handleModalClose = async (shouldUpdate?: boolean) => {
    if (shouldUpdate) {
      Alert.alert('Comida guardada exitosamente')
      loadFoods();
    }
    setVisible(false);
  }

  const handleSearchPress = async () => {
    try {
      const result = await onGetFood();
      setFoods(result.filter((item: Meal) => item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())))
    } catch (error) {
      console.error(error)
      setFoods([]);
    }
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
            value={search}
            onChangeText={(text: string) => setSearch(text)}
          />
        </View>
        <Button
          title='Buscar'
          radius='lg'
          color='#6FF085'
          titleStyle={styles.searchBtnTitle}
          onPress={handleSearchPress}
        />
      </View>
      <ScrollView style={styles.content}>
        {foods?.map(meal => <MealItem key={`my-meal-item-${meal.name}`} {...meal} />)}
      </ScrollView>

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
  },
  content: {
  }
})

export default AddFood;