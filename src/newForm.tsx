import {IForm} from './newTypes';

export const formConfig: IForm = {
  name: 'pre-con',
  version: 1,
  sections: [
    {
      name: 'access-info',
      title: 'Property Access Information',
      sectionNotes: [],
      questions: [
        {
          type: 'toggle',
          name: 'sections[0].questions[0]',
          label: 'Is the water turned on?',
          value: null,
          options: ['YES', 'NO'],
          dependents: [
            {
              value: 'YES',
              inputs: [
                {
                  type: 'photo',
                  name: 'sections[0].questions[0].dependents[0]',
                  values: [],
                  label: 'poop',
                },
              ],
            },
            {
              value: 'NO',
              inputs: [],
              notes: [{note: 'meowdie'}],
            },
          ],
        },
        {
          type: 'toggle',
          name: 'sections[0].questions[1]',
          label: 'Is the gas turned on?',
          value: null,
          options: ['YES', 'NO'],
        },
      ],
    },
  ],
};
