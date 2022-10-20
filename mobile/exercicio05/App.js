import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Compromissos from './src/pages/Compromissos';
import Descricao from './src/pages/Descricao';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Compromissos" component={Compromissos} />
        <Stack.Screen name="Descrição" component={Descricao} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}