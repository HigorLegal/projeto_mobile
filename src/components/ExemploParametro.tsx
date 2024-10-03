import React from 'react';
import {Text} from 'react-native';
import { styles } from '../styles/styles';

type NomeProps = {
    nome:string;
    sobrenome: string;
}

const NomePersonalizado = (props: NomeProps) => {
  return (
    <Text style={styles.titulo1}>
        {props.nome + ' ' + props.sobrenome}
    </Text>
  )
};

export default NomePersonalizado;