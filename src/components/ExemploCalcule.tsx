import React, { useState } from 'react';
import {View, Text, Image, ScrollView, TextInput, Pressable} from 'react-native';
import { styles } from '../styles/stylesLogin';

    
    
    const ExemploCalculo = ()=>{
const [valor1,setvalor1]=useState('')
const [valor2,setvalor2]=useState('')

    function Somar (){
        if(valor1 =='' || valor2 == ''){
            return 0;
        }
    return Number.parseInt(valor1)+Number.parseInt(valor2);
    }

    function Subtrair (){
        if(valor1 =='' || valor2 == ''){
            return 0;
        }
    return Number.parseInt(valor1)-Number.parseInt(valor2);
    }

    function Dividir (){
        if(valor1 =='' || valor2 == ''){
            return 0;
        }
        if(Number.parseInt(valor2) != 0){
    return Number.parseInt(valor1)/Number.parseInt(valor2);
        }
        else{
            return 0;
        }
    }

    function Multiplicar (){ if(valor1 =='' || valor2 == ''){
        return 0;
    }
    return Number.parseInt(valor1)*Number.parseInt(valor2);

    }

  return (
    <>
<View style={{backgroundColor:"#921fd1",borderRadius:10,padding:10}}>
<Text style={styles.titulo1}>primeira nota  </Text>
<TextInput
value={valor1.toString()}
onChangeText={(text)=> setvalor1(text)}
        style={[styles.caixa_texto]}

      />

       
       <Text style={styles.titulo1}>segunda nota  </Text>

      <TextInput
       value={valor2.toString()}
       onChangeText={(text)=> setvalor2(text)}
               style={[styles.caixa_texto]}
      />

    
    </View>

    <View style={{alignItems:"center"}}>

    <Text style={{
        marginBottom:50,
        marginTop:50,
        fontSize: 50,
        fontWeight: 'bold',
        color: 'white'}}>
somar:{Somar()}
    </Text>
    
    <Text style={{
        marginBottom:50,
        fontSize: 50,
        fontWeight: 'bold',
        color: 'white'}}>
subtrair:{Subtrair()}
    </Text>
    
    <Text style={{
        marginBottom:50,
        fontSize: 50,
        fontWeight: 'bold',
        color: 'white'}}>
Dividir:{Dividir()}
    </Text>
    
    <Text style={{
        marginBottom:50,
        fontSize: 50,
        fontWeight: 'bold',
        color: 'white'}}
        >
Multiplicar:{Multiplicar()}
    </Text>
    </View>
    </>
  );
    };
  export default ExemploCalculo;