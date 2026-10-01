import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";

export default function ContactoScreen({
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
          CONTACTO
        </Text>

        <View style={styles.info}>
          <Text style={styles.etiqueta}>
            INSTAGRAM
          </Text>

          <Text style={styles.dato}>
            @luna.fashion
          </Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.etiqueta}>
            WHATSAPP
          </Text>

          <Text style={styles.dato}>
            +54 9 0000 0000
          </Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.etiqueta}>
            EMAIL
          </Text>

          <Text style={styles.dato}>
            lunafashion@email.com
          </Text>
        </View>

        <Text style={styles.frase}>
          Estamos para ayudarte ✨
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
    marginBottom: 30,
  },

  info: {
    alignItems: "center",
    marginBottom: 22,
  },

  etiqueta: {
    color: "#8B3A4A",
    fontSize: 11,
    letterSpacing: 3,
    marginBottom: 5,
  },

  dato: {
    color: "#555555",
    fontSize: 15,
  },

  frase: {
    color: "#8B3A4A",
    fontSize: 15,
    fontStyle: "italic",
    marginTop: 15,
  },

  footer: {
    textAlign: "center",
    color: "#999999",
    fontSize: 9,
    letterSpacing: 3,
  },
});

