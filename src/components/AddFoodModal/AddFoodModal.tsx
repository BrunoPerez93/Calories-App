import { Button, Input, Text } from "@rneui/themed";
import React, { FC } from "react";
import { Modal, StyleSheet, View } from "react-native";
import FormItem from "./FormItem";

type AddFoodModalProps = {
  onClose: () => void;
  visible: boolean;
}

const AddFoodModal: FC<AddFoodModalProps> = ({ onClose, visible }) => {
  return (
    <Modal
      visible={visible}
      onRequestClose={onClose}
      transparent
      animationType="slide"
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.closeContainer}>
            <Button
              title='X'
              onPress={onClose}
              type="clear"
              titleStyle={styles.button}
            />
          </View>
          <FormItem
            placeholder="Calorias"
            text="KCAL"
          />
          <FormItem
            placeholder="Nombre"
            text="Nomber"
          />
          <FormItem
            placeholder="Porcion"
            text="Porcion"
          />
          <View style={styles.buttonContainer}>
            <Button
              title='Agregar'
              radius='lg'
              color='#6FF085'
            />
          </View>
        </View>
      </View>
    </Modal>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  content: {
    width: '75%',
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeContainer: {
    alignItems: 'flex-end',
  },
  button: {
    color: '#000',
    fontSize: 20,
  },
  buttonContainer: {
    alignItems: 'flex-end',
  },
});

export default AddFoodModal;