import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../styles/styles';

interface Props {
  input: string;
  resultado: string;
}

export default function Display({ input, resultado }: Props) {
  return (
    <View style={styles.resultadoContainer}>
      <Text style={styles.inputText}>{input}</Text>
      <Text style={styles.resultadoText}>{resultado}</Text>
    </View>
  );
}
