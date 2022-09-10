import React from 'react';
import {Alert} from 'react-native';
import {Formik} from 'formik';

import {formConfig} from './newForm';
import Section from './components/Section';

const App = () => {
  return (
    <Formik
      initialValues={formConfig}
      onSubmit={values => Alert.alert('values', JSON.stringify(values))}>
      <Section />
    </Formik>
  );
};

export default App;
