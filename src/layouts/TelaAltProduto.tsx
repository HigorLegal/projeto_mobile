import React, {useEffect, useState} from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {Produto} from '../types/produto.ts';
import Auth from "@react-native-firebase/auth"
import {AltProdutoprops} from '../navigation/HomeNavigator';
import {styles} from '../styles/stylesCadastrar';

//criaçao das variaveis state para usar na pagina

const TelaAltProduto = (props: AltProdutoprops) => {
    const [nome,setnome] = useState('');
    const [codigoBarras,setcodigoBarras] = useState('');
    const [preco,setpreco] = useState('');

    const [id] = useState(props.route.params.id);

function verificarcampos():boolean{

return true;
}

  

 


  function tratarErros(error: string){

console.log(error);
if(error.includes("[auth/invalid-email]")){

Alert.alert("Email Invalido","o email deve conter '@gmail.com'")

}

else if (error.includes("[auth/weak-password]")){

Alert.alert("Senha Fraca","a senha deve ter pelo menos 6 digitos")

}

else if (error.includes('[auth/email-already-in-use]')){

  Alert.alert("Email em Uso","esse email ja esta registrado")

}
else{
Alert.alert("Erro muito errado", error )

}
  }
  
//Carrrega os states com os dados do produto do banco de dados
//Usando o id que recebeu como propriedade ao navegar para essa tela de alteração
async function carregar() {
    const resultado = await firestore()
      .collection('produtos')
      .doc(id)
      .get();

    const produto = {
      id: resultado.id,
      ...resultado.data()
    } as Produto;

    setnome(produto.nome);
    setcodigoBarras(produto.codigoBarras);
    setpreco(produto.preco.toString());
  };
//irá chamar a função de carregar

  useEffect(() => {
    carregar();
  }, []);

  function alterar() {
    if(verificarcampos()){
    let produto = {
      nome: nome,
      codigoBarras: codigoBarras,
      preco:Number.parseFloat(preco)
    } as Produto;

    firestore()
      .collection('produtos')
      .doc(id)
      .update(produto)
      .then(() => {
        Alert.alert("Produto", "Alterado com sucesso")
        props.navigation.goBack();
      })
      .catch((error) => console.log(error));
    }
  }
  return (
    <ImageBackground
      style={styles.tela}
      source={{
        
        uri: 'https://wallpapers.com/images/hd/purple-galaxy-2880-x-1800-background-srvn2y6n8krndfwp.jpg',
      }}>


      <View>
        <Text style={{ justifyContent: 'center',
                marginBottom:"10%",
                fontSize: 50,
                fontWeight: 'bold',
                color: 'white'}}>Alterar Produto</Text>
      </View>
      <Image 
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/181/181540.png',
            }}
            style={{ backgroundColor:"white",
              borderRadius: 100,
              width: 150,
              height: 150}}
          />

      <Text style={[styles.titulo1,{}]}>nome</Text>
      <TextInput
        style={[styles.caixa_texto]}
        value={nome}
        onChangeText={Text => setnome(Text)}
      />


     
        <Text style={styles.titulo1}>codigo de barras</Text>
        <TextInput
          style={[styles.caixa_texto]}
          value={codigoBarras}
          onChangeText={Text => setcodigoBarras(Text)}
        />
        <Text style={styles.titulo1}>preco</Text>
       
       <TextInput
       maxLength={7}
       value={preco.toString()}

       onChangeText={(text)=> setpreco(text)}

               style={[styles.caixa_texto]}
        />

     



      <View style={{ flexDirection: 'row',
    justifyContent: 'space-between', 
    padding: 0, 
    marginTop:"20%",
   
    gap:50}}>
        <Pressable
          style={state => [
            styles.botoesBaixo,
            state.pressed ? {opacity: 0.5} : null,
          ]}
          onPress={alterar}
       >
          <Text style={styles.botoesECTxt}>salvar</Text>
        </Pressable>


        <Pressable

          style={state => [
            styles.botoesBaixo,
            state.pressed ? {opacity: 0.5} : null,
          ]}
          onPress={props.navigation.goBack}>
          <Text style={styles.botoesECTxt}>cancelar</Text>
        </Pressable>

      </View>

    </ImageBackground>
  );
};
export default TelaAltProduto;


