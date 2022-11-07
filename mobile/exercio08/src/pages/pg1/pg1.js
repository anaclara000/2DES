import {Text, View, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RadioButton } from 'react-native-paper';
import * as React from 'react'
// import styles from '../global/style'

export default function pg1({navigation}) { 
    const [checked, setChecked1] = React.useState();
    console.log(checked)

    var val = []
    const salvar = async () => {
        try{
            val.push(checked)
            const data = JSON.stringify(val)
            await AsyncStorage.setItem("Respostas", data);
            console.log(val)
        }catch(err){
            console.log(err)
        }
    }
    return ( 
        <View>
            <Text>Responda o QUIZ</Text>
            <Text>Qual a comida preferida do Reenye</Text>
            <View>
                <RadioButton.Item 
                    label="Lasanha"
                    value="1"
                    status={ checked === 'A' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked1('A')}
                />
            </View>
            <View>
                <RadioButton.Item 
                    label="Cuscuz"
                    value="2"
                    status={ checked === 'B' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked1('B')}
                />
            </View>
            <View>
                <RadioButton.Item 
                    label="Coração de aluno"
                    value="3"
                    status={ checked === 'C' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked1('C')}
                />
            </View>
            <View>
                <RadioButton.Item 
                    label="Strogonoff"
                    value="4"
                    status={ checked === 'D' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked1('D')}
                />
            </View>
            <Button title="proxima pagina" onPress={() =>{navigation.navigate('pg2' , salvar())}}></Button>
        </View>
    );
}