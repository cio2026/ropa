import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Linking,
} from "react-native";

export default function Redes() {

  const abrirInstagram = () => {
    Linking.openURL("https://www.instagram.com/");
  };

  const abrirTikTok = () => {
    Linking.openURL("https://www.tiktok.com/");
  };

  return (
    <View style={styles.container}>

      <Text style={styles.logo}>
        LUNA
      </Text>

      <Text style={styles.subLogo}>
        FASHION STORE
      </Text>

      <View style={styles.linea} />

      <Text style={styles.titulo}>
        NUESTRAS REDES
      </Text>

      <Text style={styles.descripcion}>
        Seguinos para conocer nuestras
        nuevas prendas y colecciones.
      </Text>

      <Pressable
        style={styles.boton}
        onPress={abrirInstagram}
      >
        <Text style={styles.icono}>
          ◎
        </Text>

        <Text style={styles.texto}>
          INSTAGRAM
        </Text>

        <Text style={styles.flecha}>
          →
        </Text>
      </Pressable>

      <Pressable
        style={styles.boton}
        onPress={abrirTikTok}
      >
        <Text style={styles.icono}>
          ♪
        </Text>

        <Text style={styles.texto}>
          TIKTOK
        </Text>

        <Text style={styles.flecha}>
          →
        </Text>
      </Pressable>

      <Text style={styles.inferior}>
        MODA • ESTILO • ACTITUD
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#1C1717",
    alignItems: "center",
    paddingHorizontal: 25,
    paddingTop: 80,
  },

  logo: {
    color: "#FFFFFF",
    fontSize: 34,
    fontWeight: "bold",
    letterSpacing: 7,
  },

  subLogo: {
    color: "#D8B8A8",
    fontSize: 9,
    letterSpacing: 3,
    marginTop: 3,
  },

  linea: {
    width: 55,
    height: 1,
    backgroundColor: "#D8B8A8",
    marginTop: 35,
    marginBottom: 35,
  },

  titulo: {
    color: "#FFFFFF",
    fontSize: 27,
    fontWeight: "300",
    letterSpacing: 4,
  },

  descripcion: {
    color: "#D8D0CC",
    textAlign: "center",
    fontSize: 14,
    lineHeight: 22,
    marginTop: 15,
    marginBottom: 35,
  },

  boton: {
    width: "100%",
    height: 65,
    borderWidth: 1,
    borderColor: "#D8B8A8",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 15,
  },

  icono: {
    color: "#D8B8A8",
    fontSize: 25,
    width: 40,
  },

  texto: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "bold",
    letterSpacing: 2,
    flex: 1,
  },

  flecha: {
    color: "#D8B8A8",
    fontSize: 22,
  },

  inferior: {
    position: "absolute",
    bottom: 30,
    color: "#D8D0CC",
    fontSize: 9,
    letterSpacing: 2,
  },

});

