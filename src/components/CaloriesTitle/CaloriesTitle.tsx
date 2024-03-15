import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from '@rneui/themed';
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStacksParams } from "../../types";

const CaloriesTitle = () => {


  const { navigate } = useNavigation<NativeStackNavigationProp<RootStacksParams, 'Home'>>()

  const handleAddCaloriesPress = () => {
    navigate('AddFood')
  }

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.calories}>Calorias</Text>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.buttonContainer}>

          <Button
            radius="lg"
            color='#4ecb71'
            onPress={handleAddCaloriesPress}
            title='+'
            titleStyle={styles.titleButton}
          />

        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 24,
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
  calories: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonContainer: {
    width: 50,
  },
  titleButton: {
    fontSize: 20,
    fontWeight: 'bold'
  }
})


export default CaloriesTitle;