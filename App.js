import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./navigation/AppNavigator";

export default function App() {
  const [modoOscuro, setModoOscuro] = useState(false);

  return (
    <NavigationContainer>
      <AppNavigator
        modoOscuro={modoOscuro}
        setModoOscuro={setModoOscuro}
      />
    </NavigationContainer>
  );
}

