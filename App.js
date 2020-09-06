import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import WeatherPage from "./components/weather-page/weather-page";
import TablePage from "./components/table-page/table-page";

import "react-native-gesture-handler";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Weather"
        tabBarOptions={{
          activeTintColor: "#005fad",
        }}
      >
        <Tab.Screen
          name="Weather"
          component={WeatherPage}
          options={{
            tabBarLabel: "Weather",
            tabBarIcon: ({ color, size }) => (
              <Icons name="apple-icloud" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="History"
          component={TablePage}
          options={{
            tabBarLabel: "History",
            tabBarIcon: ({ color, size }) => (
              <Icons name="history" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
