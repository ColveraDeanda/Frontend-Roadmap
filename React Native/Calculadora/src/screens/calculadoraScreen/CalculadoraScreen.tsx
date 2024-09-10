import React from 'react';
import { Text, View } from 'react-native';
import StyledButton from '../../components/StyledButton';
import { styles } from '../../theme/appTheme';
import { useCalculadora } from '../../hooks/useCalculadora';

const CalculadoraScreen = () => {
  /**
   * * Ya que el código era muy amplio en la CalculadoraScreen, se realizó un custom Hook para dividirlo en otro
   * * archivo.
   */

  const {
    lastNumber,
    number,
    clean,
    setNegativeOrPositiveNumber,
    deleteLastNumber,
    btnDividir,
    addNumberOrOperator,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calc,
  } = useCalculadora();

  return (
    <View style={styles.calculadoraContainer}>
      {
        // !Renderizado condicionado Ejemplo
        lastNumber !== '0' && (
          <Text style={styles.smallResult}>{lastNumber}</Text>
        )
      }
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>

      {/* //* Buttons Row */}
      <View style={styles.row}>
        <StyledButton text="C" color="#9B9B9B" action={clean} />
        <StyledButton
          text="+/-"
          color="#9B9B9B"
          action={setNegativeOrPositiveNumber}
        />
        <StyledButton text="del" color="#9B9B9B" action={deleteLastNumber} />
        <StyledButton text="/" color="#FF9427" action={btnDividir} />
      </View>

      {/* //* Buttons Row */}
      <View style={styles.row}>
        <StyledButton text="7" action={addNumberOrOperator} />
        <StyledButton text="8" action={addNumberOrOperator} />
        <StyledButton text="9" action={addNumberOrOperator} />
        <StyledButton text="x" color="#FF9427" action={btnMultiplicar} />
      </View>

      {/* //* Buttons Row */}
      <View style={styles.row}>
        <StyledButton text="4" action={addNumberOrOperator} />
        <StyledButton text="5" action={addNumberOrOperator} />
        <StyledButton text="6" action={addNumberOrOperator} />
        <StyledButton text="-" color="#FF9427" action={btnRestar} />
      </View>

      {/* //* Buttons Row */}
      <View style={styles.row}>
        <StyledButton text="1" action={addNumberOrOperator} />
        <StyledButton text="2" action={addNumberOrOperator} />
        <StyledButton text="3" action={addNumberOrOperator} />
        <StyledButton text="+" color="#FF9427" action={btnSumar} />
      </View>

      {/* //* Buttons Row */}
      <View style={styles.row}>
        <StyledButton text="0" action={addNumberOrOperator} wider />
        <StyledButton text="." action={addNumberOrOperator} />
        <StyledButton text="=" color="#FF9427" action={calc} />
      </View>
    </View>
  );
};

export default CalculadoraScreen;
