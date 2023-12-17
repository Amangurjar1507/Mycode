import {ImageStyle, StyleProp, TextStyle, ViewStyle} from 'react-native/types';

export interface CountryCodeModalProp {
  visible: boolean;
  value?: string;
  title?: string;
  closeModal?: () => void;
  openModal?: () => void;
  data?: any;
  openModaopenModal?: () => void;
  itemSelection?: (item?: ItemDataProps) => void;
  mainContainer?: StyleProp<ViewStyle> | undefined;
  textStyle?: StyleProp<TextStyle> | undefined;
  mainViewRow?: StyleProp<ViewStyle> | undefined;
  valueTextStyle?: StyleProp<TextStyle> | undefined;
  mainViewModal?: StyleProp<ViewStyle> | undefined;
  closeImageStyle?: StyleProp<ImageStyle> | undefined;
}

export interface FlatlistProp {
  item?: ItemDataProps;
  index?: number;
}

export interface CategoryProps {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;

  countryDatas?: ItemDataProps[] | any;
  setCountryDatas?: React.Dispatch<React.SetStateAction<ItemDataProps[] | any>>;
  Search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: (text: string) => void;
}

export interface ItemDataProps {
  name: string;
  flag: string;
  code: string;
  dial_code: string;
}
