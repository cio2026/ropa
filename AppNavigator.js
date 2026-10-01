import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";

import StackNavigator from "./stack/Stack";
import SobreLunaScreen from "../screens/SobreLunaScreens";
import ContactoScreen from "../screens/ContactoScreen";

const Drawer = createDrawerNavigator();

export default function AppNavigator({
  modoOscuro,
  setModoOscuro,
}) {
  const fondo = modoOscuro ? "#1E1E1E" : "#F8F5F2";
  const texto = modoOscuro ? "#FFFFFF" : "#222222";

  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <DrawerContentScrollView
          {...props}
          style={{
            backgroundColor: fondo,
          }}
        >
          <DrawerItem
            label="Inicio"
            labelStyle={{
              color: texto,
              fontSize: 16,
            }}
            onPress={() =>
              props.navigation.navigate("LUNA")
            }
          />

          <DrawerItem
            label="Sobre LUNA"
            labelStyle={{
              color: texto,
              fontSize: 16,
            }}
            onPress={() =>
              props.navigation.navigate("SobreLuna")
            }
          />

          <DrawerItem
            label="Contacto"
            labelStyle={{
              color: texto,
              fontSize: 16,
            }}
            onPress={() =>
              props.navigation.navigate("Contacto")
            }
          />

          <DrawerItem
            label={
              modoOscuro
                ? "☀️ Modo claro"
                : "🌙 Modo oscuro"
            }
            labelStyle={{
              color: "#8B3A4A",
              fontSize: 16,
              fontWeight: "600",
            }}
            onPress={() =>
              setModoOscuro(!modoOscuro)
            }
          />
        </DrawerContentScrollView>
      )}
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: "#8B3A4A",
        drawerLabelStyle: {
          fontSize: 16,
        },
        drawerStyle: {
          backgroundColor: fondo,
          width: 280,
        },
      }}
    >
      <Drawer.Screen
        name="LUNA"
        children={() => (
          <StackNavigator
            modoOscuro={modoOscuro}
          />
        )}
        options={{
          drawerLabel: "Inicio",
        }}
      />

      <Drawer.Screen
        name="SobreLuna"
        component={SobreLunaScreen}
        options={{
          drawerLabel: "Sobre LUNA",
        }}
      />

      <Drawer.Screen
        name="Contacto"
        component={ContactoScreen}
        options={{
          drawerLabel: "Contacto",
        }}
      />
    </Drawer.Navigator>
  );
}





