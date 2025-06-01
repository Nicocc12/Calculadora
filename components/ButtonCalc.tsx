import React from 'react';
import { Pressable, Text } from 'react-native';
import { styles } from '../styles/styles';

interface Props {
  valor: string;
  onPress: (val: string) => void;
}

export default function ButtonCalc({ valor, onPress }: Props) {
  const esOperacion = ['+', '-', '×', '÷', '='].includes(valor);
  const esEspecial = ['AC', '+/-', '%'].includes(valor);
  const estiloBoton =
    valor === '0' ? styles.botonGrande : styles.boton;

  return (
    <Pressable
      onPress={() => onPress(valor)}
      style={({ pressed }) => [
        estiloBoton,
        esOperacion
          ? styles.operacion
          : esEspecial
          ? styles.especial
          : styles.numero,
        pressed && styles.botonPresionado,
      ]}
    >
      <Text style={styles.botonTexto}>{valor}</Text>
    </Pressable>
  );
}
