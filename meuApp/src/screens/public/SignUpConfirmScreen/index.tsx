import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SignUpConfirmScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Informe o SMS recebido no seu celular.</Text>
    </View>
  );
};

export default SignUpConfirmScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
});
