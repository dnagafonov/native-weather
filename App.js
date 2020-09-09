import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import WeatherPageContainer from "./components/weather-page/weather-page-container";
import TablePageContainer from "./components/table-page/table-page-container";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import "react-native-gesture-handler";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Weather"
          tabBarOptions={{
            activeTintColor: "#005fad",
          }}
        >
          <Tab.Screen
            name="Weather"
            component={WeatherPageContainer}
            options={{
              tabBarLabel: "Weather",
              tabBarIcon: ({ color, size }) => (
                <Icons name="apple-icloud" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="History"
            component={TablePageContainer}
            options={{
              tabBarLabel: "History",
              tabBarIcon: ({ color, size }) => (
                <Icons name="history" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
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
