import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
} from "react-native";

export default function Detalles({ route }) {

  const { producto } = route.params;

  return (
    <View style={styles.container}>

      <Image
        source={{ uri: producto.imagen }}
        style={styles.imagen}
      />

      <View style={styles.contenido}>

        <Text style={styles.nombre}>
          {producto.nombre}
        </Text>

        <Text style={styles.categoria}>
          {producto.categoria}
        </Text>

        <Text style={styles.precio}>
          ${producto.precio}
        </Text>

        <Text style={styles.descripcion}>
          Producto de nuestra colección de ropa.
          Diseño moderno y cómodo para usar
          todos los días.
        </Text>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f5f2",
  },

  imagen: {
    width: "100%",
    height: 400,
  },

  contenido: {
    padding: 20,
  },

  nombre: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#222",
  },

  categoria: {
    fontSize: 16,
    color: "#777",
    marginTop: 8,
  },

  precio: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#8b1e3f",
    marginTop: 15,
  },

  descripcion: {
    fontSize: 16,
    color: "#555",
    marginTop: 20,
    lineHeight: 24,
  },
});



