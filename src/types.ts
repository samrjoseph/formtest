export interface IToggleInputConfig {
  type: 'toggle';
  name: string;
  label: string;
  selected: string | null;
  options: string[];
  dependents: Record<string, Record<string, FormInputConfig>>;
  inputNotes: Record<string, Record<string, string>>;
}

export interface IPhotoInputConfig {
  type: 'photo';
  name: string;
  label: string;
  min?: number;
  max?: number;
}

export type IFormInputConfig = IToggleInputConfig | IPhotoInputConfig;
