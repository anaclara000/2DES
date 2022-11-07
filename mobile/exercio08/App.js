import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/Home/home'
import pg1 from './src/pages/pg1/pg1.js'
import pg2 from './src/pages/pg2/pg2'
import pg3 from './src/pages/pg3/pg3'
import pg4 from './src/pages/pg4/pg4'
import pg5 from './src/pages/pg5/pg5'
import Final from './src/Final/Final'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="pg1" component={pg1}/>
        <Stack.Screen name="pg2" component={pg2}/>
        <Stack.Screen name="pg3" component={pg3}/>
        <Stack.Screen name="pg4" component={pg4}/>
        <Stack.Screen name="pg5" component={pg5}/>
        <Stack.Screen name="Final" component={Final}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
