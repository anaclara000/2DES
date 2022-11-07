import {Text, View, Button} from 'react-native';
import {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Final({route}) { 
    const [value, setValue] = useState();

    var data
    var resp = []
    const ler = async () => {
        try{
          const val = await AsyncStorage.getItem('Respostas')
          var teste = val != null ? JSON.parse(val) : null;
          data = teste 

          data.forEach(info => {
            if(info == 'C'){
                resp.push(info);
                setValue(resp.length)
            }
          })
          if(resp.length < 3){
            alert("Melhore!")
          }else if(resp.length == 3 || resp.length == 4){
            alert("Parabéns!")
          }else{
            alert("Você conhece muito bem o Reenye!")
          }
        }catch(err){
          console.log(err);
        }
      }

      useEffect( () => {ler()}, [])
    return ( 
        <View>
            <Text>Você acertou {value} questões</Text>
        </View>

        
    );
}