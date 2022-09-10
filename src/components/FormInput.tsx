import React from 'react';
import {IFormInputConfig} from '../newTypes';
import PhotoInput from './PhotoInput';
import ToggleInput from './ToggleInput';

interface IFormInputProps {
  config: IFormInputConfig;
}

const FormInput = ({config}: IFormInputProps) => {
  switch (config.type) {
    case 'toggle': {
      return <ToggleInput config={config} />;
    }
    case 'photo': {
      return <PhotoInput config={config} />;
    }
    default: {
      return null;
    }
  }
};

export default FormInput;
