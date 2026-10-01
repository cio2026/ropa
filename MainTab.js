import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import InicioScreen from "../screens/inicio/InicioScreen";
import OtroScreen from "../screens/carpeta2/OtroScreen";
import RedesScreen from "../screens/redes/redesscreens";

const Tab = createBottomTabNavigator();

export default function MainTab({ modoOscuro }) {
  const fondo = modoOscuro
    ? "#1E1E1E"
    : "#F8F5F2";

  const textoActivo = "#8B3A4A";

  const textoInactivo = modoOscuro
    ? "#FFFFFF"
    : "#555555";

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarActiveTintColor: textoActivo,

        tabBarInactiveTintColor: textoInactivo,

        tabBarStyle: {
          height: 65,
          paddingBottom: 8,
          paddingTop: 5,

          backgroundColor: fondo,

          borderTopColor: modoOscuro
            ? "#333333"
            : "#E2D8D3",

          borderTopWidth: 1,
        },

        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "600",
        },

        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Inicio") {
            iconName = "home-outline";
          } else if (route.name === "Redes") {
            iconName = "logo-instagram";
          } else {
            iconName = "grid-outline";
          }

          return (
            <Ionicons
              name={iconName}
              size={size}
              color={color}
            />
          );
        },
      })}
    >
      <Tab.Screen
        name="Inicio"
        component={InicioScreen}
      />

      <Tab.Screen
        name="Redes"
        component={RedesScreen}
      />

      <Tab.Screen
        name="Categorías"
        component={OtroScreen}
      />
    </Tab.Navigator>
  );
}


