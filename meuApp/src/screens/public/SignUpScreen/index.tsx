import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SignUpScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Formulario de Cadastro.</Text>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
});
