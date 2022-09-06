export interface IToggleInputConfig {
  type: 'toggle';
  name: string;
  label: string;
  value: string | null;
  options: string[];
  dependents?: Record<string, IFormInputConfig>;
  inputNotes?: Record<string, Record<string, string>>;
}

export interface IPhotoInputConfig {
  type: 'photo';
  name: string;
  values: string[];
  label: string;
  min?: number;
  max?: number;
}

export type IFormInputConfig = IToggleInputConfig | IPhotoInputConfig;

export interface IFormSection {
  name: string;
  questions: IFormInputConfig[];
}

interface ISections {
  [section: string]: IFormSection;
}

type FormStatus = 'COMPLETE' | 'IN_PROGRESS' | 'NEW';

export interface IForm {
  name: string;
  status: FormStatus;
  sections: ISections;
}
