import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {useFormikContext} from 'formik';

const Button = () => {
  const {handleSubmit} = useFormikContext();

  return (
    <Pressable onPress={handleSubmit} style={styles.bttn}>
      <Text style={styles.txt}>SUBMIT</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  bttn: {
    backgroundColor: 'rgb(44, 86, 151)',
    width: '90%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    borderRadius: 5,
  },
  txt: {
    color: '#fff',
    fontWeight: '500',
  },
});
