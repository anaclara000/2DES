import {View, TouchableOpacity, Text, TextInput, Button, StyleSheet} from 'react-native';
import {useState} from 'react';

export default function App(){
  // const [value, setValue] = useState(" ");
  // const [value2, setValue2] = useState(" ");

  // return(
  //   <View>
  //     <TextInput value={value} onChangeText={(val) => {setValue(val)}}/>
  //     <TextInput value={value2} onChangeText={(val2) => {setValue2(val2)}}/>
  //     <Button title="Somar" onPress={() => {console.log(value, value2);}} />
      
  //     <Text>{parseInt(value) + parseInt(value2)}</Text>
  //   </View>
  // );

  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  const [calc , setCalc] = useState("");


  return(
    <View style={style.container}>
      <View style={style.calc}>
        <TextInput style={style.input} placeholder="Primeiro Valor" value={value} onChangeText={(val) => {setValue(val)}} />
        <TextInput style={style.input} placeholder="Segundo Valor" value={value2} onChangeText={(val2) => {setValue2(val2)}}/>
        <Button style={style.bt} title="+" onPress={() => {setCalc(Number(value) + Number(value2))}}/>
        <Button title="-" onPress={() => {setCalc(Number(value) - Number(value2))}}/>
        <Button title="/" onPress={() => {setCalc(Number(value) / Number(value2))}}/>
        <Button title="*" onPress={() => {setCalc(Number(value) * Number(value2))}}/>
        <Text>{calc}</Text>
      </View>
    </View>
  );

};

const style = StyleSheet.create({
    container: {
      margin: 0,
      padding:0,
    },
    calc: {
      margin: '10%',
    },
    input : {
      padding: '10px',
      border: '1px solid #000',
      borderRadius: '10px'
    }
});




