import {useField, useFormikContext} from 'formik';
import React, {useCallback, useMemo} from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import {IToggleInputConfig} from '../types';

interface IToggleInputProps {
  config: IToggleInputConfig;
}

interface IButton {
  name: string;
  option: string;
}

const Button = ({name, option}: IButton) => {
  const {setFieldValue} = useFormikContext();
  const [field] = useField(name);

  const onPress = useCallback(
    () => setFieldValue(name, option),
    [name, setFieldValue, option],
  );

  const [bttnStyle, bttnTxtStyle] = useMemo(() => {
    if (field.value === option) {
      return [
        {...styles.button, ...styles.selected},
        {...styles.bttnTxt, ...styles.selectedBttnTxt},
      ];
    }
    return [{...styles.button, ...styles.unselected}, styles.bttnTxt];
  }, [field.value, option]);

  return (
    <Pressable onPress={onPress} style={bttnStyle}>
      <Text style={bttnTxtStyle}>{option}</Text>
    </Pressable>
  );
};

const ToggleInput = ({config}: IToggleInputProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.labelTxt}>{config.label}</Text>
      <View style={styles.bttnContainer}>
        {config.options.map(option => (
          <Button option={option} name={config.name} key={option} />
        ))}
      </View>
    </View>
  );
};

export default ToggleInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    marginVertical: 20,
  },
  labelTxt: {
    flex: 1,
  },
  bttnContainer: {
    flexDirection: 'row',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  button: {
    height: 48,
    width: 72,
    justifyContent: 'center',
    alignItems: 'center',
  },
  unselected: {
    backgroundColor: 'rgb(247,249,250)',
  },
  selected: {
    backgroundColor: 'rgb( 50, 62, 78)',
  },
  bttnTxt: {
    fontSize: 16,
  },
  selectedBttnTxt: {
    color: '#fff',
  },
});
