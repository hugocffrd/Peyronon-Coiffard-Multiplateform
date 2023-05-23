export interface ItemInputModalsModel {
  headerInput: string;
  value: string;
  changeValue: (text: string) => void;
  placeholder: string;
}
export interface InputModalsModel {
  item: ItemInputModalsModel;
}

export interface ModalGenericModel {
  inputModals: InputModalsModel;
}
