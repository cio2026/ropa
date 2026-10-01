import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
} from "react-native";

const categorias = [
  "Jeans",
  "Remeras",
  "Vestidos",
  "Polleras",
];

export default function OtroScreen({ navigation }) {
  const mostrarCategoria = ({ item }) => {
    return (
      <Pressable
        style={styles.categoria}
        onPress={() =>
          navigation
            .getParent()
            ?.navigate("Lista", {
              categoria: item,
            })
        }
      >
        <Text style={styles.nombreCategoria}>
          {item.toUpperCase()}
        </Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>

      <View style={styles.encabezado}>
        <Text style={styles.marca}>
          LUNA
        </Text>

        <Text style={styles.subtitulo}>
          FASHION STORE
        </Text>

        <View style={styles.linea} />

        <Text style={styles.titulo}>
          CATEGORÍAS
        </Text>

        <Text style={styles.descripcion}>
          Encontrá tu estilo
        </Text>
      </View>

      <FlatList
        data={categorias}
        renderItem={mostrarCategoria}
        keyExtractor={(item) => item}
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
    paddingHorizontal: 25,
  },

  encabezado: {
    alignItems: "center",
    paddingTop: 45,
    paddingBottom: 25,
  },

  marca: {
    fontSize: 38,
    fontWeight: "300",
    letterSpacing: 8,
    color: "#222222",
  },

  subtitulo: {
    fontSize: 11,
    letterSpacing: 5,
    color: "#8B3A4A",
    marginTop: 5,
  },

  linea: {
    width: 55,
    height: 1,
    backgroundColor: "#8B3A4A",
    marginVertical: 22,
  },

  titulo: {
    fontSize: 24,
    fontWeight: "600",
    letterSpacing: 4,
    color: "#222222",
  },

  descripcion: {
    fontSize: 14,
    color: "#777777",
    marginTop: 8,
    letterSpacing: 1,
  },

  lista: {
    paddingTop: 5,
    paddingBottom: 30,
  },

  categoria: {
    backgroundColor: "#FFFFFF",
    height: 75,
    marginBottom: 15,
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E2D8D3",

    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 5,
    elevation: 2,
  },

  nombreCategoria: {
    fontSize: 15,
    letterSpacing: 3,
    color: "#8B3A4A",
    fontWeight: "600",
  },
});

