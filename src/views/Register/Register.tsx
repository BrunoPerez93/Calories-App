import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, Text } from "@rneui/themed";
import React, { useState } from "react";

import { View, TextInput, StyleSheet } from 'react-native';
import { RootStacksParams } from "../../types";

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const { canGoBack, goBack } = useNavigation();

  const { navigate } = useNavigation<NativeStackNavigationProp<RootStacksParams, 'Register'>>()

  const handleRegister = () => {
    navigate('Login')
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Registrar</Text>
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
      <TextInput
        placeholder="Repite contraseña"
        value={repeatPassword}
        onChangeText={setRepeatPassword}
        secureTextEntry
        style={styles.input}
      />

      <Button
        title="Register"
        onPress={handleRegister}
        radius='lg'
      />
      <View style={styles.returnButton}>
        {canGoBack() ? (
          <Button
            type="clear"
            onPress={() => goBack()}
          >
            {'Return Login'}
          </Button>
        ) : undefined}
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
  returnButton: {
    marginTop: 8,
  },
});

export default Register;