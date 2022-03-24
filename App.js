import React from 'react';
import {
  SafeAreaView, Text, StyleSheet
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <Text style={styles.textStyle}>Hello</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textStyle:{
    fontWeight: "bold",
    fontSize: 50
  }
});

export default App;