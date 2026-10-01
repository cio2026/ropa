
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  Image,
} from "react-native";

import { productos } from "../../data/data";

export default function Lista({ navigation, route }) {
  const categoria = route?.params?.categoria;

  const productosFiltrados = productos.filter(
    (producto) => producto.categoria === categoria
  );

  const mostrarProducto = ({ item }) => {
    return (
      <Pressable
        style={styles.card}
        onPress={() =>
          navigation.navigate("Detalles", {
            producto: item,
          })
        }
      >
        <Image
          source={item.imagen}
          style={styles.imagen}
        />
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.encabezado}>
        <Text style={styles.marca}>LUNA</Text>

        <Text style={styles.subtitulo}>
          FASHION STORE
        </Text>

        <View style={styles.linea} />

        <Text style={styles.titulo}>
          {categoria?.toUpperCase()}
        </Text>
      </View>

      <FlatList
        data={productosFiltrados}
        renderItem={mostrarProducto}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.lista}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F5F2",
    paddingHorizontal: 15,
  },

  encabezado: {
    alignItems: "center",
    paddingTop: 25,
    paddingBottom: 20,
  },

  marca: {
    fontSize: 32,
    fontWeight: "300",
    letterSpacing: 7,
    color: "#222222",
  },

  subtitulo: {
    fontSize: 9,
    letterSpacing: 4,
    color: "#8B3A4A",
    marginTop: 4,
  },

  linea: {
    width: 45,
    height: 1,
    backgroundColor: "#8B3A4A",
    marginVertical: 15,
  },

  titulo: {
    fontSize: 22,
    fontWeight: "600",
    letterSpacing: 4,
    color: "#222222",
  },

  lista: {
    paddingBottom: 30,
  },

  card: {
    width: "48%",
    height: 260,
    margin: "1%",
    backgroundColor: "#FFFFFF",
    borderRadius: 4,
    overflow: "hidden",

    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },

  imagen: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});



