import {useField} from 'formik';
import React from 'react';
import {Text} from 'react-native';
import {IToggleInputConfig} from '../types';

interface IDependentFormInputProps {
  config: IToggleInputConfig;
}

const DependentFormInput = ({config}: IDependentFormInputProps) => {
  const [field] = useField(`${config.name}.value`);
  if (config.dependents && field.value && config.dependents[field.value]) {
    return <Text>poop</Text>;
  }
  return null;
};

export default DependentFormInput;
