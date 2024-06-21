import { View, Text, TextInput, Alert, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { styles } from './Styles'
import Google from "../../../assets/google-logo.png";

const Formulario = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    Alert.alert("Login", `E-mail: ${username}\nSenha: ${password}`);
  };

  return (
    <View style={styles.form}>
        <Text style={styles.text}> <Text style={styles.link}>Olá,</Text> {"\n Bem-vindo(a) de volta!"} </Text>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Text style={styles.endereco}>Esqueci minha senha</Text>
        <TouchableOpacity style={styles.buttonFirst} onPress={handleLogin}>
            <Text style={styles.button}>Entrar</Text>
          </TouchableOpacity>
          <Text>
            {" "}
            ---------------------- Ou entre com ----------------------{" "}
          </Text>
          <TouchableOpacity style={styles.buttonSecond}>
            <Image source={Google} style={styles.logo}></Image>
            <Text style={styles.rodape}>Entrar com o Google</Text>
          </TouchableOpacity>
          <Text>Não tem conta? <Text style={styles.link}>Crie agora</Text></Text>
      </View>
  )
}

export default Formulario;