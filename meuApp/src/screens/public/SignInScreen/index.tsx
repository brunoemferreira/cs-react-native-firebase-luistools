import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SignInScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 15 }}>Olá, Berm vindo ao MeuApp.</Text>
      <Button title="Login" onPress={() => { }} />
      <Button title="Cadastro" onPress={() => { }} />
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
});
