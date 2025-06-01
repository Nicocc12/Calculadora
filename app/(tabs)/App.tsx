import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import ButtonCalc from '../../components/ButtonCalc';
import Display from '../../components/Display';
import { buttons } from '../../constants/buttons';
import { styles } from '../../styles/styles';

export default function App() {
  const [input, setInput] = useState('');
  const [resultado, setResultado] = useState('');

  const handlePress = (value: string) => {
    if (value === 'AC') {
      setInput('');
      setResultado('');
      return;
    }

    if (value === '=') {
      try {
        const reemplazada = input.replace(/×/g, '*').replace(/÷/g, '/');
        setResultado(eval(reemplazada).toString());
      } catch {
        setResultado('Error');
      }
      return;
    }

    setInput((prev) => prev + value);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
      <View style={styles.container}>
        <Display input={input} resultado={resultado} />

        <View style={styles.teclado}>
          {buttons.map((fila, rowIndex) => (
            <View key={rowIndex} style={styles.fila}>
              {fila.map((valor) => (
                <ButtonCalc key={valor} valor={valor} onPress={handlePress} />
              ))}
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}
