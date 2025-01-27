import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import React from 'react';

type CheckboxProps = {
  value: boolean;
  onValueChange: (newValue: boolean) => void;
};

const Checkbox: React.FC<CheckboxProps> = ({value, onValueChange}) => {
  return (
    <TouchableOpacity
      style={[styles.checkbox, value && styles.checked]}
      onPress={() => onValueChange(!value)}>
      {value && <Text style={styles.checkmark}>✓</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#007BFF',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  checked: {
    backgroundColor: '#007BFF',
  },
  checkmark: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Checkbox;
