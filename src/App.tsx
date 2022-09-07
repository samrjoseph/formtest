import React from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import {Formik} from 'formik';

import Button from './components/Button';
import {formConfig} from './form';
import SectionNotes from './components/SectionNotes';
import SectionQuestions from './components/SectionQuestions';

const App = () => {
  return (
    <Formik
      initialValues={formConfig}
      onSubmit={values => Alert.alert('values', JSON.stringify(values))}>
      <View style={styles.container}>
        <SectionQuestions questions={formConfig.sections.utilities.questions} />
        <SectionNotes
          sectionNotes={formConfig.sections.utilities.sectionNotes}
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
