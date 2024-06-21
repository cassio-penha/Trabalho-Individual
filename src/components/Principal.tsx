import {
  Image,
  StyleSheet,
  View,
} from "react-native";
import Formulario from "./Formulario/Index";

export function Principal() {

  return (
    <View style={styles.container}>
      <View style={styles.statusBar} />
      <Image style={styles.cabecalho}
            source={require('../../assets/Onda-orkut.png')}
            />
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/Logo_ORKUT.svg.png")}
          style={styles.image}
        />
      </View>
      <Formulario />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imageContainer: {
    flex: 1,
    alignItems: "center",
  },

  image: {
    width: 130,
    height: 130,
    resizeMode: "center",
  },

  cabecalho:{
    position: "absolute",
  },

  statusBar: {
    width: "100%",
    justifyContent: "center",
  },

  footer: {
    width: "90%",
  },
}
);
