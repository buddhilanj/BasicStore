import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import SCREENS from '@constants/screens';
import HomeScreen from '@screens/home';
import CartScreen from '@screens/cart';

const Tab = createBottomTabNavigator();

interface Tabs {
  name: string;
  id: string;
  component: () => React.JSX.Element;
  icon: keyof typeof Ionicons.glyphMap;
}

const TABS: Tabs[] = [
  { id: SCREENS.APP.HOME.HOME, component: HomeScreen, icon: 'home', name: 'Home' },
  { id: SCREENS.APP.HOME.CART, component: CartScreen, icon: 'cart', name: 'Cart' },
];

interface TabIconProps {
  name: keyof typeof Ionicons.glyphMap;
  color: string;
  size: number;
}

function TabIcon({ name, color, size }: TabIconProps) {
  return <Ionicons name={name} size={size} color={color} />;
}

export default function HomeTabs() {
  return (
    <Tab.Navigator>
      {TABS.map(tab => (
        <Tab.Screen
          key={tab.id}
          name={tab.id}
          component={tab.component}
          options={{
            tabBarIcon: ({ color, size }) => TabIcon({ name: tab.icon, color, size }),
            title: tab.name,
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
