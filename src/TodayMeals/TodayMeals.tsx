import { Text } from "@rneui/themed";
import React, { FC } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Meal, TodayMealsProps } from "../types";
import MealItem from "../components/AddFood/MealItem";


const TodayMeals: FC<TodayMealsProps> = ({ foods, onCompleteAddRemove }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Comidas</Text>
      <ScrollView style={styles.content}>
        {foods?.map((meal: Meal, index) => (
          <MealItem
            key={`today-meal-item-${meal.name}-${index}`}
            {...meal}
            isAbleToAdd
            onCompleteAddRemove={onCompleteAddRemove}
            itemPosition={index}
          />
        ))}
      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
  },
  title: {
    fontSize: 16
  },
  content: {
    marginVertical: 16,
  },
});

export default TodayMeals;