import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  Pressable,
} from 'react-native';
import {styles} from '../styles/stylesPrincipal';



const ExemploAprovacao = () => {
  
    const [nome, setnome] = useState('');
  const [nota1, setnota1] = useState('');
  const [nota2, setnota2] = useState('');
  
  
  function verificarAprovacao() {
    if(nome == '' || nota1 == ''||nota2 ==''){
      return 'preencha os requisitos';
  }else{
    if ((Number.parseInt(nota1) + Number.parseFloat(nota2)) / 2 >= 7.0) {
      return 'resposta : parabens o aluno ' + nome + ' foi aprovado!!';
    } else {
      return 'resposta : infelizmente o aluno ' + nome + ' foi reprovado, melhore';
    }}
  }

  return (
    
    <>
    <View>
        <Text style={styles.titulo1}>nome</Text>
      </View>

      <TextInput
        style={[styles.caixa_texto]}
        onChangeText={(text)=> setnome(text)}
      />

        <Text style={styles.titulo1}>primeira nota</Text>
        
        

 
<TextInput
value={nota1.toString()}
onChangeText={(text)=> setnota1(text)}
        style={[styles.caixa_texto]}

      />

       <Text style={styles.titulo1}>segunda nota  </Text>

      <TextInput
       value={nota2.toString()}
       onChangeText={(text)=> setnota2(text)}
               style={[styles.caixa_texto]}
      />

      <Text style={styles.titulo1}>{verificarAprovacao()}</Text>
    </>
  );
};
export default ExemploAprovacao;
