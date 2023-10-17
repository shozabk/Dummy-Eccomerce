import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from '../common';
import HomeScreen from '../screens/app/home';
import FavouriteScreen from '../screens/app/favourite';

const Stack = createNativeStackNavigator();
function HomeNavigator(): JSX.Element {
  return (
    <Stack.Navigator
      initialRouteName={Routes.homeScreen}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={Routes.homeScreen} component={HomeScreen} />
      <Stack.Screen name={Routes.favouriteScreen} component={FavouriteScreen} />
    </Stack.Navigator>
  );
}

export default HomeNavigator;
