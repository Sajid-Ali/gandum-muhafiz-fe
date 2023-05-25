import React from 'react';
import {TextInput, View, Text, TextStyle, ViewStyle} from 'react-native';

interface MyTextInputProps {
  meta: any;
  name: any;
  input: any;
  value: string;
  editable: boolean;
  maxLength?: number;
  placeholder?: string;
  onChangeText?: (text: string) => void;
  keyboardType?: string;
  blurOnSubmit?: boolean;
  returnKeyType?: string;
  errorTextColor?: string;
  onSubmitEditing?: () => void;
  secureTextEntry?: boolean;
  customInputStyle?: TextStyle;
  selectTextOnFocus?: boolean;
  placeholderTextColor?: string;
  customContainerStyle?: ViewStyle;
}

export default function MyTextInput(props: MyTextInputProps) {
  const {
    meta,
    name,
    input,
    value,
    editable,
    maxLength,
    placeholder,
    onChangeText,
    keyboardType,
    blurOnSubmit,
    returnKeyType,
    errorTextColor,
    onSubmitEditing,
    secureTextEntry,
    customInputStyle,
    selectTextOnFocus,
    placeholderTextColor,
    customContainerStyle,
  } = props;

  const renderErrors = (metaData: any, errorTextColour?: string) => {
    const {errorTextStyle} = styles;
    if (meta.touched && meta.error) {
      return (
        <Text
          style={[
            errorTextStyle,
            {color: errorTextColour ? errorTextColor : '#fff'},
          ]}>
          {metaData.error}
        </Text>
      );
    }
  };

  return (
    <View style={{}}>
      <View style={[styles.containerStyle, customContainerStyle]}>
        <TextInput
          placeholderTextColor={
            placeholderTextColor ? placeholderTextColor : '#000'
          }
          style={[styles.inputStyle, customInputStyle]}
          selectTextOnFocus={selectTextOnFocus}
          underlineColorAndroid={'transparent'}
          onSubmitEditing={onSubmitEditing}
          secureTextEntry={secureTextEntry}
          returnKeyType={returnKeyType}
          keyboardType={keyboardType}
          blurOnSubmit={blurOnSubmit}
          onChangeText={onChangeText}
          placeholder={placeholder}
          maxLength={maxLength}
          editable={editable}
          value={value}
          name={name}
          {...input}
        />
        <View style={styles.errorContainerStyle}>
          {renderErrors(meta, errorTextColor)}
        </View>
      </View>
    </View>
  );
}

const styles = {
  containerStyle: {
    paddingVertical: 0,
    paddingHorizontal: 5,
    marginBottom: 18,
    height: 50,
    borderRadius: 0,
  },
  inputStyle: {
    fontSize: 14,
    paddingHorizontal: 15,
    flex: 1,
    position: 'relative',
    top: 0,
    textAlign: 'left',
    color: '#edebed',
  },

  errorContainerStyle: {
    // flex: 1,
  },
  errorTextStyle: {
    position: 'absolute',
    top: 0,
    right: 20,
    textAlign: 'right',
    color: '#fff',
    fontSize: 12,
    fontWeight: '400',
  },
  imageStyle: {
    top: 14,
    marginLeft: 5,
  },
};
