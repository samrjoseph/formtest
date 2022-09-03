import React from 'react';
import {IFormInputConfig} from '../types';
import ToggleInput from './ToggleInput';

interface IFormInputProps {
  config: IFormInputConfig;
}

const FormInput = ({config}: IFormInputProps) => {
  switch (config.type) {
    case 'toggle': {
      return <ToggleInput config={config} />;
    }
    default: {
      return null;
    }
  }
};

export default FormInput;
