import React from 'react';
import { Text, View, StyleSheet, Image, TextInput, Button } from 'react-native';
import Constants from 'expo-constants';

export default function Login() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://w7.pngwing.com/pngs/659/667/png-transparent-computer-icons-user-profile-blog-others-miscellaneous-rectangle-logo.png',}}
        style={styles.image}
      />
      <TextInput
        style={styles.textinput}
        placeholder="Usuário"
      />
      <TextInput
        style={styles.textinput}
        placeholder="Senha"
        secureTextEntry={true}
      />
      <Button
        title="Entrar"
        color="#808080"
        onPress={() => alert('Entra na área autenticada.')}
      />
      <Text
        style={styles.paragraph}
        onPress={() => alert('Redefine a senha.')}
      >
      Esqueceu sua senha?
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 12,
    textAlign: 'center',
  },
  image: {
    height: 25,
    width: 25,
  },
  textinput: {
    height: 30,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 3,
  },
});
