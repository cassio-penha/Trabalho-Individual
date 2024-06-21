import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    form:{
        flex: 2,
        backgroundColor: "white",
        alignItems: "center",
        gap: 20,
      },
    
      text: {
        color: "deeppink",
        textAlign: "left",
        width: "90%",
    
      },
    
      input: {
        width: "90%",
        height: 60,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 18,
        paddingHorizontal: 10,
      },
    
      endereco:{
        width: "90%",
        textAlign: "right",
        color: "deeppink"
      },
    
      buttonFirst:{
        width: "90%",
        height: 60,
        backgroundColor: "deeppink",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
      },
    
      button:{
        color: "white"
      },
    
    buttonSecond:{
        flexDirection: "row",
        width: "90%",
        height: 60,
        backgroundColor: "white",
        borderWidth: 2,
        borderColor: "darkgray",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        gap: 12
    },
    
    logo:{
        width: 20,
        height: 20
    },
    
    rodape:{
        color: "dimgray"
    },
    
    link: {
        color: "deeppink",
        fontWeight: "bold"
    },
});