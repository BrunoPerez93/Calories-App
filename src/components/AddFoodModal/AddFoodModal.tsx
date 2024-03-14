import { Button, Input, Text } from "@rneui/themed";
import React, { FC, useEffect, useState } from "react";
import { Modal, StyleSheet, View } from "react-native";
import FormItem from "./FormItem";

type AddFoodModalProps = {
  onClose: () => void;
  visible: boolean;
}

const AddFoodModal: FC<AddFoodModalProps> = ({ onClose, visible }) => {

  const [calories, setCalories] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [portion, setPortion] = useState<string>('');

  useEffect(() => {
    setCalories('')
    setName('')
    setPortion('')
  }, [visible])

  const handleAddFood = () => {


    onClose();
  }

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
            text="CAL"
            value={calories}
            onChangeText={(text: string) => setCalories(text)}
          />
          <FormItem
            placeholder="Nombre"
            text="Nombre"
            value={name}
            onChangeText={(text: string) => setName(text)}
          />
          <FormItem
            placeholder="Porcion"
            text="Porcion"
            value={portion}
            onChangeText={(text: string) => setPortion(text)}
          />
          <View style={styles.buttonContainer}>
            <Button
              title='Agregar'
              radius='lg'
              color='#6FF085'
              onPress={handleAddFood}
              disabled={calories.trim() === '' || portion.trim() === '' || name.trim() === ''}
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