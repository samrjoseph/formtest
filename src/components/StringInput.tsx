import {StyleSheet, TextInput, TextInputProps} from 'react-native';
import React from 'react';

const StringInput = (props: Omit<TextInputProps, 'style'>) => {
  return <TextInput style={styles.input} {...props} />;
};

export default StringInput;

const styles = StyleSheet.create({
  input: {
    width: '90%',
    height: 60,
    borderWidth: 1,
    paddingHorizontal: 10,
  },
});
