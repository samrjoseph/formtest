import {IForm} from './types';

export const formConfig: IForm = {
  name: 'precon-walk-v1',
  sections: {
    utilities: {
      name: 'utilities',
      questions: [
        {
          type: 'toggle',
          name: 'sections.utilities.questions[0]',
          value: null,
          label: 'Is the water on?',
          options: ['YES', 'NO'],
          dependents: {
            YES: {
              type: 'photo',
              name: 'sections.utilities.questions[0].YES',
              values: [],
              label: 'Upload photos of the water meter and the water running',
              min: 2,
            },
          },
          // inputNotes: Record<string, Record<string, string>>;
        },
      ],
    },
  },
};
