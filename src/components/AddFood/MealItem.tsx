import { Button, Text } from "@rneui/themed";
import React, { FC } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { MealItemProps } from "../../types";
import useFoodStorage from "../../hooks/useFoodStorage";

const MealItem: FC<MealItemProps> = ({
  calories,
  portion,
  name,
  isAbleToAdd,
  onCompleteAddRemove,
  itemPosition,
}) => {

  const { onSaveTodayFood, onDeleteTodayFood } = useFoodStorage();

  const handleIconPress = async () => {
    try {
      if (!isAbleToAdd) {

        await onSaveTodayFood({ calories, portion, name })
        Alert.alert('Comida agregada al dia')
      } else {
        await onDeleteTodayFood(itemPosition ?? -1)
        Alert.alert('Comida eliminada');
      }

      onCompleteAddRemove?.();
    } catch (error) {
      console.error(error)
      Alert.alert('Comida no agregada')

    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.portion}>{portion}</Text>
      </View>
      <View style={styles.rightContainer}>
        <Button
          title={isAbleToAdd ? 'X' : '+'}
          type="clear"
          titleStyle={styles.buttonTitle}
          onPress={handleIconPress}
        />
        <Text style={styles.calories}>{calories}</Text>

      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6FF085',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    flexDirection: 'row',
  },
  leftContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',

  },
  name: {
    fontSize: 18,
    fontWeight: '700',
  },
  portion: {
    fontSize: 13,
    fontWeight: '500',
  },
  buttonTitle: {
    color: '#000',
    fontSize: 20,
    margin: -8,
    padding: 10,
    fontWeight: 'bold',
  },
  calories: {
    color: '#000',
    fontSize: 18,
    fontWeight: '500',

  },
})

export default MealItem;