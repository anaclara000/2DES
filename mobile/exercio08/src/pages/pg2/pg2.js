import {Text, View, Button} from 'react-native';
import { RadioButton } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as React from 'react'

export default function pg2({navigation}) { 
    const [checked, setChecked] = React.useState();
    console.log(checked)

    var data 
    const ler = async () => {
        try{
          const val = await AsyncStorage.getItem('Respostas')
          var teste = val != null ? JSON.parse(val) : null;
          data = teste
          console.log(data);
          data.push(checked)
          AsyncStorage.setItem('Respostas', JSON.stringify(data));
        }catch(err){
          console.log(err);
        }
      }
    return ( 
        <View>
            <Text>O que o Reenye mais gosta?</Text>
            <View>
                <RadioButton.Item 
                    label="Panda"
                    value="primeiro"
                    status={ checked === 'A' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('A')}
                />
            </View>
            <View>
                <RadioButton.Item 
                    label="Carroça"
                    value="segundo"
                    status={ checked === 'B' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('B')}
                />
            </View>
            <View>
                <RadioButton.Item 
                    label="Fulano, Beltrano, Ciclano"
                    value="terceiro"
                    status={ checked === 'D' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('D')}
                />
            </View>
            <View>
                <RadioButton.Item 
                    label="Alunos"
                    value="quarto"
                    status={ checked === 'C' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('C')}
                />
            </View>
            <Button title="proxima pagina" onPress={() =>{navigation.navigate('pg3'); ler()}}></Button>
        </View>
    );
}