// import { StatusBar } from 'expo-status-bar';
// import {useState} from 'react';
// import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
// import { Button } from 'react-native-web';

// export default function Home({navigation}){
//   const [fotoPizza, setFotoP] = useState("");
//   const [nomePizza, setNome] = useState("");
//   const [descPizza, setDesc] = useState("");
//   const [lida, setLida] = useState("");
  
// // let pizzasCad = [
// //   {
// //     "img":"https://t2.rg.ltmcdn.com/pt/posts/9/8/3/pizza_calabresa_e_mussarela_4389_600.jpg",
// //     "nome":"Pizza de calabresa",
// //     "desc":"Pizza de calabresa com mussarela. 8 pedaços",
// //   },
// //   {
// //     "img":"http://rossopizza.com.br/salao/wp-content/uploads/2019/09/istock-181175167.jpg",
// //     "nome":"Pizza de Marguerita",
// //     "desc":"Pizza de Marguerita. 8 pedaços",
// //   },
  
// // ]
 
// const salvar = async () => {
//   try {
//     let data = {
//     //   "img":fotoPizza,
//       "nome":nomePizza,
//       "desc":descPizza
//       }
//       const jsonValue = JSON.stringify(data)
//       await AsyncStorage.setItem("dados", jsonValue);
//     }catch(err) {
//       console.error(err)
//     }
//   }

//   const ler = async () => {
//     try {
//       const jsonValue = await AsyncStorage.getItem('dados')
//       var infos = jsonValue != null ? JSON.parse(jsonValue) : null;
//       setLida(
//         <View>
//           {/* <Image>{infos.fotoPizza}</Image> */}
//           <Text>{infos.nomePizza}</Text>
//           <Text>{infos.desc}</Text>
//         </View>
//       )
//     }catch(err) {
//       console.error(err)
//     }
//   }

//   return(
//     // <View>
//     //   {
//     //     pizzasCad.map((pizzas, indices) => {
//     //         return(
//     //             <TouchableOpacity onPress={() => {navigation.navigate("Descricao" )}}>
//     //                 <Image source = {pizzas.img}/>
//     //                 <Text>{pizzas.nome}</Text>
//     //                 <Text>{pizzas.desc}</Text>
//     //                 <TouchableOpacity onPress={() =>{salvar() }}><Text> SALVAR </Text></TouchableOpacity>
//     //                 <Button tittle="Carrinho" onPress={() =>{ler() }} />
//     //             </TouchableOpacity>
//     //         )
//     //     })
//     //   }
//     // </View>
//     <View style={styles.container}>
//       <Text>Digite:</Text>
//       <TextInput style={styles.input} placeholder="Nome" value={nomePizza} onChangeText={(val) => { setNome(val) }}/>
//       <TextInput style={styles.input} placeholder="Desc" value={descPizza} onChangeText={(val) => { setDesc(val) }}/>
//       <TouchableOpacity style={styles.btn} onPress={() =>{salvar() }}><Text> SALVAR </Text></TouchableOpacity>
//       <Button style={styles.btn} title="Ler" onPress={() =>{ler() }} />
//         <Text>{lida}</Text>
//     </View>
//   );
// }



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// // return (
// //     <View style={styles.container}>
// //       <Text>Digite:</Text>
// //       <TextInput style={styles.input} placeholder="Nome" value={nome} onChangeText={(val) => { setNome(val) }}/>
// //       <TextInput style={styles.input} placeholder="Cargo" value={cargo} onChangeText={(val) => { setCargo(val) }}/>
// //       <TextInput style={styles.input} placeholder="Salário" value={salario} onChangeText={(val) => { setSalario(val) }}/>
// //       <TouchableOpacity style={styles.btn} onPress={() =>{salvar() }}><Text> SALVAR </Text></TouchableOpacity>
// //       <Button style={styles.btn} title="Ler" onPress={() =>{ler() }} />
// //         <Text>{lida}</Text>
// //     </View>
// //   );
// // }