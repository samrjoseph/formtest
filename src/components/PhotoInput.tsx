import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IPhotoInputConfig} from '../newTypes';

interface PhotoInputProps {
  config: IPhotoInputConfig;
}

const PhotoInput = ({config}: PhotoInputProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.left} />
      <View style={styles.right}>
        <Text style={styles.text}>{config.label}</Text>
      </View>
    </View>
  );
};

export default PhotoInput;

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
  left: {
    width: 80,
    height: 80,
    borderRadius: 4,
    backgroundColor: '#ffffff',
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: '#a2afc0',
  },

  right: {
    height: 80,
    borderRadius: 4,
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#e5e9f2',
    flex: 1,
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 10,
  },
});
