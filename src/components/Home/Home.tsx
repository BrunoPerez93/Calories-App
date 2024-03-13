import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../Header";
import CaloriesTitle from "../CaloriesTitle";

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <CaloriesTitle />
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