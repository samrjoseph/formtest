import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {IInputNote} from '../newTypes';

interface SectionNoteProps {
  inputNote: IInputNote;
}

const InputNote = ({inputNote}: SectionNoteProps) => {
  return (
    <View style={styles.note}>
      <Text style={styles.noteText}>{inputNote.note}</Text>
    </View>
  );
};

export default InputNote;

const styles = StyleSheet.create({
  note: {
    width: '90%',
    height: 80,
    borderRadius: 4,
    backgroundColor: '#f3edff',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#6f41d8',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  noteText: {
    fontSize: 10,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 15,
    letterSpacing: 0,
    textAlign: 'left',
    color: 'rgba(0, 0, 0, 0.87)',
  },
});
