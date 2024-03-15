import React, { useCallback, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../Header";
import CaloriesTitle from "../CaloriesTitle";
import useFoodStorage from "../../hooks/useFoodStorage";
import { useFocusEffect } from "@react-navigation/native";
import { Meal, TodayCaloriesProps } from "../../types";
import TodayCalories from "../TodayCalories";

const Home = () => {

  const totalCaloriesPerDay = 2000;
  const [todayFood, setTodayFood] = useState<Meal[]>([]);
  const [todayStadistics, setTodayStadistics] = useState<TodayCaloriesProps>({});

  const { onGetTodayFood } = useFoodStorage();

  const calculateTodayStadistics = (meals: Meal[]) => {
    try {
      const caloriesConsumed = meals.reduce(
        (acum, current) => acum + Number(current.calories), 0);
      const remainingCalories = totalCaloriesPerDay - caloriesConsumed;
      const percentage = (caloriesConsumed / totalCaloriesPerDay) * 100;

      setTodayStadistics({
        consume: caloriesConsumed,
        percentage,
        remaining: remainingCalories,
      });
    } catch (error) {
      console.error(error)
    }
  }

  const loadTodayFood = useCallback(async () => {
    try {
      const todayFoodResponse = (await onGetTodayFood()) as Meal[];
      calculateTodayStadistics(todayFoodResponse);
      setTodayFood(todayFoodResponse)
    } catch (error) {
      setTodayFood([]);
      console.error(error)
    }
  }, []);

  useFocusEffect(useCallback(() => {
    loadTodayFood().catch(null)
  }, [loadTodayFood]))



  return (
    <View style={styles.container}>
      <Header />
      <CaloriesTitle />
      <TodayCalories {...todayStadistics}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: "#fff",
    flex: 1,
  }
})

export default Home;