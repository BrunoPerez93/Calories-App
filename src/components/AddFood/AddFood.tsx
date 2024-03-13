import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../Header";

const AddFood = () => {
  return (
    <View style={styles.container} >
      <Header />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
  }
})

export default AddFood;