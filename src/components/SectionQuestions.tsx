import {useFormikContext} from 'formik';
import React from 'react';
import {IForm} from '../newTypes';

import FormInput from './FormInput';

const SectionQuestions = () => {
  const {values} = useFormikContext<IForm>();
  return (
    <>
      {values.sections[0].questions.map((question, index) => {
        return <FormInput config={question} key={index} />;
      })}
    </>
  );
};

export default SectionQuestions;
