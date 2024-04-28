import SvgIndex from '@svgIndex';
import color from '@theme/color';
import React, {FC, memo} from 'react';
import {
  StyleProp,
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import styles from './searchBar.style';
interface SearchBarProps {
  containerStyle?: StyleProp<ViewStyle> | undefined;
  searchView?: StyleProp<ViewStyle> | undefined;
  label?: string | undefined;
  inputStyle?: StyleProp<TextStyle> | undefined;
  inputValue?: string | undefined;
  setValue?: (value: string) => void | undefined;
  placeholderTextColor?: string;
  onSubmitEditing?: () => void;
  inputProps?: TextInputProps | undefined;
  image?: boolean | undefined;
  crossIcon?: any;
  returnKeyType?: any;
  showAddIcon?: boolean | undefined;
  showFilterIcon?: boolean;
  showFolderIcon?: boolean;
  onPressAddIcon?: () => void;
  onPressFilterIcon?: () => void;
  onPressFolderIcon?: () => void;
  addIconContainerStyle?: ViewStyle;
  filterIconContainerStyle?: ViewStyle;
  folderIconContainerStyle?: ViewStyle;
  searchIcon?: any;
}
const SearchBar: FC<SearchBarProps> = ({
  containerStyle,
  searchView,
  label,
  inputStyle,
  inputValue,
  setValue,
  placeholderTextColor,
  returnKeyType,
  onSubmitEditing,
  inputProps,
  showFilterIcon,
  showAddIcon,
  showFolderIcon,
  onPressAddIcon,
  onPressFilterIcon,
  onPressFolderIcon,
  addIconContainerStyle,
  filterIconContainerStyle,
  folderIconContainerStyle,
  ...props
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={[styles.searchView, searchView]}>
        {props?.searchIcon && (
          <View style={{marginRight: 10}}>
            <props.searchIcon />
          </View>
        )}
        <TextInput
          allowFontScaling={false}
          placeholder={label}
          style={[styles.searchInputStyle, inputStyle]}
          value={inputValue}
          onChangeText={setValue}
          selectionColor={color.secondaryBG}
          placeholderTextColor={placeholderTextColor}
          returnKeyType={returnKeyType}
          onSubmitEditing={onSubmitEditing}
          {...inputProps}
        />
      </View>
      {showFilterIcon && (
        <TouchableOpacity
          activeOpacity={0.7}
          style={[styles.filterView, filterIconContainerStyle]}
          onPress={onPressFilterIcon}>
          <SvgIndex.filter />
        </TouchableOpacity>
      )}
      {showAddIcon && (
        <TouchableOpacity
          activeOpacity={0.7}
          style={[styles.filterView, addIconContainerStyle]}
          onPress={onPressAddIcon}>
          <SvgIndex.plus />
        </TouchableOpacity>
      )}
      {showFolderIcon && (
        <TouchableOpacity
          activeOpacity={0.7}
          style={[styles.folderBtnView, folderIconContainerStyle]}
          onPress={onPressFolderIcon}>
          <SvgIndex.folder />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default memo(SearchBar);
SearchBar.defaultProps = {
  showFilterIcon: false,
};
