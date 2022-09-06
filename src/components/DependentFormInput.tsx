import {useField} from 'formik';
import React from 'react';
import {IToggleInputConfig} from '../types';
import FormInput from './FormInput';

interface IDependentFormInputProps {
  config: IToggleInputConfig;
}

const DependentFormInput = ({config}: IDependentFormInputProps) => {
  const [field] = useField(`${config.name}.value`);
  if (config.dependents && field.value && config.dependents[field.value]) {
    return <FormInput config={config.dependents[field.value]} />;
  }
  return null;
};

export default DependentFormInput;
