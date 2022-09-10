import {useFormikContext} from 'formik';
import React, {useMemo} from 'react';
import {IDependent, IToggleInputConfig} from '../newTypes';
import FormInput from './FormInput';
import InputNote from './InputNote';

interface IDependentProps {
  config: IToggleInputConfig;
}

const Dependents = ({config}: IDependentProps) => {
  const {getFieldMeta} = useFormikContext();

  const dependents = useMemo(() => {
    let dep: IDependent | null = null;
    if (config.dependents) {
      const {value} = getFieldMeta(`${config.name}.value`);
      for (let i = 0; i < config.dependents.length; i++) {
        const currDep = config.dependents[i];
        if (currDep.value === value) {
          dep = currDep;
          break;
        }
      }
    }
    return dep;
  }, [config.dependents, config.name, getFieldMeta]);

  return (
    <>
      {dependents && dependents.notes
        ? dependents.notes.map((note, index) => (
            <InputNote inputNote={note} key={index} />
          ))
        : null}
      {dependents && dependents.inputs
        ? dependents.inputs.map((input, index) => (
            <FormInput config={input} key={index} />
          ))
        : null}
    </>
  );
};

export default Dependents;
