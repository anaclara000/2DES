import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
export default function Carrinho({route}) {
    const [teste, setTeste] = useState("");

    getValueFunction = () => {
        AsyncStorage.getItem('euDecido').then(
          value => this.setState({getValue: value})
        );
      };
 
}