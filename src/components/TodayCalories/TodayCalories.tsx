import { Text } from "@rneui/themed";
import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import { TodayCaloriesProps } from "../../types";

const TodayCalories: FC<TodayCaloriesProps> = ({
  total = 2000,
  consume = 0,
  remaining = 0,
  percentage = 0,
}) => {

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <CircularProgress
          value={percentage}
          valueSuffix="%"
        />
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.today}>Hoy</Text>
        <View style={styles.rightItem}>
          <Text style={styles.rightItemText}>Total</Text>
          <Text style={styles.rightItemValue}>{total}</Text>
        </View>
        <View style={styles.rightItem}>
          <Text style={styles.rightItemText}>Consumidas</Text>
          <Text style={styles.rightItemValue}>{consume}</Text>
        </View>
        <View style={styles.rightItem}>
          <Text style={styles.rightItemText}>Restantes</Text>
          <Text style={styles.rightItemValue}>{remaining}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',

  },
  leftContainer: {
    flex: 1,
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  rightItem: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  today: {
    marginBottom: 14,
    fontSize: 20,
    fontWeight: 'bold'
  },
  rightItemText: {
    flex: 1,
    fontSize: 15,
    fontWeight: '500',
  },
  rightItemValue: {
    flex: 1,
    fontSize: 15,
    textAlign: 'right',
    marginRight: 12,
    fontWeight: '500',
  },
})

export default TodayCalories;