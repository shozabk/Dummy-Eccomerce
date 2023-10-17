import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icons} from '../common';
import HomeNavigator from './HomeNavigator';
import ShopScreen from '../screens/app/shop';
import ProfileScreen from '../screens/app/profile';
import CartScreen from '../screens/app/cart';
import DashboardScreen from '../screens/app/dashboard';

function AppNavigator(): JSX.Element {
  const Tab = createBottomTabNavigator();

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarActiveTintColor: '#048904',
          tabBarHideOnKeyboard: true,
        }}>
        <Tab.Screen
          name={'Home'}
          component={HomeNavigator}
          options={{
            tabBarIcon: ({focused, size, color}) => (
              <Icons.Feather
                name="home"
                size={focused ? 30 : size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name={'Shop'}
          component={ShopScreen}
          options={{
            tabBarIcon: ({focused, size, color}) => (
              <Icons.Entypo
                name="shop"
                size={focused ? 30 : size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name={'Dashboard'}
          component={DashboardScreen}
          options={{
            tabBarIcon: ({focused, size, color}) => (
              <Icons.MaterialIcons
                name="dashboard"
                size={focused ? 30 : size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name={'Cart'}
          component={CartScreen}
          options={{
            tabBarIcon: ({focused, size, color}) => (
              <Icons.AntDesign
                name="shoppingcart"
                size={focused ? 30 : size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name={'Profile'}
          component={ProfileScreen}
          options={{
            tabBarIcon: ({focused, size, color}) => (
              <Icons.AntDesign
                name="user"
                size={focused ? 30 : size}
                color={color}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}

export default AppNavigator;
