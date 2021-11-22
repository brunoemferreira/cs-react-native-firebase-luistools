import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TopicEditorScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 15 }}>Tópico Editor</Text>
    </View>
  );
};

export default TopicEditorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
});
