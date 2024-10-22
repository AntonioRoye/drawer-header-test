import 'react-native-gesture-handler';
import 'react-native-reanimated';
import React from "react";
import { StyleSheet} from "react-native";
import {Drawer} from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";



export default function App() {
  return (
 
      <GestureHandlerRootView style={{ flex: 1 }}>
          <Drawer
            screenOptions={{
              headerShown: true,
              drawerStyle: {
                backgroundColor: "#404040",
              },
              drawerLabelStyle: {
                color: "white"
              },
            }}
          >
            <Drawer.Screen
              name="index"
              options={{
                drawerLabel: "Index",
                headerTitle: () => null,
                headerTitleStyle: {
                  fontWeight: "bold",
                }
              }}
            />
            
            <Drawer.Screen
              name="vehicle"
              options={{
                drawerLabel: "Vehicle",
                title: "Vehicle",
                headerTitleStyle: {
                  fontWeight: "bold",
                },
              }}
            />
           
          </Drawer>
       </GestureHandlerRootView>
  
  );
}

const styles = StyleSheet.create({
  drawerHeader: {
    height: 150,
    alignItems: "center",
    justifyContent: "center",
  },
  drawerIcon: {
    width: 250,
    height: 67,
  },

  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
  },
});
