import React from 'react';
import {StyleSheet, View} from 'react-native';

import Button from './Button';
import SectionQuestions from './SectionQuestions';

const Section = () => {
  return (
    <View style={styles.container}>
      <SectionQuestions />
      <Button />
    </View>
  );
};

export default Section;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
