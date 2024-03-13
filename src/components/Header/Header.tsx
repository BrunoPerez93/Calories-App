import { useNavigation } from "@react-navigation/native";
import { Button, Icon } from "@rneui/themed";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";


const staticInfo = {
  name: 'Bruno Perez',
  uri: "https://img.freepik.com/free-photo/view-3d-cool-modern-bird_23-2150946451.jpg?t=st=1710354997~exp=1710358597~hmac=a40ad526e8e8aaad1d684ac7adbf41876f9f0403b8e33c501ec9e981824568dc&w=826"
}

const Header = () => {

  const { canGoBack, goBack } = useNavigation();

  return (
    <View style={styles.container}>

      {canGoBack() ? (
        <View style={styles.arrowContainer}>
          <Button
            type="clear"
            onPress={() => goBack()}
          >
            <Icon name="arrow" size={24} />
          </Button>
        </View>
      ) : undefined}
      <View style={styles.leftContainer}>
        <Text style={styles.name}>{`Hello ${staticInfo.name}`}</Text>
        <Text style={styles.subtitle}>Welcome back to your goal</Text>
      </View>

      <View style={styles.rigthContainer}>
        <Image style={styles.profileImg} source={{ uri: staticInfo.uri }} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  leftContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  rigthContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  subtitle: {
    fontSize: 12,
    color: '#808080',
  },
  profileImg: {
    width: 40,
    height: 40,
    borderRadius: 24,
  },
  arrowContainer: {

  }
})

export default Header;