import React from 'react';
import {IFormInputConfig} from '../types';

import FormInput from './FormInput';

interface SectionQuestionsProps {
  questions: IFormInputConfig[];
}

const SectionQuestions = ({questions}: SectionQuestionsProps) => {
  return (
    <>
      {questions.map((question, index) => {
        return <FormInput config={question} key={index} />;
      })}
    </>
  );
};

export default SectionQuestions;
