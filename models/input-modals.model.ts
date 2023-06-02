export interface ItemInputModalsModel {
  headerInput: string;
  value: string;
  changeValue: (text: string) => void;
  placeholder: string;
  secureTextEntry: boolean;
}
export interface InputModalsModel {
  item: ItemInputModalsModel;
}

export interface ModalGenericModel {
  inputModals: InputModalsModel;
}
