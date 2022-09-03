import React from 'react';
import {StyleSheet, View} from 'react-native';
import ToggleInput from './components/ToggleInput';
import StringInput from './components/StringInput';
import {Formik} from 'formik';

const App = () => {
  return (
    <Formik
      initialValues={{water: null}}
      onSubmit={values => console.log(values)}>
      <View style={styles.container}>
        <StringInput />
        <ToggleInput
          name="water"
          label="Is the water on?"
          options={['YES', 'NO']}
        />
      </View>
    </Formik>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
