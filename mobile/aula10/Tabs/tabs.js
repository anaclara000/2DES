import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import Descricao from '../pages/Descricao';

const Tab = createBottomTabNavigator();
const Tabs = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Descricao" component={Descricao}/>
        </Tab.Navigator>
    );
}
export default Tabs;