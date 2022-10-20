// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';

export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={Home} />
//         <Stack.Screen name="Descricao" component={Descricao}/>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
  const [fotoPizza, setFotoP] = useState("");
  const [nomePizza, setNome] = useState("");
  const [descPizza, setDesc] = useState("");
  const [lida, setLida] = useState("");
 
const salvar = async () => {
  try {
    let data = {
    //   "img":fotoPizza,
      "nome":nomePizza,
      "desc":descPizza
      }
      const jsonValue = JSON.stringify(data)
      await AsyncStorage.setItem("dados", jsonValue);
    }catch(err) {
      console.error(err)
    }
  }

  const ler = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('dados')
      var infos = jsonValue != null ? JSON.parse(jsonValue) : null;
      setLida(
        <View>
          <Text>{infos.nomePizza}</Text>
          <Text>{infos.desc}</Text>
        </View>
      )
    }catch(err) {
      console.error(err)
    }
  }

  return(
    <View style={styles.container}>
      <Text>Digite:</Text>
      <TextInput style={styles.input} placeholder="Nome" value={nomePizza} onChangeText={(val) => { setNome(val) }}/>
      <TextInput style={styles.input} placeholder="Desc" value={descPizza} onChangeText={(val) => { setDesc(val) }}/>
      <TouchableOpacity style={styles.btn} onPress={() =>{salvar() }}><Text> SALVAR </Text></TouchableOpacity>
      <Button style={styles.btn} title="Ler" onPress={() =>{ler() }} />
        <Text>{lida}</Text>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
