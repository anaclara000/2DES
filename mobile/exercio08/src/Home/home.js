import {Text, View, Button} from 'react-native';
import * as React from 'react'
// import styles from '../global/style'

export default function Home({ navigation }) {
    return ( 
        <View>
            <Text>Responda o QUIZ</Text>
            <Button title="proxima pagina" onPress={() =>{navigation.navigate('pg1')}}></Button>
        </View>
      );
    }

    
