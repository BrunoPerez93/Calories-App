import { Input, Text } from "@rneui/themed";
import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import { FormItemType } from "../../types";



const FormItem: FC<FormItemType> = ({ placeholder, text }) => {
  return (
    <View style={styles.formItem}>
      <View style={styles.inputContainer}>
        <Input
          placeholder={placeholder}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  formItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputContainer: {
    flex: 2,
  },
  textContainer: {
    flex: 1,
  },
  text: {
    fontWeight: '500',
  },
});

export default FormItem;