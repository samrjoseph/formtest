export interface IInputNote {
  note: String;
}

export interface IDependent {
  value: String;
  inputs?: IFormInputConfig[];
  notes?: IInputNote[];
}

export interface IToggleInputConfig {
  type: 'toggle';
  name: string;
  label: string;
  value: string | null;
  options: string[];
  dependents?: IDependent[];
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

export interface SectionNoteRequirement {
  name: string;
  value: unknown;
}

export interface SectionNote {
  note: string;
  requirements: SectionNoteRequirement[];
}

export interface IFormSection {
  name: string;
  title: string;
  sectionNotes: SectionNote[];
  questions: IFormInputConfig[];
}

export interface IForm {
  name: string;
  version: number;
  sections: IFormSection[];
}
