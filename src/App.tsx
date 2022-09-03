import React from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import {Formik} from 'formik';

import ToggleInput from './components/ToggleInput';
import Button from './components/Button';

const App = () => {
  return (
    <Formik
      initialValues={{sections: [{isWaterOn: null}]}}
      onSubmit={values => Alert.alert('values', JSON.stringify(values))}>
      <View style={styles.container}>
        <ToggleInput
          name="sections[0].isWaterOn"
          label="Is the water on?"
          options={['YES', 'NO']}
        />
        <Button />
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
