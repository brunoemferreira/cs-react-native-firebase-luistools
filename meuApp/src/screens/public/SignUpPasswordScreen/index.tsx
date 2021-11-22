import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SignUpPasswordScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 15 }}>Olá, Berm vindo ao MeuApp.</Text>
      <Button title="Login" onPress={() => { }} />
      <Button title="Cadastro" onPress={() => { }} />
    </View>
  );
};

export default SignUpPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
});
