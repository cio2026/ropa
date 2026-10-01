import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native";

export default function InicioScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../../assets/inicio.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>

        <View style={styles.header}>
          <View>
            <Text style={styles.logo}>
              LUNA
            </Text>

            <Text style={styles.subtitulo}>
              FASHION STORE
            </Text>
          </View>

          <Pressable
            style={styles.menu}
            onPress={() => navigation.openDrawer()}
          >
            <Text style={styles.menuTexto}>
              ☰
            </Text>
          </Pressable>
        </View>

        <View style={styles.contenido}>
          <Text style={styles.coleccion}>
            NUEVA COLECCIÓN
          </Text>

          <Text style={styles.titulo}>
            Tu estilo.
          </Text>

          <Text style={styles.titulo}>
            Tu esencia.
          </Text>

          <View style={styles.linea} />

          <Text style={styles.descripcion}>
            Descubrí prendas que hablan de vos.
          </Text>

          <Pressable
            style={styles.boton}
            onPress={() =>
              navigation.navigate("Categorías")
            }
          >
            <Text style={styles.textoBoton}>
              VER PRODUCTOS
            </Text>
          </Pressable>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerTexto}>
            LUNA FASHION STORE
          </Text>
        </View>

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.45)",
    paddingHorizontal: 25,
    paddingTop: 45,
    paddingBottom: 25,
    justifyContent: "space-between",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  logo: {
    color: "#FFFFFF",
    fontSize: 32,
    fontWeight: "300",
    letterSpacing: 8,
  },

  subtitulo: {
    color: "#E8C9CF",
    fontSize: 10,
    letterSpacing: 4,
    marginTop: 4,
  },

  menu: {
    width: 45,
    height: 45,
    borderRadius: 23,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.7)",
    justifyContent: "center",
    alignItems: "center",
  },

  menuTexto: {
    color: "#FFFFFF",
    fontSize: 22,
  },

  contenido: {
    alignItems: "center",
  },

  coleccion: {
    color: "#E8C9CF",
    fontSize: 12,
    letterSpacing: 4,
    marginBottom: 18,
  },

  titulo: {
    color: "#FFFFFF",
    fontSize: 38,
    fontWeight: "300",
    letterSpacing: 2,
    lineHeight: 45,
  },

  linea: {
    width: 55,
    height: 1,
    backgroundColor: "#FFFFFF",
    marginVertical: 22,
  },

  descripcion: {
    color: "#FFFFFF",
    fontSize: 14,
    textAlign: "center",
    letterSpacing: 1,
    marginBottom: 30,
  },

  boton: {
    borderWidth: 1,
    borderColor: "#FFFFFF",
    paddingVertical: 16,
    paddingHorizontal: 38,
    backgroundColor: "rgba(139,58,74,0.85)",
  },

  textoBoton: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "600",
    letterSpacing: 3,
  },

  footer: {
    alignItems: "center",
  },

  footerTexto: {
    color: "rgba(255,255,255,0.75)",
    fontSize: 9,
    letterSpacing: 3,
  },
});


