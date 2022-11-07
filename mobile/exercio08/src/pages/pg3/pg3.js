import {Text, View, Button} from 'react-native';
import { RadioButton } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as React from 'react'

export default function pg3({navigation}) { 
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
            <Text>Qual é o dia perfeito para o Reenye?</Text>
            <View>
                <RadioButton.Item 
                    label="Um dia junto aos seus queridos alunos"
                    value="primeiro"
                    status={ checked === 'C' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('C')}
                />
            </View>
            <View>
                <RadioButton.Item 
                    label="Um dia com muito arco-iris, flores e raios de sol"
                    value="segundo"
                    status={ checked === 'A' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('A')}
                />
            </View>
            <View>
                <RadioButton.Item 
                    label="Um dia chuvoso com tempestades"
                    value="terceiro"
                    status={ checked === 'B' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('B')}
                />
            </View>
            <View>
                <RadioButton.Item 
                    label="Um dia de Microsoft AI 900"
                    value="quarto"
                    status={ checked === 'D' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('D')}
                />
            </View>
            <Button title="proxima pagina" onPress={() =>{navigation.navigate('pg4'); ler()}}></Button>
        </View>
    );
}