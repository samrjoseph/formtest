import {StyleSheet, Text, View} from 'react-native';
import React, {useMemo} from 'react';
import {useFormikContext} from 'formik';
import {SectionNote} from '../types';

interface SectionNoteProps {
  sectionNote: SectionNote;
}

const Note = ({sectionNote}: SectionNoteProps) => {
  const {getFieldMeta} = useFormikContext();

  const isVisible = useMemo(() => {
    const {requirements} = sectionNote;
    const reqsLength = requirements.length;
    let res = false;
    for (let i = 0; i < reqsLength; i++) {
      const {value} = getFieldMeta(`${requirements[i].name}.value`);
      if (requirements[i].value === value) {
        res = true;
        break;
      }
    }
    return res;
  }, [getFieldMeta, sectionNote]);

  return (
    <>
      {isVisible && (
        <View style={styles.note}>
          <Text style={styles.noteText}>{sectionNote.note}</Text>
        </View>
      )}
    </>
  );
};

interface SectionNotesProps {
  sectionNotes: SectionNote[];
}

const SectionNotes = ({sectionNotes}: SectionNotesProps) => {
  return (
    <>
      {sectionNotes.map(sectionNote => (
        <Note sectionNote={sectionNote} key={sectionNote.note} />
      ))}
    </>
  );
};

export default SectionNotes;

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
