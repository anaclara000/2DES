import {Text, View, Button, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style'

export default function Home({ navigation }) {
  const itens = [
    {
      "id":1,
      "nome":"Pizza Mussarela",
      "descricao":"Pizza boa"
    },
    {
      "Id":2,
      "nome":"Pizza Calabresa",
      "descricao":"Pizza muito boa"
    },
    {
      "Id":3,
      "nome":"Pizza Bacon",
      "descricao":"Pizza muito boa"
    },
  ]

  var carrao = [];
  function salvaTudao(e) {
    carrao.push(e)
  }

  const salvar = async () => {
    try{
      const jsonValue = JSON.stringify(carrao)
      await AsyncStorage.setItem("euDecido", jsonValue);
      console.log(jsonValue)

    }catch(err){
      console.log(err);
    }
  }

  const ler = async () => {
    try{
      const jsonValue = await AsyncStorage.getItem('euDecido')
      var infos = jsonValue != null ? JSON.parse(jsonValue) : null;
      console.log(infos);
    }catch(err){
      console.log(err);
    }
  
  }

  return (
    <View>
      {
        itens.map((pizzas, index) => {
          return(
            <View style={styles.container}>
              <Text>{pizzas.nome}</Text>
              <Text>{pizzas.descricao}</Text>
              <TouchableOpacity style={styles.btn} onPress={() =>{salvaTudao(pizzas) }}><Text> + </Text></TouchableOpacity>
            </View>
          )
        }) 
      }
        <Button title="proxima pagina" onPress={() =>{navigation.navigate('Carrinho', ler())}}></Button>
        <Button title="Carrinho" onPress={() => {salvar()}}/>
        <Button title="teste" onPress={() => {ler()}}/>
    </View>
  );
}




