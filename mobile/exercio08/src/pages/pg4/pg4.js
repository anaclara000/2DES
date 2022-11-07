import {Text, View, Button} from 'react-native';
import { RadioButton } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as React from 'react'

export default function pg4({navigation}) { 
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
            <Text>Quantas fotos do Reenye existem no mundo?</Text>
            <View>
                <RadioButton.Item 
                    label="0"
                    value="primeiro"
                    status={ checked === 'A' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('A')}
                />
            </View>
            <View>
                <RadioButton.Item 
                    label="1"
                    value="segundo"
                    status={ checked === 'C' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('C')}
                />
            </View>
            <View>
                <RadioButton.Item 
                    label="2"
                    value="terceiro"
                    status={ checked === 'B' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('B')}
                />
            </View>
            <View>
                <RadioButton.Item 
                    label="Várias"
                    value="quarto"
                    status={ checked === 'D' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('D')}
                />
            </View>
            <Button title="proxima pagina" onPress={() =>{navigation.navigate('pg5'); ler()}}></Button>
        </View>
    );
}