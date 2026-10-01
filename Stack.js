import React from "react";
import {
  createNativeStackNavigator,
} from "@react-navigation/native-stack";

import MainTab from "../MainTab";
import Lista from "../../screens/carpeta1/Lista";
import Detalles from "../../screens/carpeta1/Detalles";

const Stack = createNativeStackNavigator();

export default function StackNavigator({
  modoOscuro,
}) {
  return (
    <Stack.Navigator
      initialRouteName="Principal"
      screenOptions={{
        headerStyle: {
          backgroundColor: modoOscuro
            ? "#1E1E1E"
            : "#222222",
        },

        headerTintColor: "#FFFFFF",
      }}
    >
      <Stack.Screen
        name="Principal"
        children={() => (
          <MainTab
            modoOscuro={modoOscuro}
          />
        )}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Lista"
        component={Lista}
        options={{
          title: "Productos",
        }}
      />

      <Stack.Screen
        name="Detalles"
        component={Detalles}
        options={{
          title: "Detalle del producto",
        }}
      />
    </Stack.Navigator>
  );
}



