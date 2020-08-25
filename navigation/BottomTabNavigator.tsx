import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import InfluenceScreen from '../screens/InfluenceScreen';
import SuppressionScreen from '../screens/SuppressionScreen';
import ElectionScreen from '../screens/ElectionScreen';
import { BottomTabParamList, InfluenceParamList, SuppressionParamList, ElectionParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Influence"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Influence"
        component={InfluenceNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Suppression"
        component={SuppressionNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Election"
        component={ElectionNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const InfluenceStack = createStackNavigator<InfluenceParamList>();

function InfluenceNavigator() {
  return (
    <InfluenceStack.Navigator>
      <InfluenceStack.Screen
        name="InfluenceScreen"
        component={InfluenceScreen}
        options={{ headerTitle: 'Tab One Title' }}
      />
    </InfluenceStack.Navigator>
  );
}

const SuppressionStack = createStackNavigator<SuppressionParamList>();

function SuppressionNavigator() {
  return (
    <SuppressionStack.Navigator>
      <SuppressionStack.Screen
        name="SuppressionScreen"
        component={SuppressionScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </SuppressionStack.Navigator>
  );
}

const ElectionStack = createStackNavigator<ElectionParamList>();

function ElectionNavigator() {
  return (
    <ElectionStack.Navigator>
      <ElectionStack.Screen
        name="ElectionScreen"
        component={ElectionScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </ElectionStack.Navigator>
  );
}
