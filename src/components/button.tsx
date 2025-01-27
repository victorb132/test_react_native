import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import React from 'react';
import {TouchableOpacityProps} from 'react-native-gesture-handler';

type ButtonProps = {
  title: string;
  type?: 'primary' | 'secundary';
} & TouchableOpacityProps;

export default function Button({
  type = 'primary',
  title,
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      {...props}
      style={
        type === 'primary' ? styles.buttonPrimary : styles.buttonSecundary
      }>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonPrimary: {
    padding: 16,
    backgroundColor: '#000',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonSecundary: {
    padding: 16,
    backgroundColor: '#ff4d4d',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
