import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');
const buttonSize = width / 5.5;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'flex-end',
  },
  resultadoContainer: {
    padding: 20,
    alignItems: 'flex-end',
  },
  inputText: {
    color: '#fff',
    fontSize: 40,
  },
  resultadoText: {
    color: '#fff',
    fontSize: 60,
    fontWeight: '200',
  },
  teclado: {
    paddingBottom: 30,
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 8,
  },
  boton: {
    width: buttonSize,
    height: buttonSize,
    borderRadius: buttonSize / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botonGrande: {
    width: buttonSize * 2.2,
    height: buttonSize,
    borderRadius: buttonSize / 2,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 30,
  },
  numero: {
    backgroundColor: '#333',
  },
  especial: {
    backgroundColor: '#a5a5a5',
  },
  operacion: {
    backgroundColor: '#ff9f0a',
  },
  botonTexto: {
    fontSize: 32,
    color: '#fff',
  },
  botonPresionado: {
    opacity: 0.5,
  },
});
