import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, Text } from "@rneui/themed";
import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { RootStacksParams } from "../../types";

// type NavigationProps = {
//   navigation: string;
// }

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { navigate } = useNavigation<NativeStackNavigationProp<RootStacksParams, 'Login'>>()

  const handleLogin = () => {
   navigate('Home')
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        placeholder="Usuario"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Login"
          onPress={handleLogin}
          radius="lg"

        />
      </View>
      <View>
        <Button
          title="Register"
          radius="lg"
          onPress={() => navigate('Register')}

        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    width: '80%',
    marginBottom: 16,
    borderWidth: 2,
    borderRadius: 15,
    padding: 10,
  },
  buttonContainer: {
    marginBottom: 16,
  }
});

export default Login;