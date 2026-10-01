import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";

export default function SobreLunaScreen({
  navigation,
}) {
  return (
    <View style={styles.container}>

      <Pressable
        style={styles.menu}
        onPress={() =>
          navigation.openDrawer()
        }
      >
        <Text style={styles.menuTexto}>
          ☰
        </Text>
      </Pressable>

      <View style={styles.contenido}>

        <Text style={styles.logo}>
          LUNA
        </Text>

        <Text style={styles.subtitulo}>
          FASHION STORE
        </Text>

        <View style={styles.linea} />

        <Text style={styles.titulo}>
          SOBRE LUNA
        </Text>

        <Text style={styles.texto}>
          LUNA es una tienda de moda creada
          para encontrar prendas que
          representen tu estilo y tu
          personalidad.
        </Text>

        <Text style={styles.texto}>
          Nuestra colección combina prendas
          modernas, cómodas y elegantes para
          acompañarte en cada momento.
        </Text>

        <Text style={styles.frase}>
          "Tu estilo. Tu esencia."
        </Text>

      </View>

      <Text style={styles.footer}>
        LUNA FASHION STORE
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F5F2",
    paddingHorizontal: 25,
    paddingTop: 45,
    paddingBottom: 25,
  },

  menu: {
    width: 45,
    height: 45,
    borderRadius: 23,
    borderWidth: 1,
    borderColor: "#8B3A4A",
    justifyContent: "center",
    alignItems: "center",
  },

  menuTexto: {
    color: "#8B3A4A",
    fontSize: 22,
  },

  contenido: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    color: "#222222",
    fontSize: 38,
    fontWeight: "300",
    letterSpacing: 8,
  },

  subtitulo: {
    color: "#8B3A4A",
    fontSize: 10,
    letterSpacing: 4,
    marginTop: 5,
  },

  linea: {
    width: 55,
    height: 1,
    backgroundColor: "#8B3A4A",
    marginVertical: 25,
  },

  titulo: {
    color: "#222222",
    fontSize: 24,
    fontWeight: "600",
    letterSpacing: 4,
    marginBottom: 25,
  },

  texto: {
    color: "#666666",
    fontSize: 15,
    lineHeight: 25,
    textAlign: "center",
    marginBottom: 18,
  },

  frase: {
    color: "#8B3A4A",
    fontSize: 16,
    fontStyle: "italic",
    letterSpacing: 2,
    marginTop: 15,
  },

  footer: {
    textAlign: "center",
    color: "#999999",
    fontSize: 9,
    letterSpacing: 3,
  },
});



