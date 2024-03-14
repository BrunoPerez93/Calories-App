import { Button, Text } from "@rneui/themed";
import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import { Meal } from "../../types";

const MealItem: FC<Meal> = ({ calories, portion, name }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.portion}>{portion}</Text>
      </View>
      <View style={styles.rightContainer}>
        <Button
          title='+'
          type="clear"
          titleStyle={styles.buttonTitle}
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
  },
  calories: {
    color: '#000',
    fontSize: 18,
    fontWeight: '500',

  },
})

export default MealItem;